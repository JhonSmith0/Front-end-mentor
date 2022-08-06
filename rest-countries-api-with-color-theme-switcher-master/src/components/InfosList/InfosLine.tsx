export default function InfoLine(props: {
  label: any;
  value: any;
  liClassName?: string;
  labelClassName?: string;
  valueClassName?: string;
}) {
  const { liClassName, label, labelClassName, valueClassName, value } = props;

  return (
    <li
      className={`flex items-end 
      gap-2 ${liClassName}`}
    >
      <span className={`font-semibold ${labelClassName}`}>{label}:</span>
      <span className={`font-light ${valueClassName}`}>{value}</span>
    </li>
  );
}
