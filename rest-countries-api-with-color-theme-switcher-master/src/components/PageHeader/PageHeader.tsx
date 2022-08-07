import DarkModeButton from "../DarkModeButton/darkModeButton";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

export default function PageHeader(props: propsInt) {
  const { children, className, atributes } = props;
  return (
    <div
      className={`
      py-12
      px-8
      text-white
      font-bold
      panel-color
      md-font
      flex
      justify-between
      shadow

      md:text-3xl
      md:px-[50px]
      
    
    `}
      {...atributes}
    >
      {children}
      <div>
        <DarkModeButton />
      </div>
    </div>
  );
}
