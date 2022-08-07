import useRootContext from "../../data/hooks/useRootContext";
import { moonOutline, moonSolid } from "../icons";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

export default function DarkModeButton(props: propsInt) {
  const { children, className, atributes } = props;
  const { toggleTheme, theme } = useRootContext();
  return (
    <div
      onClick={toggleTheme}
      className={`
    flex
    gap-[1rem]
    items-center
    cursor-pointer
    lg:gap-[1.4rem]
        
    `}
      {...atributes}
    >
      <div
        className={`
      flex
      justify-center
      items-center
      w-[1.8rem]
      h-[1.8rem]
      mb-[2px]

      md:w-8
      md:h-8
      `}
      >
        {moonSolid}
      </div>
      <span>{theme !== "dark" ? "Dark Mode" : "Light Mode"}</span>
    </div>
  );
}
