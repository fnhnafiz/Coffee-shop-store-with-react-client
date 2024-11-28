import Products1 from "../assets/icons/1.png";
import Products2 from "../assets/icons/2.png";
import Products3 from "../assets/icons/3.png";
import Products4 from "../assets/icons/4.png";
const Products = () => {
  return (
    <div className="bg-[#ECEAE3] grid grid-cols-2 place-items-center  lg:grid-cols-4 gap-6 px-4 py-8 md:py-16 md:px-52">
      <div className="flex flex-col justify-start gap-3 w-full ">
        <div>
          <img src={Products1} alt="" />
        </div>
        <h1 className="text-3xl font-medium">Awesome Aroma</h1>
        <p>You will definitely be a fan of the design & aroma of your coffee</p>
      </div>
      <div className="flex flex-col justify-start gap-3 w-full">
        <div>
          <img src={Products2} alt="" />
        </div>
        <h1 className="text-3xl font-medium">High Quality</h1>
        <p>We served the coffee to you maintaining the best quality</p>
      </div>
      <div className="flex flex-col justify-start gap-3 w-full">
        <div>
          <img src={Products3} alt="" />
        </div>
        <h1 className="text-3xl font-medium">Pure Grades</h1>
        <p>The coffee is made of the green coffee beans which you will love</p>
      </div>
      <div className="flex flex-col justify-start gap-3 w-full">
        <div>
          <img src={Products4} alt="" />
        </div>
        <h1 className="text-3xl font-medium">Proper Roasting</h1>
        <p>Your coffee is brewed by first roasting the green coffee beans</p>
      </div>
    </div>
  );
};

export default Products;
