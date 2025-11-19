import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  Building2,
} from "lucide-react";
import Profile from "@/components/profile";
import { teamMembers } from "@/utils/team";
import ShowcaseCard from "@/components/showcase/card";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-linear-to-br from-[#f15a22] to-white dark:to-[#f15a22] dark:from-[#0c2340]">
      {/* Hero */}
      <section className="px-6 py-16 md:pb-16 md:pt-50 text-center">
        <div className="flex flex-col items-center mx-auto max-w-5xl">
          <h1 className="mt-6 md:text-6xl font-extrabold text-fd-background-foreground tracking-tight text-5xl">
            Open Source Software to boost your club development experience
          </h1>
          <p className="mt-4 text-lg text-fd-background-foreground">
            ACM Projects is a group of developers dedicated to creating software that empowers communities from club management to hackathon infrastructure.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/hackkit"
              className="inline-flex items-center gap-2 rounded-xl bg-fd-foreground text-fd-background border px-6 py-3 font-semibold shadow transition hover:opacity-90"
            >
              HackKit <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              href="/clubkit"
              className="inline-flex items-center gap-2 rounded-xl bg-fd-foreground text-fd-background border px-6 py-3 font-semibold shadow transition hover:opacity-90"
            >
              ClubKit <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are / About the Team */}
      <section className="px-6 mb-8">
        <div className="flex flex-col mx-auto max-w-5xl p-6 border-1 rounded-2xl">
          <h2 className="text-3xl border-b-2 mb-4 font-bold text-fd-background-foreground">Who We Are</h2>
          <div className="relative">
            <Image 
              className="float-right rounded-4xl md:flex w-30 h-30"
              src="/img/acm_oss_logo.png"
              width={500}
              height={500}
              alt="ACM Logo"
            />
            <p className="text-lg text-[#383535] dark:text-[#e0c5c5] mt-2">ACM Projects is a organization created through ACM UTSA. We focus on building production-ready tools that help university clubs run smoothly and enhance student engagement across campuses, empowering <b>ANYONE</b> to collaborate, innovate, and gain real-world development experience.</p>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="px-6 mb-8">
        <div className="mx-auto max-w-6xl flex flex-col border-1 p-6 rounded-2xl">
          <h2 className="text-3xl border-b-2 mb-4 font-bold text-fd-background-foreground">Our Projects</h2>
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-between">
              <ShowcaseCard 
                icon={<Rocket className="h-5 w-5" aria-hidden />}
                title="HackKit"
                desc="HackKit was used for ACM's biggest event RowdyHacks."
                img="/img/rowdyhacks.png"
                label="Users"
                value="500"
              />
              <div className="flex justify-center items-center mt-4 gap-6">
                <Link className="border rounded-2xl px-4 py-2 font-semibold dark:hover:bg-white/10 hover:bg-black/10 shadow transition" href="https://rowdyhacks.org/">Checkout RowdyHacks</Link>
                <Link className="border rounded-2xl px-4 py-2 font-semibold dark:hover:bg-white/10 hover:bg-black/10 shadow transition" href="/hackkit">Learn more about HackKit</Link>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <ShowcaseCard 
                icon={<Building2 className="h-5 w-5" aria-hidden />}
                title="ClubKit"
                desc="ClubKit is used for ACM's organization portal."
                img="/img/portal.png"
                label="Users"
                value="1000"
              />
              <div className="flex justify-center items-center mt-4 gap-6">
                <Link className="border rounded-2xl px-4 py-2 fond-semibold dark:hover:bg-white/10 hover:bg-black/10 shadow transition" href="https://portal.acmutsa.org/">Checkout Portal</Link>
                <Link className="border rounded-2xl px-4 py-2 font-semibold dark:hover:bg-white/10 hover:bg-black/10 shadow transition" href="/clubkit">Learn more about ClubKit</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission/Goal */}
      <section className="px-6 mb-8">
        <div className="mx-auto max-w-6xl flex flex-col border-1 p-6 rounded-2xl">
          <h2 className="text-3xl border-b-2 font-bold text-fd-background-foreground mb-4">Our Mission</h2>
          <p className="text-lg text-[#383535] dark:text-[#e0c5c5]">ACM Projects is an open-source software organization dedicated to building impactful,
            real-world solutions that empower students to learn, collaborate, and innovate. We aim
            to create tools that enhance campus life, support student organizations, and make a 
            lasting difference int he broader tech community.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="px-6 mb-8">
        <div className="mx-auto max-w-5xl flex flex-col border-1 p-6 rounded-2xl">
          <h2 className="text-3xl border-b-2 font-bold text-fd-background-foreground mb-4">Meet the Team</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {teamMembers.map((member) => (
              <Profile key={member.link} image={member.image} link={member.link} alt={member.name}/>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="px-6 mb-8">
        <div className="mx-auto max-w-5xl flex flex-col border-1 p-6 rounded-2xl">
          <h2 className="text-3xl border-b-2 font-bold text-fd-background-foreground mb-4">Get Involved</h2>
          <p className="text-lg text-[#383535] dark:text-[#e0c5c5]">ACM Projects is an open-source community where students and contributors from anywhere can
            collaborate to build impactful software. Whether you're a designer, developer, or just
            passionate about technology, there's a place for you here.
          </p>
          <Link
            target="_blank"
            href="https://github.com/acmutsa"
            className="h-fit w-fit rounded-xl border px-6 py-3 font-semibold shadow transition dark:hover:bg-white/10 hover:bg-black/10 mt-4"
          >Join Our Projects</Link>

        </div>
      </section>
    </main>
  );
}