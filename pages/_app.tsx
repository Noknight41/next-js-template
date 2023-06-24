import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import "../styles/component.css";
import "../styles/globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default CustomApp;
