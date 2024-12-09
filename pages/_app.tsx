import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

// import { fontSans, fontMono } from "@/config/fonts";
import localFont from "next/font/local";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider >
      <main className={kalamehWebBlack.className}>
        <Component {...pageProps} />
      </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

// export const fonts = {
//   sans: fontSans.style.fontFamily,
//   mono: fontMono.style.fontFamily,
// };

const kalamehWebBlack = localFont({
  src: "../utility/fonts/kalameh/KalamehWeb-Medium.woff2",
  // weight: '500',
  // style: 'normal',
  // variable: '--font-kalamehWeb-black'
});
