import Link from "next/link";
import type { ReactNode } from "react";
import {
  CalendarCheck,
  ServerCog,
  Users,
  Ticket,
  ShieldCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Clubkit — Online Hackathon Software",
  description:
    "Feature-packed hackathon management: registration, check-in, passes, judging, schedule, and an admin panel that just works.",
};

export default function Clubkit() {
  return (
    <main className="flex flex-1 flex-col bg-linear-to-br from-[#949494] to-[#89daff] dark:from-[#373B44] dark:to-[#254c8a]">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            <Users className="h-3.5 w-3.5" aria-hidden />
            Battle-tested for real events
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-b from-gray via-blue-600 to-blue-700 dark:from-white dark:via-blue-600 dark:to-blue-700 text-transparent bg-clip-text">
            ClubKit
          </h1>
          <p className="mt-4 text-lg text-fd-foreground">
            Feature-packed hackathon management software that just works.
            Registration, passes, judging, schedule, and an easy admin panel —
            all in one place.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/docs/clubkit/intro"
              className="inline-flex items-center gap-2 bg-fd-foreground rounded-xl border px-6 py-3 font-semibold text-fd-background shadow transition hover:opacity-90"
            >
              Read the Docs <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="https://github.com/acmutsa/ClubKit"
              className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold transition hover:bg-fd-foreground/10"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Users className="h-5 w-5" aria-hidden />}
            title="Seamless Registration"
            desc="Applications, confirmations, and communication with minimal setup."
          />
          <Feature
            icon={<Ticket className="h-5 w-5" aria-hidden />}
            title="Passes & Check In"
            desc="Generate event passes and scan at the door for speedy check in."
          />
          <Feature
            icon={<CalendarCheck className="h-5 w-5" aria-hidden />}
            title="Schedule & Announcements"
            desc="Publish agendas, workshops, and push updates during the event."
          />
          <Feature
            icon={<ShieldCheck className="h-5 w-5" aria-hidden />}
            title="Admin Panel"
            desc="Moderate users, teams, and submissions with role-based access."
          />
          <Feature
            icon={<ServerCog className="h-5 w-5" aria-hidden />}
            title="Solid Foundations"
            desc="TypeScript, Next.js, Drizzle, Tailwind — easily customizable."
          />
          <Feature
            icon={<Rocket className="h-5 w-5" aria-hidden />}
            title="Production ready"
            desc="Battle tested at scale with preview deployments and CI."
          />
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold">How it works</h2>
          <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Step
              n="1"
              title="Clone & Configure"
              desc="Set environment vars, connect your DB, customize branding."
            />
            <Step
              n="2"
              title="Launch Registration"
              desc="Open applications, manage approvals, send notifications."
            />
            <Step
              n="3"
              title="Run the Event"
              desc="Check-in, schedule updates, judging, and live announcements."
            />
          </ol>
          <div className="mt-6 text-center">
            <Link href="/docs/clubkit/intro" className="font-semibold underline">
              Full setup guide →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-6 space-y-4">
            <Faq
              q="Can I have an introduction to HackKit?"
              a={`Running a hackathon is tough — from last-minute package delays to food order mix-ups, there’s always something unexpected. HackKit can’t fix logistics, but it can handle the tech that makes your event run smoothly.
With battle-tested tools for registration, check-in, passes, scheduling, judging, and an easy admin panel, HackKit helps your team focus on what matters: building a great experience.

Want to dive in? Explore our OSS docs (updated as features ship), or join our Discord to connect, share feedback, and get support.`}
            />
            <Faq
              q="Is HackKit open source?"
              a="Yes — MIT licensed. You can self-host, extend, and contribute."
            />
            <Faq
              q="What do I need to deploy?"
              a="A Next.js host (e.g., Vercel) and a SQL database. Check the docs for environment variables and adapters."
            />
            <Faq
              q="Does it support judging?"
              a="Yes — submissions, scoring, and results are part of the standard flow or can be added as a package/module."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24 text-center">
        <div className="mx-auto max-w-3xl rounded-2xl border p-8 shadow-sm">
          <h3 className="text-xl font-bold">Ready to run your next hackathon?</h3>
          <p className="mt-2 text-fd-muted-foreground">
            Start with the docs or jump straight into the codebase.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/docs/clubkit/intro"
              className="inline-flex items-center gap-2 rounded-xl bg-fd-foreground px-6 py-3 font-semibold text-fd-background shadow transition hover:opacity-90"
            >
              Get Started <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="https://github.com/acmutsa/ClubKit"
              className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold transition hover:bg-fd-foreground/10"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Small presentational bits ---------- */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border p-4 text-center">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-xs text-fd-muted-foreground">{label}</div>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border p-6 text-left shadow-sm transition hover:shadow-md">
      <div className="mb-3 inline-flex items-center justify-center rounded-xl border p-2">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-1 text-fd-muted-foreground">{desc}</p>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <li className="rounded-2xl border p-6">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold">
        {n}
      </div>
      <h3 className="mt-3 text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-fd-muted-foreground">{desc}</p>
    </li>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border p-4 open:shadow-sm">
      <summary className="cursor-pointer list-none font-semibold">{q}</summary>
      <p className="mt-2 text-sm text-fd-muted-foreground whitespace-pre-line">
        {a}
      </p>
    </details>
  );
}
