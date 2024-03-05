import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Optima Property | Find Your Cozy Home",
  description: "Find Your Cozy Home Fast and Simple With Optima Property",
  keywords: "rentals, find rentals, properties",
};
const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
