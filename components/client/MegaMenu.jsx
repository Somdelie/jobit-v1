"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MegaMenu = () => {
  const pathname = usePathname();
  return (
    <div className="megaMenu">
      <button
        className={
          pathname === "/freelancers" || pathname === "/projects"
            ? "hover:bg-roseRed bg-roseRed text-white px-2 transition rounded-full"
            : "hover:bg-roseRed hover:text-white px-2 transition rounded-full"
        }
      >
        Browse
      </button>
      <div className="links">
        <Link href="/freelancers" className="hover:text-roseRed">
          Freelancers
        </Link>
        <Link href="/projects" className="hover:text-roseRed">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default MegaMenu;
