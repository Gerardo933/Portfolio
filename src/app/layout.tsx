'use client';

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyles, theme } from "@/styles/theme";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Provider store={store}>
            <GlobalStyles />
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}