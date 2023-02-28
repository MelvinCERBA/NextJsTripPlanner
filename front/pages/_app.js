import "../styles/main.css";
import { viewportProvider } from "@/contexts/viewportContext";

export default function App({ Component, pageProps }) {
    return (
        <>
            <viewportProvider>
                <Component {...pageProps} />
            </viewportProvider>
        </>
    );
}
