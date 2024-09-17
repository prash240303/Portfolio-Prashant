import Image from "next/image";

const Blogs = () => {
  return (
    <>
      <div className="view-container mt-32 mb-24 grid grid-cols-1 item-center justify-start gap-6">
        <div className="font-bold text-3xl text-gray-900 dark:text-white">
          Blogs
        </div>
        <div className="rounded-xl mb-3 md:w-[400px] w-full bg-gray-200 dark:bg-zinc-700 pb-6 overflow-hidden shadow-lg hover:scale-104 transition">
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
          <div className="px-6 py-4">
            <a
              href="https://hashnode.com/article-url"
              className="bg-gray-300 dark:bg-zinc-500 hover:bg-gray-400 dark:hover:bg-zinc-900 transition text-gray-900 dark:text-white font-bold py-2 px-4 rounded-full"
            >
              Read Article
            </a>
          </div>
        </div>

        <span className="text-xl mt-2">More Blogs Coming Soon...</span>
      </div>
    </>
  );
};

export default Blogs;
