import { useState } from "react";
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

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <div
      className={`
    mt-[3.2rem]
    max-w-[20rem]
    text-white

    md-font
    relative
    z-[100]
    
    `}
    >
      <div
        className={`
        panel-color

        py-[1.4rem]
        pl-[2.8rem]
        pr-[1.8rem]

        rounded-[5px]

        flex
        items-center

        justify-between
        cursor-pointer
        
        `}
        onClick={toggleVisible}
        {...atributes}
      >
        <span
          className={`
        block
        leading-[1]

        
        `}
        >
          Filter by Region
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
        panel-color
        absolute
        w-full
        rounded-[5px]
        py-[1.4rem]
        px-[2.8rem]

        mt-[5px]

        leading-[2]
        
        "
        >
          {["Africa", "Americas", "Asia", "Europe", "Oceania", "All"].map(
            (e) => {
              return (
                <li
                  key={e}
                  onClick={() => {
                    onClick?.(e);
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
