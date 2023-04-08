import MainProvider from "@/App/components/Providers/MainProvider";
import type { AppProps } from "next/app";
import "../App/assets/global.scss";
import "../App/components/shared/Select/react-select.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
}
