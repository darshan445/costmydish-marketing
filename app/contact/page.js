import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export const metadata = {
  title: 'Contact & Support — CostMyDish',
  description: 'Get help with CostMyDish. Contact our support team or reach out about privacy requests.',
};

const FAQ = [
  {
    q: 'How do I reset my password?',
    a: 'On the login screen, use the password reset option. A reset link will be sent to your registered email.',
  },
  {
    q: 'How do I cancel my Hobbyist subscription?',
    a: 'Subscriptions are managed through the App Store (iOS) or Google Play (Android). Open your store account → Subscriptions → CostMyDish → Cancel.',
  },
  {
    q: 'Will changing currency convert my recipe prices?',
    a: 'No. Changing currency in Settings updates display symbols only. You will need to update ingredient and selling prices manually.',
  },
  {
    q: 'How do I delete my account?',
    a: 'Go to Settings → Delete Account in the app. This permanently removes your recipes, ingredients, and profile data.',
  },
];

export default function ContactPage() {
  const { supportEmail, privacyEmail } = siteConfig;

  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wider text-primary">Support</p>
        <h1 className="mt-2 text-3xl font-extrabold text-text sm:text-4xl">Contact & Support</h1>
        <p className="mt-4 text-lg text-text-secondary">
          We&apos;re here to help with account issues, billing questions, and general feedback about CostMyDish.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-lg font-bold text-text">General support</h2>
            <p className="mt-2 text-sm text-text-secondary">
              App bugs, login problems, subscriptions, feature questions, and account help.
            </p>
            <a
              href={`mailto:${supportEmail}`}
              className="mt-4 inline-block text-sm font-semibold text-primary underline hover:text-primary-dark"
            >
              {supportEmail}
            </a>
          </article>

          <article className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-lg font-bold text-text">Privacy requests</h2>
            <p className="mt-2 text-sm text-text-secondary">
              Data access, correction, deletion, or other privacy-related enquiries.
            </p>
            <a
              href={`mailto:${privacyEmail}`}
              className="mt-4 inline-block text-sm font-semibold text-primary underline hover:text-primary-dark"
            >
              {privacyEmail}
            </a>
          </article>
        </div>

        <div className="mt-10 rounded-2xl bg-surface-alt p-6">
          <h2 className="text-lg font-bold text-text">Response time</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            We aim to reply within 1–2 business days. Include your account email and, if relevant,
            your device (iOS/Android) and app version so we can help faster.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-bold text-text">Frequently asked questions</h2>
          <div className="mt-6 space-y-4">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-border bg-surface px-5 py-4"
              >
                <summary className="cursor-pointer list-none font-semibold text-text marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-primary transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-text-secondary">
          See also our{' '}
          <Link href="/terms" className="text-primary underline">Terms & Conditions</Link>
          {' '}and{' '}
          <Link href="/privacy" className="text-primary underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
