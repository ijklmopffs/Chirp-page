import check from "../../Assets/Checkmark.svg";
import twitter from "../../Assets/Twitter.svg";

export default function Pricing() {
  return (
    <div className="mt-5 p-5 flex flex-col items-center max-w-5xl mx-auto">
      <div>
        <h1 className="font-bold text-4xl">One simple price plan</h1>
        <p>Start growing your twitter by analyzing your follower's patterns.</p>
      </div>
      <div className="w-96 text-start p-5 border-solid border-orange-400 border-2 rounded-md bg-gray-100 mt-10 ">
        <h2>Monthly</h2>
        <div className="flex items-end">
          <span className="font-bold text-4xl">$9</span>
          <p>/mo</p>
        </div>
        <hr className="mt-2" />
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <img src={check} alt="" />
            <p>Unlimited* scheduled tweets and threads.</p>
          </div>

          <div className="flex items-center gap-2 my-2">
            <img src={check} alt="" />
            <p>Schedule up to 3 weeks in advance.</p>
          </div>

          <div className="flex items-center gap-2">
            <img src={check} alt="" />
            <p>Real-time audience analytics tracking up to 5k followers.</p>
          </div>
          <hr className="mt-2" />
          <button className="bg-blue-500 text-white p-2 flex w-full justify-center gap-1 items-center font-semibold rounded-md mt-2">
            <img src={twitter} alt="twitter" className="w-5 h-5" />
            Start Trial with Twitter
          </button>
        </div>
      </div>
    </div>
  );
}
