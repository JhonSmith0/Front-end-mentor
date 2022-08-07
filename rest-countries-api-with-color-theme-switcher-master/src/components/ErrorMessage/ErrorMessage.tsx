// import styles from "../styles/*.module.css";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

export default function ErrorMessage(props: propsInt) {
  const { children, className, atributes } = props;
  return (
    <h1 className={`w-max text-white font-bold p-5 mx-auto`} {...atributes}>
      {children}
    </h1>
  );
}
