import localFont from "next/font/local";
import Header from "../components/Header/Header";
import "./globals.css";

const raleway = localFont({
    src: [
      { path: "../../public/fonts/Raleway-Bold.ttf",
        weight: "400",
        style: "normal"
      },
    ],
    variable: "--font-raleway",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={raleway.variable}>
            <body className={raleway.className}> 
                <Header />
                {children}
            </body>
        </html>
    );
}