import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-5xl flex-col gap-12 px-8 py-16 sm:px-16">
        {/* Hero */}
        <section className="flex flex-col gap-6">
          <h1 className="max-w-3xl text-5xl font-bold leading-tight text-black dark:text-zinc-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-[#383838]"
              href="#"
            >
              Get Started Now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] px-6 py-3 text-sm font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              href="#"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Stats / Metrics row */}
        <section className="grid grid-cols-2 gap-8 rounded-3xl border border-zinc-200/70 bg-white p-8 dark:border-white/10 dark:bg-[#0B1426]/95 backdrop-blur-2xl sm:grid-cols-4">
          {[
            { label: "Happy Customers", value: "12,450" },
            { label: "Projects Funded", value: "3,200" },
            { label: "Years in Business", value: "7" },
            { label: "Support Tickets", value: "0" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                {stat.value}
              </span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </span>
            </div>
          ))}
        </section>

        {/* Feature cards grid */}
        <section className="grid gap-6 md:grid-cols-3">
          {[
            "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
            "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
            "Anim id est laborum. Et dolorum fugriap Occasionally, I run into problems. Style is important, so colors",
            "Esse quam lorem ipsum dolor sit amet. Proin gravida nibh vel tellus placerat",
            "Amet, consectetur adipiscing elit. Donec sollicitudin molestie sollicitudin",
            "Nulla facilisi. Duis aute irure dolor in reprehenderit in voluptate velit esse",
          ].map((card, i) => (
            <article
              key={i}
              className="rounded-2xl border border-zinc-200/70 bg-white/90 p-6 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-[#0B1426]/95"
            >
              <h3 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Feature {i + 1}
              </h3>
              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {card}
              </p>
            </article>
          ))}
        </section>

        {/* Middle paragraph block */}
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200/70 bg-white/90 p-8 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-[#0B1426]/95">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              About This Page
            </h2>
            <p className="leading-7 text-zinc-600 dark:text-zinc-400">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200/70 bg-white/90 p-8 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-[#0B1426]/95">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Second Block
            </h2>
            <p className="leading-7 text-zinc-600 dark:text-zinc-400">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
          </article>
        </section>

        {/* Image strip */}
        <section className="grid gap-6 lg:grid-cols-3">
          {[
            "/next.svg",
            "/vercel.svg",
          ].map((src, i) => (
            <div
              key={src}
              className="flex items-center justify-center rounded-2xl border border-zinc-200/70 bg-zinc-100/80 p-8 shadow-lg dark:border-white/10 dark:bg-[#0B1426]/95"
            >
              <Image
                src={src}
                alt={`Image ${i + 1}`}
                width={120}
                height={48}
              />
            </div>
          ))}
          <div className="flex items-center justify-center rounded-2xl border border-zinc-200/70 bg-zinc-100/80 p-8 shadow-lg dark:border-white/10 dark:bg-[#0B1426]/95">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              Full-width placeholder block — content tbd
            </span>
          </div>
        </section>

        {/* CTA footer block */}
        <section className="rounded-3xl border border-zinc-200/70 bg-gradient-to-br from-zinc-100/80 to-white p-10 text-center shadow-2xl shadow-zinc-200/40 backdrop-blur-xl dark:from-[#0B1426]/80 dark:to-[#060A10]">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Call to Action Time
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Nihil impedit quo minus id quod maxime placeat facere possimus,
            omnis voluptas assumenda est, omnis dolor repellendus. Quis
            nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>
          <a
            className="inline-flex rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background shadow-lg transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="#"
          >
            Do The Thing
          </a>
        </section>
      </main>
    </div>
  );
}
