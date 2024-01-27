import Link from "next/link";
import { Undo2 } from "lucide-react";
import Image from "next/image";
import { Home } from "@mui/icons-material";

export default function NotFound() {
  return (
    <div className="flex-col min-h-screen text-center justify-center flex">
      <div className=" ">
        <Image
          src="/error-404-.png"
          alt="404 image"
          layout="fill"
          className="mx-auto animate-bounce !relative !object-contain !h-[350px] !w-[350px]"
        />
      </div>
      <h1 className="text-4xl text-gray-300 font-bold ">Page Not Found!!</h1>
      <div className="mt-6">
        <Link
          href="/"
          className=" text-gray-300 rounded bg-roseRed px-3 py-1 font-bold "
        >
          <Home /> Return Home
        </Link>
      </div>
    </div>
  );
}
