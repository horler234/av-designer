interface IHamburgerIcon {
  onClick: () => void;
}

export const HamburgerIcon = ({ onClick }: IHamburgerIcon) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <path
      d="M5.15625 7.96875H24.8438M5.15625 22.9688H24.8438H5.15625ZM5.15625 15.4688H24.8438H5.15625Z"
      stroke="#FF6600"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
