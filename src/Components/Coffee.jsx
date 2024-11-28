import coffee1 from "../assets/cups/Rectangle 9.png";
import coffee2 from "../assets/cups/Rectangle 10.png";
import coffee3 from "../assets/cups/Rectangle 11.png";
import coffee4 from "../assets/cups/Rectangle 12.png";
import coffee5 from "../assets/cups/Rectangle 13.png";
import coffee6 from "../assets/cups/Rectangle 14.png";
import coffee7 from "../assets/cups/Rectangle 15.png";
import coffee8 from "../assets/cups/Rectangle 16.png";

const Coffee = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 my-20">
      <span>Follow Us Now</span>
      <h1 className="font-bold text-5xl text-[#331A15]">Follow on Instagram</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto px-8">
        <img src={coffee1} alt="" />
        <img src={coffee2} alt="" />
        <img src={coffee3} alt="" />
        <img src={coffee4} alt="" />
        <img src={coffee5} alt="" />
        <img src={coffee6} alt="" />
        <img src={coffee7} alt="" />
        <img src={coffee8} alt="" />
      </div>
    </div>
  );
};

export default Coffee;
