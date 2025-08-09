"use client";

import Link from "next/link";
import Navigation from "./navigation";
import { usePathname } from "next/navigation";

export function header2() {
  return (
    <header id="gh-head" className="px-12 py-4 h-[8rem]">
      <nav className="gh-head-inner grid w-full">
        <div className="gh-head-brand">
          <a className="gh-head-logo text-2xl font-bold" href="{{@site.url}}">
            Koder / 박성훈
          </a>
          <a className="gh-burger" role="button" aria-label="menu">
            <div className="gh-burger-box">
              <div className="gh-burger-inner"></div>
            </div>
          </a>
        </div>
        <div className="gh-head-menu">
          <Navigation />
        </div>
        <div className="gh-head-actions">
          <div className="gh-head-actions-list">"search"</div>
        </div>
      </nav>
    </header>
  );
}

export type HeaderType = "home" | "blog";
export default function Header({ type }: { type: HeaderType }) {
  return (
    <header>
      <div className="absolute left-0 right-0 w-full flex justify-center p-4">
        <Nav />
      </div>
      <div className="m-4 h-16 flex items-center justify-between">
        <div className="p-4">
          <Link href="" className="text-2xl font-bold">
            Koder / 박성훈
          </Link>
        </div>
        <Btn name="Home" onClick={() => {}} />
      </div>
    </header>
  );
}

const Nav = () => {
  return (
    <div className="bg-gray-800 flex p-4">
      <LinkBtn name="Home" href="/" />
      <LinkBtn name="Test" href="/test" />
      <LinkBtn name="Category" href="/category" />
      <LinkBtn name="Algorithm" href="/algorithm" />
      <LinkBtn name="Contact" href="/contact" />
    </div>
  );
};

const LinkBtn = ({ name, href }: { name: string; href: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div
      className={`p-4 rounded-md transition-colors duration-200 ${
        isActive
          ? "bg-gray-100 text-black font-semibold"
          : "bg-gray-800 text-white hover:bg-gray-700"
      }`}
    >
      <Link href={href}>{name}</Link>
    </div>
  );
};

const Btn = ({ name, onClick }: { name: string; onClick: () => void }) => {
  return (
    <div className="bg-gray-800 p-4" onClick={onClick}>
      {name}
    </div>
  );
};
