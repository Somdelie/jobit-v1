import Article from "@/components/client/news/News";
import { articles } from "@/data/data";
import React from "react";

const News = () => {
  return (
    <section className="max-w-[90%] sm:max-w-[80%] mx-auto px-4 py-16 lg:px-6">
      <h2 className="font-semibold sm:text-4xl mt-2 dark:text-gray-300">
        Read our <span className="text-roseRed">Articles.</span>
      </h2>
      <Article articles={articles} />
    </section>
  );
};

export default News;
