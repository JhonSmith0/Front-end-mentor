// import styles from "../styles/*.module.css";

import { colors, icons } from "./Ui";
import a from "tailwindcss/colors";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;

  active?: boolean;
}

export default function Circle(props: propsInt) {
  const { children, className, atributes, active } = props;

  return (
    <div
      className={`w-9 h-9 border-[2px]  border-Very-Dark-Grayish-Blue-3 ${
        active
          ? "bg-gradient-to-r from-check-gr-from to-check-gr-to border-0"
          : ""
      }  rounded-full ${className}`}
      {...atributes}
    >
      {active && (
        <span className="h-full w-full  flex justify-center items-center">
          {icons.check}
        </span>
      )}
    </div>
  );
}
