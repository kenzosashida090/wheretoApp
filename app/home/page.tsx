import { readUserSession } from "../../utils/auth";
import { supabase } from "../../utils/supabase";
import React, { FC } from "react";

interface pageProps {}
readUserSession;
const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div data-theme="nord" className="flex flex-row">
        <div data-theme="flex max-w-1 ">
          <div className="flex-none avatar absolute max-w-14 pt-4 ml-1.5">
            <div className=" rounded-full object-contain">
              <img
                className="object-left-top"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul className="flex-none menu bg-base-200 rounded-box max-w-20 h-screen justify-center  space-y-10">
            <li>
              <a className="tooltip tooltip-right" data-tip="Home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="tooltip tooltip-right" data-tip="Details">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="tooltip tooltip-right" data-tip="Stats">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-full ">
          <div className="hero min-h-screen">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold"></h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  vel aliquam quaerat voluptatibus a magnam eaque, magni
                  similique velit libero? Odit ut hic, consequuntur ipsum
                  placeat architecto voluptatem obcaecati tenetur?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
