import Link from 'next/link';
import { FiLink } from 'react-icons/fi';

const FooterTwo = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-500 to-slate-600">
      <div className=" text-sm max-w-7xl mx-auto  h-60 flex items-center text-slate-200 rounded-b-lg">
        <div className="flex justify-start items-center p-6 w-full px-10">
          <div className="self-stretch h-full mr-10">
            <div className="flex">
              <h1 className=" text-3xl items-center flex font-semibold pr-4  border-slate-300">
                <FiLink className="text-slate-50 mr-1 bg-gradient-to-br from-green-500 to-green-600 p-2 h-[40px] w-[40px] rounded-tl-2xl rounded-br-2xl" />
                Staff
                <span className=" text-transparent bg-gradient-to-br from-green-500 to-green-600 bg-clip-text">
                  Connect
                </span>
              </h1>
            </div>
            <p className=" text-sm">&copy; StaffConnect ltd. 1992</p>
          </div>

          <div className="flex flex-col">
            <Link href="/" className="pb-3">
              Careers
            </Link>
            <Link href="/" className="pb-3">
              FAQ
            </Link>
            <Link href="/" className="pb-3">
              Anal Discharge
            </Link>
            <Link href="/" className="pb-3">
              Blue Waffle
            </Link>
          </div>

          {/* <div className="flex flex-col">
            <Link href="/" className="pb-3">
              Careers
            </Link>
            <Link href="/" className="pb-3">
              FAQ
            </Link>
            <Link href="/" className="pb-3">
              Anal Discharge
            </Link>
            <Link href="/" className="pb-3">
              Blue Waffle
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
