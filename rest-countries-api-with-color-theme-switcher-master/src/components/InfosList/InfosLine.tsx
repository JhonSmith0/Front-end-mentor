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
      className={`flex items-end gap-2 ${
        Break
          ? "flex-col gap-0 mb-2 items-start leading-1"
          : "whitespace-nowrap"
      } ${liClassName}`}
    >
      <span className={`font-semibold ${labelClassName ?? ""}`}>{label}:</span>
      <span
        className={`font-light ${Break ? "leading-1" : ""} ${
          valueClassName ?? ""
        }`}
      >
        {value}
      </span>
    </li>
  );
}
