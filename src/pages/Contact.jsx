import ContactHero from '../components/contact/ContactHero.jsx';
import AddressBookSection from '../components/contact/AddressBookSection.jsx';
import ContactFormSection from '../components/contact/ContactFormSection.jsx';
import CommunitySection from '../components/contact/CommunitySection.jsx';
import { useLocaleContent } from '../i18n/LocaleProvider.jsx';

function Contact() {
  const { contact } = useLocaleContent();
  const { hero, addressBook, form, community } = contact;

  return (
    <>
      <ContactHero hero={hero} />
      <AddressBookSection addressBook={addressBook} />
      <ContactFormSection form={form} />
      <CommunitySection community={community} />
    </>
  );
}

export default Contact;
