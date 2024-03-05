import Link from "next/link";
const PropertiesPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">PropertyPage</h1>
      <Link href="/">Home</Link>
      <a href="/properties/Rieselfeld">Rieselffeld</a>
    </div>
  );
};
export default PropertiesPage;
