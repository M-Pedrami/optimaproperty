"use client";

import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import { useParams } from "next/navigation";
import useSWR from "swr";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const PropertyPage = () => {
  const { id } = useParams();
  const { data, error } = useSWR(`${apiDomain}/properties/${id}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return <PropertyHeaderImage image={data.property.images[0]} />;
};
export default PropertyPage;
