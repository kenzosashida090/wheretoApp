import Image from "next/image";
import logo from "./logo.png";
import Link from "next/link";
import { readUserSession } from "../utils/auth";
import { use } from "react";
export default async function Home() {
  const key = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const user = await readUserSession();
  console.log(")=================>sesion", user);
  return (
    <>
      <main data-theme="nord" className="flex flex-row">
        <div className="flex flex-col justify-center h-screen">
          <div className="max-w-4xl ml-20">
            <h1 className="text-7xl">Where to Find</h1>
            <div className="max-w-m mt-8 mb-7">
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente fugiat pariatur vel eligendi, natus ut totam doloremque
                qui nam nesciunt ab quasi est mollitia, dolores autem, commodi
                nulla? Nulla, iste.
              </span>
            </div>
            <div className="space-x-10">
              <Link href="/login" scroll={false}>
                <button className="btn btn-success rounded-3xl">
                  Get Started
                </button>
              </Link>
              <button className="btn btn-success rounded-3xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={logo} width={900} height={900} alt="image" />
        </div>
      </main>
    </>
  );
}
