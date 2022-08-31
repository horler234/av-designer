import type { AppProps } from "next/app";
import { Navbar } from "../components/navigation";
import { GlobalStyle } from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </>
  );
}

export default MyApp;
