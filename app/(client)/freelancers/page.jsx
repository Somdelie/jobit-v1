import Card from "@/components/client/freelancers/Card";
import SearchBar from "@/components/client/freelancers/SearchBar";
import { freelancers } from "@/data/data";

export const metadata = {
  title: "freelancers",
};

const Freelancers = () => {
  return (
    <section className="min-h-screen py-8 px-4 sm:py-16 lg:px-6 ">
      <SearchBar metadata={metadata} />

      <div className="mx-auto mt-4 gap-4 overflow-hidden grid sm:grid-cols-3 max-w-[90%] ">
        {freelancers?.map((user) => (
          <Card key={user?.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default Freelancers;
