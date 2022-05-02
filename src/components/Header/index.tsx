import background from "../../images/foodPattern.png";

const Header = () => {
  return (
    <div
      className="flex justify-center align-center w-full h-auto p-14 bg-customGreen bg-fixed "
      style={{ backgroundImage: `url('${background}')` }}
    >
      <div className="flex flex-col justify-center xl:w-1/3 2xl:w-1/4 p-5 bg-customYellow shadow-[_5px_5px_15px_#000]  animate-titleAppear">
        <h1 className="text-4xl font-semibold text-center p-4">
          My Grocery List
        </h1>
        <p className="text-center p-1">For my daily use</p>
      </div>
    </div>
  );
};

export default Header;
