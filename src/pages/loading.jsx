const Loading = () => {
  return (
    <div className="loading flex items-center justify-center h-screen">
        <video src="./icons/loading.webm" autoPlay className='w-24 aspect-auto' alt="loading gif" />
    </div>
  );
};

export default Loading;
