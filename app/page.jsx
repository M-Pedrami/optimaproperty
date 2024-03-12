import Hero from "@/components/Hero";
import HomeRecentProperties from "@/components/HomeRecentProperties";
import Infoboxes from "@/components/Infoboxes";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Infoboxes />
      <HomeRecentProperties />
    </div>
  );
};
export default HomePage;
