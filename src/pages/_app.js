import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AppProvider } from "@/hooks/AppContext";
import "@/styles/globals.css";
import { theme } from "@/theme";
import { ThemeProvider } from "@emotion/react";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <div className="header-wrapper">
          <Header />
        </div>
        <div className="content-wrapper">
          <Component {...pageProps} />
        </div>
        <Footer />
      </ThemeProvider>
    </AppProvider>
  );
}
