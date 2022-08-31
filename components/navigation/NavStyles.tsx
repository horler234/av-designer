import styled from "styled-components";

export const NavigationContainer = styled.nav`
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #161616;
  /* border-radius: 0 8px 8px 0; */
  padding: 42px 27.04px 86px 27.04px;
  color: #fff;
  width: 239px;

  h1 {
    text-align: center;
    font-size: 24px;
    line-height: 140%;
    color: #fff;
    margin-bottom: 31px;

    span {
      color: #ff6600;
    }
  }

  &::-webkit-scrollbar {
    width: 2px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff6600;
    border-radius: 2px;
    opacity: 0.6;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavigationButtonsList = styled.ul`
  margin-bottom: 191px;
  list-style: none;

  li {
    margin-bottom: 23px;
    height: 44px;
    position: relative;
    background: rgba(236, 241, 244, 0.1);

    &:last-child {
      margin-bottom: 0;
    }

    button {
      height: 44px;
      width: 100%;
      padding-left: 16px;
      display: flex;
      position: relative;
      align-items: center;
      cursor: pointer;
      background: transparent;
      border: transparent;
      font-family: inherit;
      border-radius: 8px;
      font-size: 16px;
      line-height: 140%;
      color: #ffffff;

      svg {
        margin-right: 12px;
      }
    }
  }
`;

export const ExtraLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.002em;
  padding-left: 12px;
  color: #fff;
  text-decoration: none;
  margin-bottom: 34px;

  span {
    width: 24px;
    display: flex;
    justify-content: center;
    margin-right: 10px;
  }
`;

export const NeedHelpContainer = styled.div`
  padding-top: 4px;
  padding-left: 16px;
  p {
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 10px;
  }

  a {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: rgba(236, 241, 244, 0.75);
    text-decoration: none;
  }
`;

export const ThemeModeContainer = styled.div`
  margin-top: 63px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 14.77px;
  }

  label {
    position: relative;
    display: inline-block;
    width: 50.23px;
    height: 25px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 30px;

    &:before {
      border-radius: 50%;
    }
  }

  span:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 7.88px;
    bottom: 6px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + span {
    background-color: #ff6600;
  }

  input:focus + span {
    box-shadow: 0 0 1px #ff6600;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  width: 100vw;
`;

/** MOBILE NAVIGATION */
export const MobileNavigationContainer = styled.div`
  position: sticky;
  width: 100%;
  padding: 10px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 10;
  left: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #161616;
  color: #fff;

  h1 {
    text-align: center;
    font-size: 18px;
    color: #fff;

    span {
      color: #ff6600;
    }
  }

  nav {
    display: none;
  }

  @media (max-width: 900px) {
    nav {
      display: block;
    }
  }

  @media (min-width: 901px) {
    display: none;
  }
`;
