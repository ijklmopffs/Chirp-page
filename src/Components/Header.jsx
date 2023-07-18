import { useState } from "react";
import twitter from "../../Assets/Twitter.svg";
import hamburger from "../../Assets/Hamburger Menu.svg";
import hero from "../../Assets/Hero Image (Desktop View).png";
import hero2 from "../../Assets/Hero Image (Tablet View).png";
import twitterUser from "../../Assets/userAvatar01.svg";
import twitterUser2 from "../../Assets/userAvatar02.svg";
import twitterUser3 from "../../Assets/userAvatar03.svg";
import twitterUser4 from "../../Assets/userAvatar04.svg";
import twitterUser5 from "../../Assets/userAvatar05.svg";
import twitterUser6 from "../../Assets/userAvatar06.svg";
import twitterUser7 from "../../Assets/userAvatar07.svg";
import twitterUser8 from "../../Assets/userAvatar08.svg";
import twitterUser9 from "../../Assets/userAvatar09.svg";

export default function Header() {
  return (
    <header className="bg-gray-100 p-10 m-0">
      <nav className="flex justify-between">
        <div>
          <p className="text-blue-800 font-bold text-3xl italic">Chirp.</p>
        </div>
        <div className="md:hidden">
          <img src={hamburger} alt="" />
        </div>
        <div className="md:flex md:gap-4 md:items-center hidden">
          <a href="/">Home</a>
          <a href="/">Pricing</a>
          <a href="/">FAQ</a>
          <button className="bg-blue-500 text-white p-2 flex gap-1 items-center font-semibold rounded-md">
            <img src={twitter} alt="twitter" className="w-5 h-5" />
            Sign in with twitter
          </button>
        </div>
      </nav>

      <div className="flex flex-col-reverse lg:flex-row items-center md:items-start mt-10 justify-between gap-10 flex-shrink-1">
        <div>
          <h1 className="font-bold text-5xl md:w-[35rem] w-96 text-start">
            Twitter analytics taken to a whole new level.
          </h1>
          <p className="text-start my-5 text-gray-500 w-96 md:w-[35rem]">
            Chirp is a suite of Twitter analytics that will help you better
            understand your audience,which tweets they like, and most
            importantly, when they are the most active on twitter.
          </p>
          <div className="flex items-center gap-2">
            <button className="bg-blue-500 text-white p-2 flex gap-1 items-center font-semibold rounded-md">
              <img src={twitter} alt="twitter" className="w-5 h-5" />
              Sign in with twitter
            </button>
            <a href="/" className="text-blue-700 font-bold">
              Learn more
            </a>
          </div>
          <div className="mt-7">
            <div className="flex">
              {[
                twitterUser,
                twitterUser2,
                twitterUser3,
                twitterUser4,
                twitterUser5,
                twitterUser6,
                twitterUser7,
                twitterUser8,
                twitterUser9,
              ].map((user, index) => (
                <img
                  key={index}
                  src={user}
                  alt=""
                  className={`ml-${index !== 0 ? "[-10px]" : "0"} w-10 h-10`}
                />
              ))}
            </div>
            <div className="mt-3">
              <p className="text-gray-500 font-semibold w-96 text-start">
                Join <span className="text-blue-700 font-bold">195</span> others
                who have analyzed their followers and scheduled{" "}
                <span className="text-blue-700 font-bold">1342</span> tweets!
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={hero}
            alt=""
            className="w-[300px] h-[400px] flex-shrink-0 md:hidden lg:block"
          />
          <img src={hero2} alt="" className="hidden md:block lg:hidden" />
        </div>
      </div>
    </header>
  );
}
