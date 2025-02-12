import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});




export const metadata = {
  title: "Mentoria Café com consistência",
  description: "Mentoria Café com consistência Os resultados dos atendimentos domiciliares transformam vidas! Confira o que os pacientes da Lorrane têm a dizer sobre o impacto do cuidado profissional e personalizado que receberam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={poppins.variable}>
      <body className="font-poppins">
        {children}
      </body>
    </html>
  );
}
