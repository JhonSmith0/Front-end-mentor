// import styles from "../styles/*.module.css";

import NewToBar from "./NewToBar";
import { colors, icons } from "./Ui";
import TodoList from "./TodoList";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

export default function ToDoConteiner(props: propsInt) {
  const { children, className, atributes } = props;
  return (
    <div
      className={`min-w-[32rem] w-max mx-auto mt-20 ${className}`}
      {...atributes}
    >
      <header
        className="text-5xl items-center flex justify-between font-bold uppercase tracking-[9px]"
        style={{
          color: colors["Light-Grayish-Blue"],
        }}
      >
        <h1>Todo</h1>
        <span className="h-full w-10">{icons.sunSolid}</span>
      </header>
      <div>
        <NewToBar />
        <TodoList />
      </div>
    </div>
  );
}
