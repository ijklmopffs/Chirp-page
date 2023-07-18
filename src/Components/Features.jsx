export default function Features() {
  return (
    <div className="p-10 items-center flex flex-col md:items-start">
      <h1 className="font-bold text-4xl w-96 text-start">
        Features that help you Tweet smarter.
      </h1>
      <div className="flex gap-4 flex-wrap items-center lg:justify-start justify-center">
        <div className="rounded-md w-80 md:w-[29rem] border-solid border-gray border-2 p-4 text-start mt-5">
          <h2 className="font-bold text-1xl ">Analytics</h2>
          <p className="my-3 text-gray-500">
            We constantly monitor your audience as it grows -- so you can Tweet
            when your followers are most likely to be online and ready to engage
            with our content.
          </p>
        </div>

        <div className="rounded-md w-80 md:w-[29rem] border-solid border-gray border-2 p-4 text-start mt-5">
          <h2 className="font-bold text-1xl ">Smart Analyzer</h2>
          <p className="my-3 text-gray-500">
            Chirp automatically recognizes your followers most active times and
            automatically sends you notifications if you're missing out on an
            opportunity
          </p>
        </div>

        <div className="rounded-md w-80 md:w-[29rem] border-solid border-gray border-2 p-4 text-start mt-5">
          <h2 className="font-bold text-1xl ">Scheduled Your Tweets</h2>
          <p className="my-3 text-gray-500">
            Quality tweets drive tons of engagement. With Chirp, you can write
            tweets in an advance and schedule them when your audience is most
            likely to read.
          </p>
        </div>

        <div className="rounded-md w-80 md:w-[29rem] border-solid border-gray border-2 p-4 text-start mt-5">
          <h2 className="font-bold text-1xl ">Dark Mode</h2>
          <p className="my-3 text-gray-500">
            Friendly on the eyes, no matter what time you write your Tweets. All
            colors are chosen to make sure your eyes are at ease at all times.
          </p>
        </div>
      </div>
    </div>
  );
}
