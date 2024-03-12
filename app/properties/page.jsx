import PropertyCard from "@/components/PropertyCard";
const getProperties = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        cache: "no-store",
      }
    );
    const properties = await response.json();
    return properties.properties;
  } catch (error) {
    console.log("Error from getProperties");
  }
};
const PropertiesPage = async () => {
  const properties = await getProperties();
  properties.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <h1 className="text-4xl">No Properties Found</h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default PropertiesPage;
