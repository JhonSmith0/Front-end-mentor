import { InputHTMLAttributes, MutableRefObject, useRef } from "react";
import useRootContext from "../../data/hooks/useRootContext";
import { searchIcon } from "../icons";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

export default function SearchBar(props: propsInt) {
  const { children, className, atributes } = props;

  const input: MutableRefObject<any> = useRef(null);
  const { search } = useRootContext();

  return (
    <form
      className="md:w-[400px]"
      onSubmit={(e) => {
        e.preventDefault();
        search?.(input.current.value);
      }}
    >
      <div
        className={`

    panel-color
    py-6
    px-12


    flex
    items-center
    text-white

    md-font
    shadow


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
