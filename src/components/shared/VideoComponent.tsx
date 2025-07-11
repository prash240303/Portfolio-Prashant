import { list } from "@vercel/blob";
async function VideoComponent({
  fileName,
  title,
}: {
  fileName: string;
  title: string;
}) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const url =
    "https://pasp3hha2jfsaiwz.public.blob.vercel-storage.com/echo-chat-AB1zhCP8soPOmnJJP7Fho36VpJgaFg.mp4";
  return (
    <video
      className="size-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
      aria-label={`${title} project video`}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      preload="none"
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoComponent;
