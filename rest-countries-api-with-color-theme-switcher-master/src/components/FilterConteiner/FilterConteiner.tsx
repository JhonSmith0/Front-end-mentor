import { useState } from "react";
import useRootContext from "../../data/hooks/useRootContext";
import { chevDown, chevUp, searchIcon } from "../icons";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;

  onClick?(region: string): any;
}

export default function FilterConteiner(props: propsInt) {
  const { children, className, atributes, onClick } = props;

  const [visible, setVisible] = useState(false);
  const { filter, filterQuery } = useRootContext();

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <div
      className={`
    text-white

    w-max
    lg:w-[25rem]

    md-font
    relative
    z-[100]
    md:text-2xl
    lg:text-3xl
    
    `}
    >
      <div
        className={`
        dark:bg-[#2B3743]
        dark:text-white

        text-[#111517]

        py-[1.4rem]
        px-[2.8rem]
        gap-[1.4rem]

        md:px-[1.8rem]
        lg:gap-[3rem]

        w-full

        rounded-[5px]

        flex
        items-center

        justify-between
        cursor-pointer

        shadow
        
        `}
        onClick={toggleVisible}
        {...atributes}
      >
        <span
          className={`
        block
        leading-[1]
capitalize
        
        `}
        >
          {!filterQuery || filterQuery === "all"
            ? "Filter by Region"
            : filterQuery}
        </span>
        <div
          className="
        h-[1.2rem]
        stroke-[3px]
        "
        >
          {visible ? chevDown : chevUp}
        </div>
      </div>
      {visible && (
        <ul
          className="shadow
        
          dark:bg-[#2B3743]
          dark:text-white
  
          text-[#111517]
          bg-white

        absolute
        w-full
        rounded-[5px]
        py-[1.4rem]
        px-[2.8rem]

        md:px-[1.8rem]
        mt-[5px]
        leading-[2]
        z-[100]
        
        "
        >
          {["Africa", "Americas", "Asia", "Europe", "Oceania", "All"].map(
            (e) => {
              return (
                <li
                  key={e}
                  onClick={() => {
                    filter?.(e.toLowerCase());
                    setVisible(!visible);
                  }}
                >
                  <button>{e}</button>
                </li>
              );
            }
          )}
        </ul>
      )}
    </div>
  );
}
