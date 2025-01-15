import Likes from "@/src/modalMongodb/Likes";
import { connect } from "@/src/utils/ConnectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
      await connect();
      const likes = await Likes.find();
      return new NextResponse(JSON.stringify(likes), { status: 200 });
    } catch (err) {
      console.error(err);
      return new NextResponse("Error database", { status: 500 });
    }
  };