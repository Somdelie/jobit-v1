import Faqs from "@/components/client/news/Faqs";
import Members from "@/components/client/news/Members";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="max-w-[90%] sm:max-w-[80%] mx-auto px-4 py-16 lg:px-6 ">
      <h2 className="font-semibold sm:text-4xl mt-2 dark:text-gray-300">
        Who we <span className="text-roseRed">are?.</span>{" "}
      </h2>
      <div className="grid sm:grid-cols-2 mt-4 dark:text-gray-400">
        <div>
          <Image
            src="/about-banner.png"
            alt="Precedent logo"
            width="500"
            height="500"
            className=" rounded-sm"
          ></Image>
        </div>
        <div>
          <p>
            Jobit is a search engine and, as such, collects job offers published
            by other sites. We have no part in the recruiting process and, for
            this reason, we invite you to contact the employer directly if you
            need information about:
          </p>
          <ul className="my-4 text-gray-500">
            <li>
              - how to request the necessary documentation for the job
              application;
            </li>
            <li>- how to send your CV or your job application;</li>
            <li> - the status of your application.</li>
          </ul>
          <p>
            <span className="text-roseRed">Our goal</span> is to make finding a
            job a simple, quick and satisfying experience. Our specialized teams
            are constantly working on:
          </p>
          <ul className="my-4 text-gray-500">
            <li>- making an easy to use site;</li>
            <li>
              - using the best technology in order to guarantee the best
              results;
            </li>
            <li> - helping you, if necessary.</li>
          </ul>
        </div>
      </div>
      <Members />
      <Faqs />
    </section>
  );
};

export default About;
