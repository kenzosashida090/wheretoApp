import Image from "next/image";
import logo from "./logo.png";
export default function Home() {
  return (
    <>
      <main data-theme="nord" className="flex flex-row">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
            <p>Hola</p>
          </div>
        </div>
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
              <button className="btn btn-success">Get Started</button>
              <button className="btn btn-success">Learn More</button>
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
