export function CtaSection() {
  return (
    <section id="download" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-3xl bg-primary px-8 py-14 text-center text-white sm:px-12">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to cost your next dish?</h2>
        <p className="mx-auto mt-4 max-w-lg text-white/90">
          Download CostMyDish on iOS or Android. Create your account, add ingredients, and see your first recipe cost breakdown in minutes.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <span className="rounded-full bg-white/15 px-6 py-3 text-sm font-semibold backdrop-blur">
            📱 iOS — App Store (coming soon)
          </span>
          <span className="rounded-full bg-white/15 px-6 py-3 text-sm font-semibold backdrop-blur">
            🤖 Android — Google Play (coming soon)
          </span>
        </div>
        <p className="mt-6 text-xs text-white/70">
          Store links will be added when the app is published.
        </p>
      </div>
    </section>
  );
}
