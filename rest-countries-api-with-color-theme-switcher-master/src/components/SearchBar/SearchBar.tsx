import { InputHTMLAttributes, MutableRefObject, useRef } from "react";
import { searchIcon } from "../icons";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;

  onSubmit?(input: string): any;
}

export default function SearchBar(props: propsInt) {
  const { children, className, atributes, onSubmit } = props;

  const input: MutableRefObject<any> = useRef(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(input?.current.value);
        input.current.value = "";
      }}
    >
      <div
        className={`

    max-w-full
    panel-color
    py-6
    px-12

    flex
    items-center
    text-white

    md-font

    rounded-[5px]

    ${className}
    `}
        {...atributes}
      >
        <div
          className={`
      
      h-7
      w-7

      cursor-pointer

      `}
        >
          {searchIcon}
        </div>
        <input
          ref={input}
          className={`
        ml-7
        flex-1
        bg-transparent

        outline-none
        border-0
        
        `}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </form>
  );
}
