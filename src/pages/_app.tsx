// src/pages/_app.tsx
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import "@/variables.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
