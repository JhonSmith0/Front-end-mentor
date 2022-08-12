// import styles from "../styles/*.module.css";

import Circle from "./Circle";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
  active?: boolean;
  notCircle?: boolean;
}

export default function Bar(props: propsInt) {
  const { children, className, atributes, active, notCircle } = props;
  return (
    <div
      className={` h-20 bg-Very-Dark-Desaturated-Blue flex gap-5 items-center px-8 
      text-Light-Grayish-Blue text-xl ${className}
      `}
      {...atributes}
    >
      {!notCircle && <Circle active={active} />}

      {children}
    </div>
  );
}
