import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { NextPage } from "next";

import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../themes";

import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);
  return getLayout(
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
