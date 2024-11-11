import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex text-gray-400 justify-center gap-3 md:gap-20 h-16 font-bold bg-[#686767] items-center px-4 md:px-8">
      <div>
        <Link href={""}>Home</Link>
      </div>
      <div>
        <Link href={""}>Features</Link>
      </div>
      <div>
        <Link href={""}>Download</Link>
      </div>
      <div>
        <Link href={""}>Carrier</Link>
      </div>
      <div>
        <Link href={""}>Pricing</Link>
      </div>
    </div>
  );
};

export default Navbar;
