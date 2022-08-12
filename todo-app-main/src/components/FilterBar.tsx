// import styles from "../styles/*.module.css";

import Bar from "./Bar";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

export default function FilterBar(props: propsInt) {
  const { children, className, atributes } = props;
  return (
    <Bar
      notCircle={true}
      className={`rounded-[6px] overflow-hidden ${className}`}
    >
      Teste
    </Bar>
  );
}
