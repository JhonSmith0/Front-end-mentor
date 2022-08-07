export default function InfoLine(props: {
  label: any;
  value: any;
  liClassName?: string;
  labelClassName?: string;
  valueClassName?: string;
  Break?: boolean;
}) {
  const { liClassName, label, labelClassName, valueClassName, value, Break } =
    props;

  return (
    <li
      className={`flex items-end gap-2 ${liClassName} flex-wrap  leading-[3]`}
    >
      <span className={`font-semibold ${labelClassName ?? ""} leading-[1]`}>
        {label}:
      </span>
      <span className={`font-light leading-[1]`}>{value}</span>
    </li>
  );
}
