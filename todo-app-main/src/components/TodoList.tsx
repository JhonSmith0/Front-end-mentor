// import styles from "../styles/*.module.css";

import Bar from "./Bar";
import FilterBar from "./FilterBar";
import InfosBar from "./InfosBar";
import TodoItem from "./TodoItem";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

export default function TodoList(props: propsInt) {
  const { children, className, atributes } = props;
  return (
    <>
      <div className={`my-8 rounded-[6px] overflow-hidden `} {...atributes}>
        <TodoItem>Teste</TodoItem>
        <TodoItem>Teste</TodoItem>
        <TodoItem>Teste</TodoItem>
        <TodoItem>Teste</TodoItem>
        <TodoItem>Teste</TodoItem>
        <TodoItem>Teste2</TodoItem>
        <InfosBar />
      </div>
      <FilterBar />
    </>
  );
}
