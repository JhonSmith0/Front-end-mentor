import DarkModeButton from "../DarkModeButton/darkModeButton";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

export default function PageHeader(props: propsInt) {
  const { children, atributes } = props;
  return (
    <header
      className={`
      dark:text-white
      dark:bg-[#2b3743]
      text-[#111517]
      font-bold
      md-font
      flex
      justify-between
      shadow

      md:text-3xl
      
      px-[3rem]
      py-[1.5rem]
      md:px-[5rem]
      md:py-[2rem]

      
    
    `}
      {...atributes}
    >
      {children}
      <div>
        <DarkModeButton />
      </div>
    </header>
  );
}
