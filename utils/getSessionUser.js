import { getServerSession } from "next-auth/next";
import { Options } from "@/app/api/auth/[...nextauth]/options";

export const getSessionUser = async () => {
  try {
    const session = await getServerSession(Options);
    if (!session) {
      return null;
    }
    return {
      user: session.user,
      userId: session.user.id,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
