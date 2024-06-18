import Image from "next/image";

const Blogs = () => {
  return (
    <>
      <div className="view-container mt-[50px] mb-[150px]  grid grid-cols-1 item-center justify-start gap-6">
        <div className="font-bold text-3xl mb-5  text-white">
          Blogs
        </div>
        <div className=" rounded-xl md:w-[400px] w-full bg-zinc-700  pb-6 overflow-hidden shadow-lg hover:scale-104 transition">
          <Image width={1000} height={1000} className="w-full" src="/projects/Thumbnail.jpg" alt="Article Image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              TRAVEL CREW - A Flutter App Built with Appwrite | Appwrite
              Hashnode Hackathon
            </div>
            <p className="text-zinc-400 text-lg font-normal">
              Planning your next trip, but cant find travel partners? We solved
              your Problem!
            </p>
          </div>
          <div className="px-6 py-4">
            <a
              href="https://hashnode.com/article-url"
              className="bg-zinc-500 hover:bg-zinc-900 transition text-white font-bold py-2 px-4 rounded-full"
            >
              Read Article
            </a>
          </div>
        </div>
      </div>

    </>
  );
}

export default Blogs;


