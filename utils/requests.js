
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// api/properties GET
const getProperties = async () => {
  try {
    if (!apiDomain) {
      return [];
    }
    const response = await fetch(`${apiDomain}/properties`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      cache: "no-store",
    });
    const properties = await response.json();
    return properties.properties;
  } catch (error) {
    console.log("Error from getProperties");
    return [];
  }
};

//api/properties/[id] GET

const getProperty = async (id) => {
  try {
    if (!apiDomain) {
      return [];
    }
    const response = await fetch(`${apiDomain}/properties/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      cache: "no-store",
    });
    const property = await response.json()
    console.log(property.property)
    return property.property
  } catch (error) {
    console.log("Error From getProperty");
    throw new Error("Something went wrong");
  }
};

export { getProperties, getProperty };
