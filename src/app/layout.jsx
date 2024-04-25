import "./globals.css";
import { ApolloWrapper } from "@/lib/apollo-wrapper";

export const metadata = {
  title: "Countries App",
  description: "Challenge Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
