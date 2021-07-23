export const Button = ({
  text,
  type,
}: {
  text: string;
  type: "filled" | "transparent";
}) => {
  return <button className={`btn ${type}`}>{text}</button>;
};
