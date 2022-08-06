import { moonOutline, moonSolid } from "../icons";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

export default function DarkModeButton(props: propsInt) {
  const { children, className, atributes } = props;
  return (
    <div
      className={`
    flex
    gap-[1rem]
    items-center
        
    `}
      {...atributes}
    >
      <div
        className={`
      flex
      justify-center
      items-center
      w-[1.8rem]
      h-[1.8rem]
      mb-[2px]

      `}
      >
        {moonSolid}
      </div>
      <span>Dark Mode</span>
    </div>
  );
}
