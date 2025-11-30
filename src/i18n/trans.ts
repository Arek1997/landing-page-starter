import type { Keys } from './keys';

const LOCALES = ['pl', 'en'];
type Locale = 'pl' | 'en';

const DEFAULT_LOCALE = 'pl';

const LANGUAGES = {
  pl: 'Polski',
  en: 'English',
} as const;

const TRANSLATIONS = {
  pl: {
    // Site metadata
    'site.title': 'Salamati',
    'site.description':
      'Kompleksowe narzędzie do ochrony dzieci w internecie. Kontrola rodzicielska, monitorowanie aktywności online, ochrona przed szkodliwymi treściami i zagrożeniami cybernetycznymi. Zadbaj o bezpieczeństwo swojego dziecka w sieci.',

    // Navigation
    'nav.login': 'Zaloguj się',
    'nav.register': 'Zarejestruj się',

    // Footer
    'footer.privacy-policy': 'Polityka prywatności',
    'footer.terms': 'Warunki usługi',

    // Privacy Policy page
    'privacy.title': 'Polityka prywatności',
    'privacy.description': 'Polityka prywatności aplikacji kontroli rodzicielskiej Salamati',

    // Terms of Service page
    'terms.title': 'Warunki usługi',
    'terms.description': 'Warunki usługi aplikacji kontroli rodzicielskiej Salamati',

    // Register page
    'register.hero.title': 'Salamati - Ochrona rodzicielska',
    'register.hero.subtitle': 'Ochrona rodzicielska nowej generacji',
    'register.hero.price-month': '60 SAR',
    'register.hero.price-week': '15 SAR',
    'register.hero.per-month': '/ Miesiąc',
    'register.hero.per-week': '/ Tydzień',
    'register.hero.image-alt': 'Ilustracja rodziny',

    // Register form
    'register.form.heading': 'Jeszcze jeden krok, aby uzyskać dostęp do treści mobilnych',
    'register.form.subheading':
      'Udowodnij, że jesteś człowiekiem weryfikując swój numer telefonu komórkowego',
    'register.form.mobile-label': 'Numer telefonu komórkowego',
    'register.form.mobile-placeholder': 'Numer telefonu komórkowego',
    'register.form.otp-label': 'Potwierdź kod OTP otrzymany w wiadomości SMS',
    'register.form.otp-hint': 'Wprowadź 4-cyfrowy kod',
    'register.form.email-label': 'Adres e-mail',
    'register.form.email-placeholder': 'Wprowadź adres e-mail',
    'register.form.subscribe': 'Subskrybuj',
    'register.form.continue': 'Kontynuuj',
    'register.form.verify-otp': 'Potwierdź OTP',
    'register.form.pricing':
      '1 KWD/tydzień dla Ooredoo i 0,2 KWD/dzień dla Zain i STC – z automatycznym odnowieniem',
    'register.form.login': 'Zaloguj się',
    'register.form.or-download': 'Lub pobierz',
    'register.form.terms-button': 'Pełne warunki i zasady',
    'register.form.mobile-device': 'Dla urządzenia mobilnego',
    'register.form.mobile-device-android': 'Dla urządzeń mobilnych Android',
    'register.form.mobile-device-ios': 'Dla urządzeń mobilnych iOS',
    'register.form.subscribing': 'Subskrybowanie...',
    'register.form.verifying': 'Weryfikacja...',
    'register.form.success': 'Sukces!',
    'register.form.verification-success': 'Weryfikacja zakończona pomyślnie!',
    'register.form.verification-redirecting': 'Przekierowywanie...',
    'register.form.error-generic': 'Wystąpił błąd. Spróbuj ponownie.',
    'register.form.error-confirmation-failed':
      'Weryfikacja nie powiodła się. Sprawdź kod i spróbuj ponownie.',

    // Register steps
    'register.steps.step1.title': 'Krok 1',
    'register.steps.step1.description':
      'Odblokuj ekskluzywne korzyści już teraz! Po prostu wprowadź swój numer MSISDN, aby natychmiast otrzymać unikalny kod OTP i aktywować subskrypcję.',
    'register.steps.step2.title': 'Krok 2',
    'register.steps.step2.description':
      'Aktywuj swoje konto płynnie, łącząc numer MSISDN z kodem OTP.',
    'register.steps.step3.title': 'Krok 3',
    'register.steps.step3.description':
      'Otrzymasz instrukcje i po prostu zaloguj się do swojego konta lub pobierz je bezpośrednio na komputer lub urządzenie mobilne.',

    // Register info
    'register.info.pricing-detail':
      '1 KWD/tydzień dla Ooredoo lub 0,2 KWD/dzień dla Zain i STC – z automatycznym odnowieniem',
    'register.info.description':
      'Salamati to usługa subskrypcyjna, która chroni dane, aplikacje i systemy w każdym środowisku',
    'register.info.renewal':
      'Subskrypcja będzie odnawiana automatycznie za 1000 filsów tygodniowo dla Ooredoo i 200 filsów dziennie dla Zain i STC, dopóki nie anulujesz subskrypcji.',
    'register.info.unsubscribe':
      'Aby anulować subskrypcję, wyślij STOP1 na 1442 dla Ooredoo lub U979 na 97979 dla Zain lub U A1 na 50984 dla STC',
    'register.info.age-restriction':
      'Aby korzystać z tej usługi, musisz mieć ukończone 18 lat lub uzyskać pozwolenie od rodziców lub osoby upoważnionej do opłacania rachunku.',
    'register.info.browser-note':
      'Upewnij się, że Twoja przeglądarka nie korzysta z żadnych technologii blokowania stron trzecich i że masz stabilne połączenie internetowe dla szybkiego dostępu do treści.',
    'register.info.support': 'W sprawie wsparcia skontaktuj się:',
    'register.info.terms-link': 'Pełne warunki i zasady',
    'register.info.click-here': 'Kliknij tutaj',
  },
  en: {
    // Site metadata
    'site.title': 'Salamati',
    'site.description':
      "Comprehensive tool for protecting children on the internet. Parental control, online activity monitoring, protection against harmful content and cyber threats. Take care of your child's safety online.",

    // Navigation
    'nav.login': 'Login',
    'nav.register': 'Register',

    // Footer
    'footer.privacy-policy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Privacy Policy page
    'privacy.title': 'Privacy Policy',
    'privacy.description': 'Privacy Policy for Salamati parental control app',

    // Terms of Service page
    'terms.title': 'Terms of Service',
    'terms.description': 'Terms of Service for Salamati parental control app',

    // Register page
    'register.hero.title': 'Salamati Parental Protection',
    'register.hero.subtitle': 'Next-generation parental protection',
    'register.hero.price-month': '60 SAR',
    'register.hero.price-week': '15 SAR',
    'register.hero.per-month': '/ Month',
    'register.hero.per-week': '/ Week',
    'register.hero.image-alt': 'Family illustration',

    // Register form
    'register.form.heading':
      'One more step needed to access your mobile content',
    'register.form.subheading':
      'Prove that you are a human by verifying your mobile phone number',
    'register.form.mobile-label': 'Mobile number',
    'register.form.mobile-placeholder': 'Mobile number',
    'register.form.otp-label': 'Confirm the OTP code you received via SMS',
    'register.form.otp-hint': 'Enter the 4-digit code',
    'register.form.email-label': 'Email address',
    'register.form.email-placeholder': 'Enter e-mail address',
    'register.form.subscribe': 'Subscribe',
    'register.form.continue': 'Continue',
    'register.form.verify-otp': 'Confirm OTP',
    'register.form.pricing':
      '1 KWD/week for Ooredoo and 0.2 KWD/day for Zain and STC – automatic renewal applies',
    'register.form.login': 'Login',
    'register.form.or-download': 'Or Download',
    'register.form.terms-button': "For complete T's & C's",
    'register.form.mobile-device': 'For mobile Device',
    'register.form.mobile-device-android': 'For mobile Android',
    'register.form.mobile-device-ios': 'For mobile iOS',
    'register.form.subscribing': 'Subscribing...',
    'register.form.verifying': 'Verifying...',
    'register.form.success': 'Success!',
    'register.form.verification-success': 'Verification successful!',
    'register.form.verification-redirecting': 'Redirecting...',
    'register.form.error-generic': 'An error occurred. Please try again.',
    'register.form.error-confirmation-failed':
      'Verification failed. Please check your code and try again.',

    // Register steps
    'register.steps.step1.title': 'Step 1',
    'register.steps.step1.description':
      'Unlock exclusive benefits now! Simply enter your MSISDN to instantly receive your unique OTP code and activate your subscription.',
    'register.steps.step2.title': 'Step 2',
    'register.steps.step2.description':
      'Activate your account seamlessly by linking your MSISDN with OTP code.',
    'register.steps.step3.title': 'Step 3',
    'register.steps.step3.description':
      'You will receive guidelines and simply log in to your account or download them directly to your desktop or mobile device.',

    // Register info
    'register.info.pricing-detail':
      '1 KWD/Week for Ooredoo or 0.2 KWD/Day for Zain and STC – automatic renewal applies',
    'register.info.description':
      'Salamati is a subscription service that protects data, applications, and systems in any environment',
    'register.info.renewal':
      'Subscription will be renewed automatically for 1000 fils per week for Ooredoo and 200 fils per day for Zain and STC until you unsubscribe.',
    'register.info.unsubscribe':
      'To unsubscribe send STOP1 to 1442 for Ooredoo or U979 to 97979 for Zain or U A1 to 50984 for STC',
    'register.info.age-restriction':
      'To make use of this service, you must be more than 18 years old or have received permission from your parents or person who is authorized to pay your bill.',
    'register.info.browser-note':
      'Please make sure that your browser is not using any 3rd-party blocking technologies and you have a healthy internet connection for swift access to the content.',
    'register.info.support': 'For support, please contact:',
    'register.info.terms-link': "For complete T's & C's",
    'register.info.click-here': 'Click here',
  },

} satisfies Record<keyof typeof LANGUAGES, Keys>;

export { LOCALES, DEFAULT_LOCALE, LANGUAGES, TRANSLATIONS };
export type { Locale };