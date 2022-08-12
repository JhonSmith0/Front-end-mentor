// import styles from "../styles/*.module.css";

import Bar from "./Bar";
import { icons } from "./Ui";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
  active?: boolean;
}

export default function TodoItem(props: propsInt) {
  const { children, className, atributes, active } = props;
  return (
    <Bar
      className={`border-b-[1px] border-b-Very-Dark-Grayish-Blue-3 ${className}`}
      atributes={atributes}
      active={active}
    >
      <div className="flex justify-between items-center flex-1">
        <span>{children}</span>
        <span className="h-9 w-9 text-Very-Dark-Grayish-Blue-2">
          {icons.close}
        </span>
      </div>
    </Bar>
  );
}
