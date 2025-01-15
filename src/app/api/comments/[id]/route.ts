import Likes from "@/src/modalMongodb/Likes";
import { connect } from "@/src/utils/ConnectDB";
import { NextResponse } from "next/server";

export const GET = async ({ params }: { params: { id: string } }) => {
  const id = params;
  try {
    await connect();
    const likes = await Likes.findOne({ id });
    if (likes) {
      return new NextResponse(JSON.stringify(likes.numberOfLikes), { status: 200 });
    }
  } catch (err) {
    console.log(err);
    return new NextResponse("Error database", { status: 500 });
  }
};
