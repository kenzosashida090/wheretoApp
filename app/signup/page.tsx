"use client";
import { supabase } from "@/utils/supabase";
import { signUpUser } from "../../utils/auth";
import Link from "next/link";

import React, { FC, useState } from "react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

interface PageProps {}
type Temail = string;

const Page: FC<PageProps> = ({}) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const handleSignUp = async (e: any) => {
    e.preventDefault();
    try {
      const user = { email, password, username };
      const userAuth: any = await signUpUser(email, password, username);
      if (userAuth) {
        //router.push("/home");
      }
    } catch (err) {
      console.log("error");
    }
  };
  return (
    <div data-theme="nord" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex flex-col justify-center align-center items-center">
          <div className="text-center my-10 ">
            <h1 className="text-5xl font-bold">Sign Up !!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 justify-center">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  placeholder="email"
                  className="input input-bordered"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary rounded-full">
                  Register
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
