import PropTypes from 'prop-types';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { createContent } from '../content.js';
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  getMessages,
  isSupportedLocale,
  resolveLocale,
} from './index.js';

const LocaleContext = createContext(null);

const STORAGE_KEY = 'arbill_locale';
const QUERY_PARAM = 'lang';

const DEFAULT_LOCALE_LABELS = {
  en: 'English',
  es: 'Español',
  it: 'Italiano',
  ru: 'Русский',
  vi: 'Tiếng Việt',
  zh: '中文',
};

const getLocaleLabel = (locale) => DEFAULT_LOCALE_LABELS[locale] ?? locale.toUpperCase();

const normalizeLocale = (candidate) => {
  if (!candidate) {
    return null;
  }

  const lowerCased = candidate.toLowerCase();
  if (isSupportedLocale(lowerCased)) {
    return lowerCased;
  }

  return resolveLocale([lowerCased]);
};

const readStorage = (key) => {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    console.warn('Unable to read locale from storage:', error);
    return null;
  }
};

const writeStorage = (key, value) => {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.warn('Unable to persist locale to storage:', error);
  }
};

const detectLocale = () => {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const paramLocale = normalizeLocale(urlParams.get(QUERY_PARAM));
  if (paramLocale) {
    writeStorage(STORAGE_KEY, paramLocale);
    return paramLocale;
  }

  const storedLocale = normalizeLocale(readStorage(STORAGE_KEY));
  if (storedLocale) {
    return storedLocale;
  }

  const navigatorLanguages =
    window.navigator?.languages?.length > 0
      ? window.navigator.languages
      : window.navigator?.language
        ? [window.navigator.language]
        : [];

  return resolveLocale(navigatorLanguages);
};

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(() => detectLocale());

  const setLocale = useCallback((nextLocale) => {
    if (!nextLocale || !isSupportedLocale(nextLocale)) {
      console.warn(`Attempted to set unsupported locale "${nextLocale}".`);
      return;
    }

    setLocaleState(nextLocale);
    writeStorage(STORAGE_KEY, nextLocale);
  }, []);

  const messages = useMemo(() => getMessages(locale), [locale]);
  const content = useMemo(() => createContent(messages), [messages]);

  const supportedLocales = [...SUPPORTED_LOCALES];
  const localeLabels = supportedLocales.reduce((acc, code) => {
    acc[code] = getLocaleLabel(code);
    return acc;
  }, {});

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      messages,
      content,
      supportedLocales,
      localeLabels,
    }),
    [locale, setLocale, messages, content, supportedLocales, localeLabels],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useLocaleContext() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocaleContext must be used within a LocaleProvider.');
  }
  return context;
}

export function useLocaleContent() {
  const context = useLocaleContext();
  return context.content;
}

export function useLocale() {
  const context = useLocaleContext();
  return {
    locale: context.locale,
    setLocale: context.setLocale,
    supportedLocales: context.supportedLocales,
    localeLabels: context.localeLabels,
  };
}
