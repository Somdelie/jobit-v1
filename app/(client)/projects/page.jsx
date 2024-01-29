import Card from "@/components/client/projects/Card";
import SearchBar from "@/components/client/projects/SearchBar";
import { projects } from "@/data/data";

export const metadata = {
  title: "Projects",
};
const Projects = () => {
  return (
    <section className="min-h-screen py-8 px-4 sm:py-16 lg:px-6 ">
      <SearchBar metadata={metadata} />

      <div className="mx-auto mt-4 gap-4 overflow-hidden grid sm:grid-cols-3 max-w-[90%] ">
        {projects?.map((job) => (
          <Card key={job?.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
