import App from './_app';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import {
  MdBookmarks,
  MdChat,
  MdSpaceDashboard,
  MdPeople,
  MdOutlineShowChart,
  MdCall,
  MdOutlineMail,
} from 'react-icons/md';
import { FaWhatsapp, FaLinkedin, FaAddressBook } from 'react-icons/fa';

const people = [
  {
    name: 'Spencer Bumsniff',
    age: 28,
    skills: 'Won a rimming competition against Harry Styles',
    profile:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg',
  },
  {
    name: 'Hillary Brownshaft',
    age: 48,
    skills: 'Good at cleaning Windows and a fantastic chef',
    profile:
      'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Norman Ermantraut',
    age: 18,
    skills: '6x League of Legends world champion',
    profile:
      'https://images.pexels.com/photos/6217815/pexels-photo-6217815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Amedeus Maximilianos',
    age: 88,
    skills: 'Wut Skills fam',
    profile:
      'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Roger Analbleed',
    age: 8,
    skills: 'Professional pirate',
    profile:
      'https://images.pexels.com/photos/6217815/pexels-photo-6217815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Duncan Bannatyne',
    age: 56,
    skills: 'He was on dragons den you nutter',
    profile:
      'https://images.pexels.com/photos/6908067/pexels-photo-6908067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Spencer Bumsniff',
    age: 28,
    skills: 'Won a rimming competition against Harry Styles',
    profile:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg',
  },
  {
    name: 'Hillary Brownshaft',
    age: 48,
    skills: 'Good at cleaning Windows and a fantastic chef',
    profile:
      'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Norman Ermantraut',
    age: 18,
    skills: '6x League of Legends world champion',
    profile:
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/kot-2508858_1280.jpg',
    background:
      'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Amedeus Maximilianos',
    age: 88,
    skills: 'Wut Skills fam',
    profile:
      'https://images.pexels.com/photos/321552/pexels-photo-321552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Roger Analbleed',
    age: 8,
    skills: 'Professional pirate',
    profile:
      'https://images.pexels.com/photos/6217815/pexels-photo-6217815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Duncan Bannatyne',
    age: 56,
    skills: 'He was on dragons den you nutter',
    profile:
      'https://images.pexels.com/photos/6908067/pexels-photo-6908067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const peopleMap = people.map((item, index) => {
  return (
    <div className=" h-[400px] w-[283px] min-w-[250px]" key={index}>
      <div className="flex flex-col justify-between bg-gradient-to-br from-slate-50 to-slate-100 h-full w-full border border-gray-300 rounded-md overflow-hidden relative">
        <div className=" h-2/5 bg-white">
          <img
            className=" overflow-hidden w-full object-cover h-full"
            src={item.background}
          />
        </div>
        <div className=" absolute top-0 left-0 h-2/5 w-full flex justify-start items-center pl-4">
          <div className=" h-32 w-32 rounded-full border-2 border-white bg-white overflow-hidden ">
            <img className="h-full w-full object-cover" src={item.profile} />
          </div>
        </div>
        <div className="p-8">
          <div className="flex flex-col justify-between h-[30%]">
            <div className="pb-2">
              <p>
                Name: <span>{item.name}</span>
              </p>
            </div>
            <div className="pb-2">
              <p>
                Age: <span>{item.age}</span>
              </p>
            </div>
            <div className="flex">
              <p>
                Skills:
                <p>{item.skills}</p>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-300 h-16 flex justify-center items-center">
          <div className="mx-auto flex ">
            <MdOutlineMail className="h-7 w-7 mr-10" />
            <FaWhatsapp className="h-7 w-7 mr-10" />
            <FaLinkedin className="h-7 w-7 " />
          </div>
        </div>
      </div>
    </div>
  );
});

const Application = () => {
  return (
    <div className="bg-gradient-to-br from-slate-200 to-slate-300 pb-36 ">
      <Header />
      <section className=" text-sm flex h-fit bg-slate-100 max-w-7xl mx-auto text-gray-700 border-r border-l border-gray-300 rounded-sm overflow-hidden">
        <div className=" flex flex-col justify-between w-1/4 bg-gradient-to-br from-slate-100 to-slate-200 h-[900px] border-r border-gray-300">
          <nav className=" flex flex-col">
            <div className=" py-5 pl-5 flex items-center border-b border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300">
              <MdSpaceDashboard className="h-6 w-6" />
              <Link className="pl-2" href="/app">
                Dashboard
              </Link>
            </div>
            <div className=" py-5 pl-5 flex items-center border-b border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300">
              <MdBookmarks className="h-6 w-6" />
              <Link className="pl-2" href="/app">
                Your picks
              </Link>
            </div>
            <div className=" py-5 pl-5 flex items-center border-b border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300">
              <FaAddressBook className="h-6 w-6" />
              <Link className="pl-2" href="/app">
                Contacts
              </Link>
            </div>
            <div className=" py-5 pl-5 flex items-center border-b border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300">
              <MdChat className="h-6 w-6" />
              <Link className="pl-2" href="/app">
                Chat
              </Link>
            </div>
            <div className=" py-5 pl-5 flex items-center border-b border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300">
              <MdPeople className="h-6 w-6" />
              <Link className="pl-2" href="/app">
                Profile
              </Link>
            </div>
          </nav>
          <div className="border-t border-slate-300 p-4 flex items-center">
            <div className=" h-14 w-14 bg-white rounded-full overflow-hidden">
              <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
            <div className=" text-sm pl-4">
              <p className="pb-1">Matthew Spence</p>
              <p>MattgSpence@rocketmail.com</p>
            </div>
          </div>
        </div>

        {/* This is the section for the dashboard */}

        <section className=" mx-auto p-8 text-sm h-[900px] w-full bg-gradient-to-br from-slate-200 to-slate-300 overflow-auto scrollbar-hide flex flex-wrap gap-8">
          {peopleMap}
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Application;
