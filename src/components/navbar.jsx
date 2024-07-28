import Link from "next/link";
import Image from "next/image";
import "./style.css";

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="flex items-center justify-center">
        <Link href="/" className="text-sm text-black mx-5">
          Home
        </Link>
        <Link href="/" className="text-sm text-black mx-5">
          About
        </Link>
        <Link href="/" className="text-sm text-black mx-5">
          Projects
        </Link>
      </div>
      {/* LOGO */}
      <div className="anim flex items-center justify-center">
        <span class="mirror anim-text-mirror text-sm">ristine</span>
        <Link href="/" className="anim-btn">
          <Image
            className="origin-center -rotate-90 hover:rotate-0 transition duration-500 ease-in-out cursor-pointer"
            src="https://raw.githubusercontent.com/Kristine-Rivera/Profile/main/public/logo.png"
            alt="logo"
            width={30}
            height={30}
          />
        </Link>
        <span class="anim-text text-sm">ivera</span>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="">2</div>
    </div>
  );
};

export default Navbar;
