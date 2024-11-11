const FifthFooter = () => {
  return (
    <div>
      <div className="flex justify-center relative m-10 md:m-20 px-4">
        {/* Centered content on top of the image */}
        <div className="absolute z-10 w-11/12 sm:w-3/4 md:w-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-2xl p-6 flex flex-col gap-2 text-center shadow-xl">
          <h1 className="text-2xl md:text-3xl font-bold">
            Every inspiration from nature
          </h1>
          <p className="text-lg md:text-xl font-semibold">
            Get started using our services with a 30-day free trial
          </p>
          <button className="bg-black hover:bg-blue-700 text-gray-300 py-2 px-4 rounded-xl w-32 mx-auto mt-4 transition-all duration-300">
            Get Started
          </button>
        </div>
        {/* Background image */}
        <img
          className="w-full h-auto md:w-[95%] rounded-3xl object-cover"
          src="/nature.jpg"
          alt="nature"
        />
      </div>
    </div>
  );
};

export default FifthFooter;
