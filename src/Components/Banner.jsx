import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-banner h-[800px] flex justify-end items-center text-white">
      <div className="space-y-5 px-12">
        <h1 className="text-6xl">Would you like a Cup of Delicious Coffee?</h1>
        <p>
          Its coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of
          <br /> every moment!!! Enjoy the beautiful moments and make them
          memorable.
        </p>
        <Link>
          <button className="btn mt-5 bg-[#E3B577] text-black text-[24px] font-thin">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
