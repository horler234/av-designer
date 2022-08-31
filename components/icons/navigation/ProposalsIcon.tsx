interface IProposalsIcon {
  isNavigation?: boolean;
}

export const ProposalsIcon = ({ isNavigation }: IProposalsIcon) => (
  <svg
    width={isNavigation ? "25" : "33"}
    height={isNavigation ? "24" : "32"}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8337 4.33337C8.59947 4.33337 5.16699 7.76585 5.16699 12V21.4759C5.16699 22.0282 5.61471 22.4759 6.16699 22.4759C6.71927 22.4759 7.16699 22.0282 7.16699 21.4759V12C7.16699 8.87043 9.70405 6.33337 12.8337 6.33337H22.1842C22.7365 6.33337 23.1842 5.88565 23.1842 5.33337C23.1842 4.78109 22.7365 4.33337 22.1842 4.33337H12.8337Z"
      fill={isNavigation ? "#fff" : "#8D08F5"}
      fillOpacity={isNavigation ? "1" : "0.5"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.3701 9.05765C21.0488 8.57469 16.6179 8.57469 12.2966 9.05765C11.0656 9.19524 10.0764 10.164 9.93126 11.4046C9.41875 15.7866 9.41875 20.2133 9.93126 24.5953C10.0764 25.836 11.0656 26.8046 12.2966 26.9422C16.6179 27.4253 21.0488 27.4253 25.3701 26.9422C26.6011 26.8046 27.5904 25.836 27.7355 24.5953C28.248 20.2133 28.248 15.7866 27.7355 11.4046C27.5904 10.164 26.6011 9.19524 25.3701 9.05765ZM12.5188 11.0453C16.6924 10.5788 20.9743 10.5788 25.1479 11.0453C25.4644 11.0806 25.7132 11.3309 25.7489 11.6369C26.2435 15.8645 26.2435 20.1354 25.7489 24.363C25.7132 24.669 25.4644 24.9193 25.1479 24.9546C20.9743 25.4212 16.6924 25.4212 12.5188 24.9546C12.2023 24.9193 11.9535 24.669 11.9177 24.363C11.4233 20.1354 11.4233 15.8645 11.9177 11.6369C11.9535 11.3309 12.2023 11.0806 12.5188 11.0453Z"
      fill={isNavigation ? "#fff" : "#8D08F5"}
      fillOpacity={isNavigation ? "1" : "0.5"}
    />
  </svg>
);
