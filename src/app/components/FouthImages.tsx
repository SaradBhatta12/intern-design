const FouthImages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="relative">
        <img
          src="/work.png"
          alt="Work Culture"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex items-center justify-center text-center text-4xl md:text-5xl font-bold leading-tight">
        Features <br /> Ought to <br /> Partake
      </div>
      <div className="relative">
        <img
          src="/1542298796.jpg"
          alt="Teamwork"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="relative">
        <img
          src="/earth.png"
          alt="Earth"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default FouthImages;
