import Link from 'next/link';
import { MdLogin } from 'react-icons/md';
import { GoSearch } from 'react-icons/go';

const Header = () => {
  return (
    <div className=" bg-gradient-to-br from-slate-100 to-slate-200 border-b border-gray-300">
      <header className="flex justify-between bg-gradient-to-br from-slate-100 to-slate-200 items-stretch max-w-7xl mx-auto h-16 pl-6 text-gray-700">
        <div className="flex items-stretch">
          <h1 className=" text-4xl items-center flex font-semibold pr-4  border-slate-300">
            Staff<span className=" text-green-600">Link</span>
          </h1>
        </div>
        <div className="flex items-center w-1/3 relative">
          <input
            className="pl-6 w-full rounded-full h-10 focus:outline-none"
            placeholder="Search the gulag..."
          ></input>
          <GoSearch className="absolute left-[93%] " />
        </div>
        <nav className="flex justify-between items-stretch">
          <Link
            className=" items-center justify-center flex border-slate-300 w-20 hover:bg-gradient-to-br from-gray-200 to-gray-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className=" items-center justify-center flex border-slate-300 w-20 hover:bg-gradient-to-br from-gray-200 to-gray-300"
            href="/app"
          >
            App
          </Link>
          <Link
            className=" items-center justify-center flex border-slate-300 w-20 hover:bg-gradient-to-br from-gray-200 to-gray-300"
            href="/about-us"
          >
            About
          </Link>
          <Link
            className=" items-center justify-center flex border-slate-300 w-20 hover:bg-gradient-to-br from-gray-200 to-gray-300"
            href="/contact"
          >
            Contact
          </Link>
          <div className="items-center justify-center flex border-slate-300 w-16 pr-2 hover:bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer">
            <MdLogin className=" h-7 w-7" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
