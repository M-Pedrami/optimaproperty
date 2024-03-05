"use client";
import { useParams } from "next/navigation";

const Dynamic = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};
export default Dynamic;
