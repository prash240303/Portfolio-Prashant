import CdBack from "@/components/shared/CdBack";
import Image from "next/image";

const Blogs = () => {
  return (
    <>
      <section className="pb-3 pt-8 md:mt-8 md:pb-16 flex gap-12 flex-col lg:mt-10">
        <div className="flex items-end gap-5">
          <h1 className="text-4xl font-bold tracking-tight">Blogs</h1>
        </div>

        <a
          href="https://travelcrew.hashnode.dev/travel-crew-a-flutter-app-built-with-appwrite-appwrite-hashnode-hackathon"
          className="rounded-xl md:w-[400px] border border-neutral-200 dark:border-neutral-800 shadow-neutral-100 dark:shadow-neutral-800 hover:scale-105 w-full bg-gray-200 dark:bg-zinc-700 pb-6 overflow-hidden shadow-lg hover:scale-104 transition"
        >
          <Image
            width={1000}
            height={1000}
            className="w-full"
            src="/projects/Thumbnail.jpg"
            alt="Article Image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              TRAVEL CREW - A Flutter App Built with Appwrite | Appwrite
              Hashnode Hackathon
            </div>
            <p className="text-gray-700 dark:text-zinc-400 text-lg font-normal">
              {` Planning your next trip, but can't find travel partners? We solved
              your problem!`}
            </p>
          </div>
        </a>
        <span className="text-sm font-normal font-sans mt-0 ">More Blogs Coming Soon...</span>

        <CdBack />
      </section>
    </>
  );
};

export default Blogs;
