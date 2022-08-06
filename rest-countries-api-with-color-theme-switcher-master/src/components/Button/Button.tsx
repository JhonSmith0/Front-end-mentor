interface propsInt {
  children?: any;
  className?: string;
  atributes?: any;
}

export default function Button(props: propsInt) {
  const { children, className, atributes } = props;
  return (
    <div
      className={`
    w-max
    py[4px]
    px-10
    md-font

    flex
    justify-center
    items-center

    cursor-pointer
    rounded-[4px]

    panel-color ${className}`}
      {...atributes}
    >
      {children}
    </div>
  );
}
