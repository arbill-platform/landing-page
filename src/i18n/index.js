import en from './locales/en.js';

export const DEFAULT_LOCALE = 'en';

export const SUPPORTED_LOCALES = [DEFAULT_LOCALE];

const MESSAGES = {
  en,
};

export function getMessages(locale = DEFAULT_LOCALE) {
  if (locale && MESSAGES[locale]) {
    return MESSAGES[locale];
  }
  return MESSAGES[DEFAULT_LOCALE];
}

export function resolveLocale(navigatorLanguages = []) {
  const candidates = Array.isArray(navigatorLanguages) ? navigatorLanguages : [navigatorLanguages];

  const normalizedCandidates = candidates
    .filter(Boolean)
    .map((candidate) => candidate.toLowerCase());

  for (const candidate of normalizedCandidates) {
    if (SUPPORTED_LOCALES.includes(candidate)) {
      return candidate;
    }

    const base = candidate.split('-')[0];
    if (SUPPORTED_LOCALES.includes(base)) {
      return base;
    }
  }

  return DEFAULT_LOCALE;
}

export function isSupportedLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale);
}

export function registerLocale(locale, messages) {
  if (!locale || typeof locale !== 'string') {
    throw new Error('Locale key must be a non-empty string.');
  }

  if (!messages || typeof messages !== 'object') {
    throw new Error('Messages object is required to register a locale.');
  }

  const normalizedLocale = locale.toLowerCase();
  MESSAGES[normalizedLocale] = messages;

  if (!SUPPORTED_LOCALES.includes(normalizedLocale)) {
    SUPPORTED_LOCALES.push(normalizedLocale);
  }
}

