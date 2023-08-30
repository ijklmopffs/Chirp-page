import twitter from "../../Assets/Twitter (Black).svg";

export default function Footer() {
  return (
    <div className="bg-blue-300 flex justify-between md:h-10 p-10 items-center mt-10 flex-col md:flex-row">
      <p className="text-blue-800 font-bold text-3xl italic">Chirp.</p>
      <div className="flex items-center gap-5 mt-1 md:mt-0">
        <img src={twitter} alt="" />
        <a href="/">Privacy Policy</a>
        <a href="/">Terms of use.</a>
      </div>
    </div>
  );
}
