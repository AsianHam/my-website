import { RefObject, useEffect, useState } from "react";
import { NavItem } from "./nav-item";
import Java from "/public/java.svg";
import MenuButton from "./menu-button";
import Link from "next/link";
import Github from "/public/github.svg";
import Linkedin from "/public/linkedin.svg";
import Codepen from "/public/codepen.svg";

export const MobileNavBar = ({
  experienceRef,
  portfolioRef,
  contactRef,
  isHomePage = true,
}: {
  experienceRef: RefObject<HTMLElement>;
  portfolioRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
  isHomePage?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (ref: RefObject<HTMLElement>, hash: string) => {
    if (history.pushState) {
      history.pushState(null, "", hash);
    } else {
      location.hash = hash;
    }
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "scroll";
      };
    }
  }, [isOpen]);

  return (
    <>
      <nav className="flex 768:hidden fixed w-full h-20 justify-between bg-shark drop-shadow-md z-40">
        <span className="flex py-4 pl-8">
          <NavItem
            icon={<Java className="h-full w-full text-torch-red" />}
            href="/"
            iconSize="h-full"
            linkClassName="h-full"
            label="home"
          />
        </span>
        <span className="flex h-full items-center mr-8">
          <MenuButton onClick={handleMenuClick} isOpen={isOpen} />
        </span>
      </nav>
      {isOpen && (
        <div className="fixed w-full h-[calc(100svh-5rem)] translate-y-20 z-50 bg-shark">
          <div className="flex flex-col justify-between w-full h-full">
            {isHomePage ? (
              <span className="flex flex-col w-full items-end text-iron text-2xl gap-8 pr-8 mt-4">
                <button
                  onClick={() => handleItemClick(experienceRef, "#experience")}
                  className="hover:text-torch-red"
                >
                  Experience
                </button>
                <button
                  onClick={() => handleItemClick(portfolioRef, "#portfolio")}
                  className="hover:text-torch-red"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => handleItemClick(contactRef, "#contact-me")}
                  className="hover:text-torch-red"
                >
                  Contact
                </button>
                <Link href="/components" className="hover:text-torch-red">
                  Components
                </Link>
              </span>
            ) : (
              <span className="flex flex-col w-full items-end text-iron text-2xl gap-8 pr-8 mt-4">
                <Link href="/#experience" className="hover:text-torch-red">
                  Experience
                </Link>
                <Link href="/#portfolio" className="hover:text-torch-red">
                  Portfolio
                </Link>
                <Link href="/#contact-me" className="hover:text-torch-red">
                  Contact
                </Link>
                <Link href="/components" className="hover:text-torch-red">
                  Components
                </Link>
              </span>
            )}
            <div className="flex flex-col w-full gap-6 mb-8">
              <span className="flex w-full justify-center text-lg text-iron">
                abeoh1@gmail.com
              </span>
              <span className="flex w-full gap-6 justify-center">
                <NavItem
                  icon={<Github className="text-iron w-full h-full" />}
                  href="https://github.com/AsianHam"
                  newTab
                  iconSize="h-6 w-6"
                  label="github"
                />
                <NavItem
                  icon={<Linkedin className="text-iron w-full h-full" />}
                  href="https://linkedin.com/in/abrahamoh"
                  newTab
                  iconSize="h-5 w-5"
                  label="linkedin"
                />
                <NavItem
                  icon={<Codepen className="text-iron w-full h-full" />}
                  href="https://codepen.io/Abraham-Oh"
                  newTab
                  iconSize="h-6 w-6"
                  label="codepen"
                />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
