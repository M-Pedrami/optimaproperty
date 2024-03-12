const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

const getProperties = async () => {
  try {
    if(!apiDomain){
      return []
    }
    const response = await fetch(
      `${apiDomain}/properties`,
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
    return []
  }
};

export { getProperties };
