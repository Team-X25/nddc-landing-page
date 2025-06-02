interface MenuProps {
  textColor: string;
}
const MenuIconBlack = ({textColor}: MenuProps) => {
  return (
    <svg
      width="30"
      height="19"
      viewBox="0 0 30 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1.75" x2="30" y2="1.75" stroke={textColor} strokeWidth="2.5" />
      <line y1="9.75" x2="30" y2="9.75" stroke={textColor} strokeWidth="2.5" />
      <line y1="17.75" x2="30" y2="17.75" stroke={textColor} strokeWidth="2.5" />
    </svg>
  );
};

export default MenuIconBlack;
