import Link from "next/link";
import BtnBurger from "../BtnBurger/BtnBurger";
import useToggle from "../../hooks/useToogle";
import Logo from "../../icons/Logo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { classNames } from "../../utils/classNames";
const dataLinks = [
  { path: "/", title: "Inicio" },
  { path: "#about", title: "Sobre mi" },
  { path: "#tecnologies", title: "Tecnologias" },
  { path: "#portfolio", title: "Portafolio" },
  { path: "#contact", title: "Contactarme" },
];

const Header = () => {
  const { isOpen, onToggle } = useToggle();
  const [secctionView, setSecctionView] = useState("");
  const { asPath } = useRouter();
  useEffect(() => {
    setSecctionView(asPath.split("/")[1]);
  }, []);

  return (
    <header className="fixed z-10 flex justify-center w-full">
      <nav className={classNames(["animate-transition relative flex items-center justify-between w-[90%] md:max-w-[1000px]  py-5 text-white"])}>
        <Link href="/"  onClick={() => setSecctionView('/')} className="p-2 bg-white rounded-full">
          <Logo className="w-7 h-7" />
        </Link>
        <BtnBurger isOpen={isOpen} setIsOpen={onToggle} />
          <ul className={classNames([isOpen?'right-0':'-right-full',"fixed w-full gap-5 flex-col md:flex-row text-center list-none animate-transition md:text-left backdrop-blur-lg md:backdrop-blur-none md:static md:w-auto md:bg-transparent top-20 flex"])}>
            {dataLinks.map((item) => (
              <li
                key={item?.path}
                className={classNames([
                  secctionView === item?.path ? "text-primary-500" : "text-white",
                  "animate-transition hover:text-primary-500 ",
                ])}
                onClick={() => setSecctionView(item?.path)}
              >
                  <Link href={item?.path}>{item?.title}</Link>
              </li>
            ))}
          </ul>
      </nav>
    </header>
  );
};

export default Header;
