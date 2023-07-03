"use client"; // This is a client component 👈🏽
import Image from "next/image";
import Link from "next/link";
//import { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillIeCircle,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className="h-[1px] inline-block w-full bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">
        &nbsp;
      </span>
    </Link>
  );
};

export default function Home() {
  // const [lightMode, setLightMode] = useState(false);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between light:bg-white p-20`}
    >
      <div>
        <div className="mb-25 z-10 w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex light:bg-white">
          <ul className="flex flex-between gap-4 light:text-gray-900">
            <li className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Kay Alvær&nbsp;
              <code className="font-mono font-bold">Portfolio</code>
            </li>
            <li>
              <BsFillMoonStarsFill
                onClick={() => setLightMode(!lightMode)}
                className=" cursor-pointer text-2xl"
              />
            </li>
          </ul>
          {/* <nav>
          <CustomLink href="/" title="Home" className="mx-3" />
          <CustomLink href="/Skills" title="Skills" className="mx-3" />
          <CustomLink href="/projects" title="Projects" className="mx-3" />
          <CustomLink href="/articles" title="Articles" className="ml-3" />
        </nav> */}
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <div className="text-3xl py-14 gap-6 text-primaryDark flex justify-center cursor-pointer">
              <Link href="https://www.linkedin.com/in/kay-alvaer/">
                <AiFillLinkedin />
              </Link>
              <Link href="https://www.youtube.com">
                <AiFillYoutube />
              </Link>
              <Link href="https://www.twitter.com">
                <AiFillTwitterCircle />
              </Link>
            </div>
            <Link
              href="/"
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/profile-imgs/kayemoji-1.png"
                alt="Kay Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
                whileHover={{ scale: 1.5 }}
              />
            </Link>
          </div>
        </div>

        <div className="w-full text-light mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
          <div className="w-50% relative flex place-items-left before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
            <Image
              src="/profile-imgs/kayemoji-2.png"
              alt="Next.js hero-img"
              width={380}
              height={137}
              className="rounded-md"
              priority
            ></Image>
          </div>

          <div className="w-50% py-2 flex flex-col items-center text-left mb-4 light:text-dark">
            <h1 className="text-light mt-28 inline-block w-full font-bold capitalize text-5xl">
              Hei, my name is Kay Alvær
            </h1>
            <h3 className="mt-6 inline-block w-full text-2xl text-gray-600">
              UX/UI Designer and Full - Stack developer based in Oslo, Norway.
            </h3>
            <p className="mt-6 text-light-800 leading-8">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
            <a
              className="mt-8 bg-gradient-to-r from-primaryDark leading-5 text- to-dark text-white px-4 py-2 border-none rounded-md ml-0"
              href="https://drive.google.com/file/d/1_yECQX1Dgty3e0QNDkYEB0jiHOeQtroO/view?usp=sharing"
            >
              Resume
            </a>
          </div>
        </div>

        <h3 className="my-28 text-3xl py-1 text-primaryDark max-w-xl mx-auto">
          Services I Offer
        </h3>
        <div className="w-full text-primaryDark mt-20 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left light:text-gray-900">
          <a
            href="https://www.behance.net/keatlarmosarwe"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Design{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 lg:max-w-[30ch] text-sm opacity-50`}>
              Created user centered designs for better user experience, WCAG and
              SEO optimised designs.
            </p>
            <h4 className="py-4 text-light text-bold">Design Tools used</h4>
            <p>Adobe Suite</p>
            <p>Figma</p>
            <p>Design Thinking process</p>
          </a>

          <a
            href="https://github.com/kayalvaer"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Frontend Development{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Used frontend frameworks and softwares like React and Javascript
              &nbsp; to code outstanding applications using defferent
              approaches!
            </p>
            <h4 className="py-4 text-light text-bold">Coding Tools used</h4>
            <p>ReactJS</p>
            <p>NextJS</p>
            <p>Javascript</p>
          </a>

          <a
            href="https://github.com/kayalvaer"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              BackEnd Development{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 lg:max-w-[30ch] text-sm opacity-50`}>
              Used different backend frameworks to develop fullstack application
              meeting consumer needs.
            </p>
            <h4 className="py-4 text-light text-bold">Coding Tools used</h4>
            <p>NodeJS</p>
            <p>Python</p>
            <p>Django</p>
            <p>Flask</p>
          </a>

          <a
            href="https://www.linkedin.com/in/kay-alvaer/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Project Management{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 lg:max-h-[30ch] text-sm opacity-50`}>
              Worked as a Technical Project Manager and Tech Lead developing
              platforms and Games for both public and private organisations in
              Norway. Used different methods and mostly Agile methodology to
              track roadmaps
            </p>
            <h4 className="py-4 text-light text-bold">Tools used</h4>
            <p>SAFE Agile</p>
            <p>Moscow</p>
            <p>Design Thinking</p>
            <p>Lean</p>
          </a>
        </div>

        <h3 className="mt-32 text-3xl py-1 text-primaryDark">Portfolio</h3>
        <div>
          <p className="text-md py-2 leading-8 text-gray-500 light:text-gray-900">
            Since I started working as a developer, ux/ui designer and Tech lead
            I worked on projects in defferent sectors, which includes health,
            science, museums, media production, and companies in the oil
            industry.
          </p>
        </div>

        <div className="flex flex-col gab-15 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-33% flex-1 px-6">
            <Image
              src="/profile-imgs/semester-project-2.png"
              alt="Tybloid-newspaper semester-project-2-img"
              width={90}
              height={200}
              className="h-auto"
              priority
              object-cover
              layout="responsive"
            ></Image>
            <h2 className={`pt-8 mb-3 text-2xl font-semibold text-primaryDark`}>
              Tybloid List
            </h2>
            <p className="py-2 pr-4 light:text-gray-900">
              A newspaper article fullstack website allowing authenticated
              writers for the news site to be able to log into an admin panel
              and on this panel they are able to add, edit and delete an
              article.
            </p>
            <div className="text-3xl py-14 !gap-6 text-primaryDark flex justify-center cursor-pointer">
              <Link href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-kayalvaer/tree/main/ca-js-fo">
                <AiFillGithub />
              </Link>
              <Link href="https://newspaper-app-frontend-eclqaeq2w-kayalvaer.vercel.app/">
                <AiFillIeCircle />
              </Link>
            </div>
          </div>

          <div className="basis-33% flex-1 px-6">
            <Image
              src="/profile-imgs/secondbe.png"
              alt="secondbest js-ca-2-img"
              width={90}
              height={200}
              className="h-auto"
              priority
              object-cover
              layout="responsive"
            ></Image>
            <h2 className={`pt-8 mb-3 text-2xl font-semibold text-primaryDark`}>
              Second@Best
            </h2>
            <p className="py-2 light:text-gray-900">
              An e-commerce fullstack website, developed with NextJS and Strapi
              API.CRUD functionality implemented. With functionality for Admin
              dashboard to manage orders
            </p>
            <div className="text-3xl py-14 gap-6 text-primaryDark flex justify-center cursor-pointer">
              <Link href="https://github.com/Noroff-FEU-Assignments/project-exam-2-kayalvaer/tree/main/kutek-interns-fo">
                <AiFillGithub />
              </Link>
              <Link href="https://github.com/Noroff-FEU-Assignments/project-exam-2-kayalvaer/tree/main/kutek-interns-fo">
                <AiFillIeCircle />
              </Link>
            </div>
          </div>
          <div className="basis-33% flex-1">
            <Image
              src="/profile-imgs/bitbotgames.png"
              alt="BitandBot-games project-exam-2-img"
              width={90}
              height={200}
              className="h-auto "
              priority
              object-cover
              layout="responsive"
            ></Image>
            <h2 className={`pt-8 mb-3 text-2xl font-semibold text-primaryDark`}>
              BitBot Games
            </h2>
            <p className="py-2 light:text-gray-900">
              A fullstack website developed with React, fetching data from
              Strapi API and using Material Ui for styling.Allows users to
              access information about open source free games and providing
              links for authorised users to access the game.
            </p>
            <div className="text-3xl py-14 gap-6 text-primaryDark flex justify-center cursor-pointer">
              <Link href="https://github.com/kayalvaer/bitandbots-frontend">
                <AiFillGithub />
              </Link>
              <Link href="https://github.com/kayalvaer/bitandbots-backend">
                <AiFillIeCircle />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
