import { MutableRefObject, useRef } from "react";
import useRootContext from "../../data/hooks/useRootContext";
import { searchIcon } from "../icons";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

export default function SearchBar(props: propsInt) {
  const { className, atributes } = props;

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

    
    py-6
    px-12


    flex
    items-center
    dark:text-white
    dark:bg-[#2B3743]

    text-black 
    bg-white
    

    md-font
    md:text-3xl
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
      dark:text-white
      text-[#2B3743]

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
        w-full
        border-0
        
        `}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </form>
  );
}
