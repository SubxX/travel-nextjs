export const ChipText = ({ text, isorange = false }: any) => {
  return <span className={`chip ${isorange && "orange"}`}>{text}</span>;
};
