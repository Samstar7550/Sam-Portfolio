import logo from "./logo.svg";

const LogoSVG = () => {
  return (
    <div className="rounded-full bg-[#ff0000] h-10 w-10 cursor-pointer items-center justify-center flex ">
      <img src={logo} alt="Logo" className="w-[32px] h-[32px] pointer-events-none" />
    </div>
  );
};

export default LogoSVG;
