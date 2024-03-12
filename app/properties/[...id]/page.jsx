"use client";
import { getProperty } from "@/utils/requests";
import { useParams } from "next/navigation";

const PropertyPage = async () => {
  const { id } = useParams();
  const property = await getProperty(id);
  return <div>{property.name}</div>;
};
export default PropertyPage;
