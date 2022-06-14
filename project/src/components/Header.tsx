import logo from "../assets/logoipsum.svg";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo Application" loading="lazy"/>
      <span>|</span>
      <span>Listen anywhere, at any time</span>
    </header>
  );
};
