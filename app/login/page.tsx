"use client";
import { useRouter } from "next/navigation";
import { loginUser, readUserSession } from "../../utils/auth";
import { supabase } from "../../utils/supabase";
import Link from "next/link";
import React, { FC, useState } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const route = useRouter();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div data-theme="nord" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex flex-col justify-center align-center items-center">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login</h1>
            <div className="py-2">
              <span>
                Si no tienes una cuenta{" "}
                <Link href="/signup">
                  {" "}
                  <span className="underline underline-offset-4">
                    registrate
                  </span>
                </Link>
              </span>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 justify-center">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  className="input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary rounded-full">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="my-5 w-full ">
            <div className="divider">
              <p>Or continue with</p>
            </div>
            <div className="flex flex-row space-x-5 items-center justify-center">
              <div className="btn rounded-full border-1 border-neutral">
                <i className="devicon-google-plain"></i>
              </div>
              <div className="btn rounded-full border-1 border-neutral">
                <i className="devicon-facebook-plain"></i>
              </div>
              <div className="btn rounded-full border- border-neutral">
                <i className="devicon-apple-original"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
