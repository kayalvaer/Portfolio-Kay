import React from "react";
import Link from "next/link";
//import { useRouter } from "next/router";

const CustomLink = ({ href, title, className = "" }) => {
  //const router = useRouter();
  //console.log(router);

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <nav className="h-[1px] inline-block w-full bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">
        &nbsp;
      </nav>
    </Link>
  );
};

const Nav = () => {
  return (
    <div className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <h2>Logo</h2>
      <nav>
        <CustomLink href="/" title="Home" className="mx-4" />
        <CustomLink href="/about" title="Skills" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <Link href="/" target={"_blank"} className="mr-3 w-6">
          Twitter
        </Link>
        <Link href="/" target={"_blank"} className="mr-3 w-6">
          LinkedIn
        </Link>
        <Link href="/" target={"_blank"} className="mr-3 w-6">
          Facebook
        </Link>
        <Link href="/" target={"_blank"} className="mr-3 w-6">
          Twitter
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
