export default function Hero() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">Build something great.</h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            A simple description for your project goes here.
          </p>

          <a href="#" className="mt-8 inline-block rounded-lg bg-black px-6 py-3 font-medium text-white">
            Get Started
          </a>
        </div>

        <div className="aspect-video rounded-2xl bg-gray-100"></div>
      </div>
    </section>
  );
}
