import { Header } from "@/components/Header";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      <Component {...pageProps} />
      <div className="">Footer</div>
    </ThemeProvider>
  );
}
