import Link from "next/link";

const HomePage = () => {
  return <div>
    <h1 className="text-3xl font-bold">HomePage</h1>
    <Link href="/properties">Properties</Link>
  </div>;
};
export default HomePage;
