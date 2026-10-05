export default function Newsletter() {
  return (
    <section className="mx-auto w-full max-w-xl rounded-2xl border border-gray-200 bg-blue-500 p-8 text-center sm:p-10">
      <h2 className="text-3xl font-bold tracking-tight text-gray-950">
        Stay in the loop
      </h2>

      <p className="mx-auto mt-4 max-w-lg text-lg leading-7 text-gray-700">
        Subscribe to our newsletter for updates, new releases, and useful
        resources.
      </p>

      <form className="mt-8">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-lg border border-gray-300 bg-white px-5 py-4 text-base text-gray-950 outline-none transition focus:border-gray-950 focus:ring-1 focus:ring-gray-950"
          required
        />

        <button
          type="submit"
          className="mt-3 w-full rounded-lg bg-zinc-600 px-5 py-4 text-base font-semibold text-white transition hover:bg-zinc-700"
        >
          Subscribe
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-600">
        No spam. Unsubscribe anytime.
      </p>
    </section>
  );
}