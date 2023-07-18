import twitterUser from "../../Assets/userAvatar01.svg";
import twitterUser2 from "../../Assets/userAvatar04.svg";
import twitterUser3 from "../../Assets/userAvatar06.svg";
import twitter from "../../Assets/Twitter (Blue).svg";
import like from "../../Assets/Like.svg";

export default function Review() {
  return (
    <div className="flex p-5 bg-blue-300 flex-col items-center">
      <h1 className="font-bold text-4xl">What our customers say</h1>
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="w-72 h-52 mt-5 bg-white p-2 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={twitterUser} alt="" />
              <div>
                <p className="font-bold">Sara May</p>
                <span>@sara_may</span>
              </div>
            </div>
            <img src={twitter} alt="" />
          </div>
          <p className="text-start mt-5">
            I just tried out @chirp and it's amazing, love all the analytics I
            can see.
          </p>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={like} alt="" />
              <span>2</span>
            </div>
            <p>March 2, 2021</p>
          </div>
        </div>

        <div className="w-72 mt-5 bg-white p-2 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={twitterUser2} alt="" />
              <div>
                <p className="font-bold">Jack Scott</p>
                <span>@jackscott_</span>
              </div>
            </div>
            <img src={twitter} alt="" />
          </div>
          <p className="text-start mt-5">
            I initially started using Chirp to support the co-founder as I
            personally knew him, but after having tried it out for a few weeks,
            I can genuinely say this changed my Twitter game.
          </p>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={like} alt="" />
              <span>32</span>
            </div>
            <p>March 2, 2021</p>
          </div>
        </div>

        <div className="w-72 h-60 mt-5 bg-white p-2 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={twitterUser3} alt="" />
              <div>
                <p className="font-bold">Jessica May</p>
                <span>@jmay98</span>
              </div>
            </div>
            <img src={twitter} alt="" />
          </div>
          <p className="text-start mt-5">
            Absolutely love everything about Chirp, from the design to how
            everything works smoothly.
          </p>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={like} alt="" />
              <span>221</span>
            </div>
            <p>March 2, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
