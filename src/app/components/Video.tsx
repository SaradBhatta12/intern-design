const Video = () => {
  return (
    <div className="w-full aspect-video flex justify-center">
      <iframe
        className="w-[98%] h-[90%] mt-5 rounded-2xl"
        src="https://www.youtube.com/embed/xV9HnITo2C0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
