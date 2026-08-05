import "./globals.css";
import { IntroReadyProvider } from "@/components/IntroReadyProvider";
import { MotionProvider } from "@/components/MotionProvider";

export const metadata = {
  title: "Consira Proposition",
  description: "A Next.js starter with Tailwind CSS and Motion scroll reveals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full overflow-hidden antialiased">
      <body className="min-h-full overflow-hidden">
        <IntroReadyProvider>
          <MotionProvider>{children}</MotionProvider>
        </IntroReadyProvider>
      </body>
    </html>
  );
}
