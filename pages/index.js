import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Header from './../components/Header';
import FooterTwo from '@/components/FooterTwo';

export default function Home() {
  return (
    <>
      <Head>
        <title>StaffConnect</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <section className=" h-[900px] bg-slate-700 flex justify-center items-center text-slate-200 header-clip">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold max-w-[600px] text-center pb-4">
              Say goodbye to endless resumes and interviews
            </h1>
            <h2 className="text-5xl sm:text-6xl font-extrabold max-w-[600px] text-center">
              Experience the future of hiring...
            </h2>
          </div>
        </section>
        <section className="flex justify-center items-center mt-[-300px] bg-gradient-to-br  from-slate-100 to-slate-200 p-40 text-slate-600">
          <div className=" h-fit mx-auto sm:h-[800px] flex pt-52 justify-between ">
            <div className="flex flex-col justify-center items-center">
              <p className=" text-lg pb-6 sm:text-3xl max-w-[600px] font-semibold text-center leading-normal">
                With Staff
                <span className=" text-transparent bg-gradient-to-br from-green-500 to-green-600 bg-clip-text">
                  Connect
                </span>
                , you can say goodbye to hours spent sifting through resumes and
                interviewing countless candidates.
              </p>
              <p className=" text-xl  sm:text-4xl text-center font-semibold sm:max-w-[700px]">
                Our innovative technology streamlines the recruitment process,
                allowing you to find the best candidates for your open positions
                in just minutes.
              </p>
            </div>
          </div>
        </section>
        <section className="clip2 h-[1200px] bg-green-500 mt-[-180px]">
          <div></div>
        </section>

        <FooterTwo />
      </main>
    </>
  );
}
