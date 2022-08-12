// import styles from "../styles/*.module.css";

import Bar from "./Bar";
import Circle from "./Circle";
import { colors, icons } from "./Ui";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

export default function NewToBar(props: propsInt) {
  const { className = "", atributes } = props;
  return (
    <Bar
      className={"rounded-[6px] " + "mt-14 " + className}
      atributes={atributes}
    >
      <input
        type="text"
        className="bg-transparent placeholder:text-Dark-Grayish-Blue-2  outline-none"
        placeholder="Create a new todo..."
      />
    </Bar>
  );
}
