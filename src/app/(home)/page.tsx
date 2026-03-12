import Link from "next/link";
import { ArrowRight, Rocket, Building2 } from "lucide-react";
import Profile from "@/components/profile";
import { teamMembers } from "@/utils/team";
import ShowcaseCard from "@/components/showcase/card";
import Image from "next/image";
import CoolShader from "./cool-shader";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="px-6 py-16 md:pb-16 md:pt-50 text-center h-screen">
        <div className="absolute top-20 left-0 h-full w-full z-[-1]">
          <CoolShader />
        </div>
        <div className="flex flex-col items-center mx-auto max-w-5xl">
          <h1 className="mt-6 md:text-6xl font-extrabold tracking-tight text-5xl">
            Open <span className="text-blue-500">Software</span> for{" "}
            <span className="text-blue-500">Students</span> by UTSA's Leading
            Tech Org
          </h1>
          <p className="mt-4 text-lg text-fd-muted-foreground">
            We build software that empowers students and campus organizations.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#our-projects"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-semibold shadow transition hover:opacity-90"
            >
              Explore our Projects <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              href="/clubkit"
              className="inline-flex items-center gap-2 rounded-xl border bg-slate-700/50 px-6 py-3 font-semibold shadow transition hover:opacity-90"
            >
              Join the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are / About the Team */}
      <section className="px-6 mb-8">
        <div className="flex mx-auto max-w-6xl p-6 gap-2 items-center flex-wrap lg:flex-nowrap">
          <div className="flex-1">
            <h2 className="text-3xl border-b-2 mb-4">Who We Are</h2>
            <p className="text-lg text-fd-muted-foreground mt-2">
              ACM Projects is a organization created through ACM UTSA. We focus
              on building production-ready tools that help university clubs run
              smoothly and enhance student engagement across campuses,
              empowering <b>ANYONE</b> to collaborate, innovate, and gain
              real-world development experience.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              className="rounded-4xl w-30 h-30 flex-2"
              src="/img/acm_oss_logo.png"
              width={500}
              height={500}
              alt="ACM Logo"
            />
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="px-6 mb-8 scroll-mt-40" id="our-projects">
        <div className="mx-auto max-w-6xl flex flex-col p-6">
          <h2 className="text-3xl border-b-2 mb-4">Our Projects</h2>
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-between">
              <ShowcaseCard
                icon={<Rocket className="h-5 w-5" aria-hidden />}
                title="HackKit"
                desc="HackKit was used for ACM's biggest event RowdyHacks."
                img="/img/rowdyhacks.png"
                stats={[
                  {
                    label: "Hackers Supported",
                    value: "1000+",
                  },
                  {
                    label: "Events Hosted",
                    value: "10+",
                  },
                ]}
              />
              <div className="flex items-center mt-4 gap-2">
                <Link
                  className="border-2 rounded-2xl px-4 py-2 bg-blue-500 hover:opacity-90 nowrap flex items-center gap-2"
                  href="https://hackkit.pages.dev/"
                >
                  See it in use <ArrowRight size={18} aria-hidden />
                </Link>
                <Link
                  className="border-2 rounded-2xl px-4 py-2 bg-slate-700/50 hover:opacity-90"
                  href="/hackkit"
                >
                  Learn more about HackKit
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <ShowcaseCard
                icon={<Building2 className="h-5 w-5" aria-hidden />}
                title="ClubKit"
                desc="ClubKit is used for ACM's organization portal."
                img="/img/portal.png"
                stats={[
                  {
                    label: "Members",
                    value: "1000+",
                  },
                  {
                    label: "Events Listed",
                    value: "100+",
                  },
                ]}
              />
              <div className="flex items-center mt-4 gap-2">
                <Link
                  className="border-2 rounded-2xl px-4 py-2 bg-blue-500 hover:opacity-90 nowrap flex items-center gap-2"
                  href="https://portal.acmutsa.org/"
                >
                  See it in action
                  <ArrowRight size={18} aria-hidden />
                </Link>
                <Link
                  className="border-2 rounded-2xl px-4 py-2 bg-slate-700/50 hover:opacity-90"
                  href="/clubkit"
                >
                  Learn more about ClubKit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission/Goal */}
      <section className="px-6 mb-8">
        <div className="mx-auto max-w-6xl flex flex-col p-6 rounded-2xl">
          <h2 className="text-3xl border-b-2 mb-4">Our Mission</h2>
          <p>
            ACM Projects is an open-source software organization dedicated to
            building impactful, real-world solutions that empower students to
            learn, collaborate, and innovate. We aim to create tools that
            enhance campus life, support student organizations, and make a
            lasting difference int he broader tech community.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="px-6 mb-8">
        <div className="mx-auto max-w-6xl flex flex-col p-6 rounded-2xl">
          <h2 className="text-3xl border-b-2 mb-4">Meet the Team</h2>
          <div className="flex flex-wrap justify-start items-center gap-4">
            {teamMembers.map((member) => (
              <Profile
                key={member.link}
                image={member.image}
                link={member.link}
                alt={member.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="px-6 mb-8">
        <div className="mx-auto max-w-6xl flex flex-col p-6 rounded-2xl">
          <h2 className="text-3xl border-b-2 mb-4">Get Involved</h2>
          <p>
            ACM Projects is an open-source community where students and
            contributors from anywhere can collaborate to build impactful
            software. Whether you're a designer, developer, or just passionate
            about technology, there's a place for you here.
          </p>
          <Link
            target="_blank"
            href="https://github.com/acmutsa"
            className="h-fit w-fit rounded-xl border px-6 py-3 font-semibold shadow transition bg-slate-700/50 hover:opacity-90 mt-4"
          >
            Join Our Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
