import { useEffect } from 'react';

const BlobFollow = () => {
  useEffect(() => {
    const blob = document.getElementById("blob");

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      const blobRect = blob.getBoundingClientRect();
      const halfBlobWidth = blobRect.width / 2;
      const halfBlobHeight = blobRect.height / 2;

      const constrainedX = Math.max(-halfBlobWidth, Math.min(window.innerWidth - halfBlobWidth, clientX - halfBlobWidth));
      const constrainedY = Math.max(-halfBlobHeight, Math.min(window.innerHeight - halfBlobHeight, clientY - halfBlobHeight));
      
      blob.animate({
        left: `${constrainedX}px`,
        top: `${constrainedY}px`
      }, { duration: 3000, fill: "forwards" });
    };

    window.addEventListener('pointermove', handlePointerMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div className='-z-10 absolute w-full overflow-hidden h-full'>
      <div id="blob" className='absolute blur-3xl opacity-5 bg-blue-500 rounded-full'></div>
    </div>
  );
};

export default BlobFollow;
