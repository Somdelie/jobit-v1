/* eslint-disable react/no-unescaped-entities */

import About from "@/components/client/home/About";
import Featured from "@/components/client/home/Featured";
import FeaturedJobs from "@/components/client/home/FeaturedJobs";
import Hero from "@/components/client/home/Hero";

export default function Home() {
  return (
    <div className="">
      <section className="hero min-h-screen">
        <Hero />
      </section>
      <section className="about w-90% sm:w-[90%] mx-auto">
        <About />
      </section>
      <section className="featured w-full mx-auto">
        <Featured />
      </section>
      <section className="featuredJobs">
        <FeaturedJobs />
      </section>
    </div>
  );
}
