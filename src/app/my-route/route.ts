import configPromise from "@payload-config";
import { getPayload } from "payload";

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = payload.find({
    collection: "users",
  });
  return Response.json({
    data,
  });
};
