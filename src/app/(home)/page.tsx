import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  CalendarCheck,
  ServerCog,
  Users,
  UserCheck,
  ShieldCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="px-6 py-16 md:pb-24 md:pt-50 text-center">
        <div className="flex flex-col items-center mx-auto max-w-5xl">
          <h1 className="mt-6 md:text-7xl font-extrabold tracking-tight text-5xl">
            Open Source Software to boost your club development experience
          </h1>
          <p className="mt-4 text-lg text-fd-foreground">
            ACM Projects presents you HackKit and ClubKit. Blah Blah Blah
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/hackkit"
              className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold shadow transition hover:opacity-90"
            >
              HackKit <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              href="/clubkit"
              className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold shadow transition hover:opacity-90"
            >
              ClubKit <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Users className="h-5 w-5" aria-hidden />}
            title="RowdyHacks XI"
            desc="Keep real-time data on active membership participation."
            img="/img/rowdyhacks.png"
          />
          <Feature
            icon={<CalendarCheck className="h-5 w-5" aria-hidden />}
            title="Event Creation & Management"
            desc="Schedule and organize club meetings, social events, and workshops."
            img="/img/rowdyhacks.png"
          />
          <Feature
            icon={<UserCheck className="h-5 w-5" aria-hidden />}
            title="Check-In System"
            desc="Quick and simple attendance check-ins for any event."
            img="/img/rowdyhacks.png"
          />
          <Feature
            icon={<ShieldCheck className="h-5 w-5" aria-hidden />}
            title="Admin Panel"
            desc="Moderate clubs and users with role-based access."
            img="/img/rowdyhacks.png"
          />
          <Feature
            icon={<ServerCog className="h-5 w-5" aria-hidden />}
            title="Solid Foundations"
            desc="TypeScript, Next.js, Drizzle, Tailwind — easily customizable."
            img="/img/rowdyhacks.png"
          />
          <Feature
            icon={<Rocket className="h-5 w-5" aria-hidden />}
            title="Production ready"
            desc="Battle tested at scale with preview deployments and CI."
            img="/img/rowdyhacks.png"
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
              title="Host ClubKit"
              desc="Connect and empower your student organizations."
            />
            <Step
              n="3"
              title="Grow Your Club"
              desc="Schedule events, view statistics, and send announcements"
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
            {/* <Faq
              q="Can I have an introduction to HackKit?"
              a={`Running a hackathon is tough — from last-minute package delays to food order mix-ups, there’s always something unexpected. HackKit can’t fix logistics, but it can handle the tech that makes your event run smoothly.
                  With battle-tested tools for registration, check-in, passes, scheduling, judging, and an easy admin panel, HackKit helps your team focus on what matters: building a great experience.

                  Want to dive in? Explore our OSS docs (updated as features ship), or join our Discord to connect, share feedback, and get support.`}
            /> */}
            <Faq
              q="Is ClubKit open source?"
              a="Yes — MIT licensed. You can self-host, extend, and contribute."
            />
            <Faq
              q="What do I need to deploy?"
              a="A Next.js host (e.g., Vercel) and a SQL database. Check the docs for environment variables and adapters."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24 text-center">
        <div className="mx-auto max-w-3xl rounded-2xl border p-8 shadow-sm">
          <h3 className="text-xl font-bold">Ready to bring ClubKit to your university?</h3>
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
    <div className="md:absolute w-fit mb-5 md:mb-0 mx-5 md:left-1/2 md:-translate-x-1/2 md:bottom-0 md:translate-y-[100%] rounded-2xl border backdrop-blur-lg p-3 md:transition md:group-hover:-translate-y-4 text-center">
      <div className="text-blue-400 text-2xl font-extrabold">{value}</div>
      <div className="text-xs text-fd-muted-foreground">{label}</div>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
  img,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  img: string;
}) {
  return (
    <div className="group relative rounded-2xl border text-left shadow-sm transition hover:cursor-pointer hover:shadow-md overflow-hidden">
      <div className="relative transition p-6 md:group-hover:-translate-y-[25%]">
        <Image 
          className="rounded-xl mb-2"
          src={img}
          width={500}
          height={500}
          alt={title}
        />
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-1 text-fd-muted-foreground ">{desc}</p>
      </div>
      <Stat 
        label="Users"
        value="300"
      />
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
