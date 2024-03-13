"use client";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import { getProperty } from "@/utils/requests";
import { useParams } from "next/navigation";

const PropertyPage = async () => {
  const { id } = useParams();
  const property = await getProperty(id);
  if (!property){
    return <h1 className="text-3xl text-center font-bold mt-10">Property Not Found</h1>
  }
  return (
    <PropertyHeaderImage image={property.images[0]}/>
  )
};
export default PropertyPage;
