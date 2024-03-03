import "@/assets/styles/globals.css";

export const metadata = {
  title: "Optima Property | Find Your Cozy Home",
  description: "Find Your Cozy Home Fast and Simple With Optima Property",
  keywords: "rentals, find rentals, properties",
};
const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
