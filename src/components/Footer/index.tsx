import background from "../../images/foodPattern.png";

const Footer = () => {
  return (
    <>
      <footer
        className="flex justify-center items-center p-14 bg-customGreen bg-fixed"
        style={{ backgroundImage: `url('${background}')` }}
      >
        <p className="text-sm text-center p-2 bg-white">
          © 2022 HEYD Stephane. Tous droits réservés.
        </p>
      </footer>
    </>
  );
};

export default Footer;
