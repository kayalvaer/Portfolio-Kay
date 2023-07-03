"use client"; // This is a client component 👈🏽
import Image from "next/image";
import Link from "next/link";

{
  ("/* Hero start */");
}
<div className="relative flex place-items-left before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
  <Image
    className="relative"
    src="/profile-imgs/kayemoji-2.png"
    alt="Next.js hero-img"
    width={380}
    height={137}
    priority
  />
</div>;
{
  ("/* Hero end */");
}

<div className="w-full text-light mb-32 grid lg:mb-0 lg:grid-cols-3 text-center shadow-lg rounded-lg p-8 lg-flex justify-center gap-10">
        <div className="text-left shadow-lg-light rounded-xl my-12 border border-transparent px-5">
          <Image
            src="/profile-imgs/semester-project-2.png"
            alt="Next.js hero-img"
            width={250}
            height={200}
            className="h-auto lg:max-h-[30ch]"
            priority
          ></Image>
          <h2 className="text-lg font-medium pt-8 pb-2">Tybloid List</h2>
          <p className="py-2 lg:max-h-[30ch]">
            A newspaper article fullstack website allowing authenticated writers
            for the news site to be able to log into an admin panel and on this
            panel they are able to add, edit and delete an article.
          </p>
          <div className="text-3xl py-14 gap-6 text-primaryDark flex justify-center cursor-pointer">
            <Link href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-kayalvaer/tree/main/ca-js-fo">
              <AiFillGithub />
            </Link>
            <Link href="https://newspaper-app-frontend-eclqaeq2w-kayalvaer.vercel.app/">
              <AiFillIeCircle />
            </Link>
          </div>
        </div>

        <div className="text-left text-light shadow-lg rounded-xl my-12 transition-colors border-white bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800 dark:bg-opacity-30">
          <Image
            src="/profile-imgs/secondbe.png"
            alt="Next.js hero-img"
            width={250}
            height={200}
            priority
          ></Image>
          <h2 className="text-lg font-medium pt-8 pb-2">Second@Best</h2>
          <p className="py-2 lg:max-w-[30ch]">
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
        <div className="text-left text-light shadow-lg rounded-xl my-12">
          <Image
            src="/profile-imgs/bitbotgames.png"
            alt="Next.js hero-img"
            width={250}
            height={200}
            priority
          ></Image>
          <h2 className="text-lg font-medium pt-8 pb-2">BitBot Games</h2>
          <p className="py-2 lg:max-h-[30ch]">
            A fullstack website developed with React, fetching data from Strapi
            API and using Material Ui for styling.Allows users to access
            information about open source free games and providing links for
            authorised users to access the game.
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
