import dbConnect from "../../../../utils/dbConnect";
import Workshop from "../../../../models/workshop";
import Cors from "cors";

import runMiddleware from "../../../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export const searchWorkshops = async (keyword) => {
  const workshop = await Workshop.find({
    title: { $regex: keyword, $options: "i" },
  });
  return workshop;
};

export default async (req, res) => {
  await runMiddleware(req, res, cors);

  const {
    query: { keyword },
    method,
    body,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        if (keyword.length > 0) {
          const workshops = await searchWorkshops(keyword);
          res.status(200).json({ status: "success", data: workshops });
        } else {
          res.status(400).json({
            status: "error",
            message: "empty search term",
          });
        }
      } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
      }
      break;

    default:
      res.status(500).json({
        status: "error",
        message:
          "Default error occured, this is most likey since the request `method` was not handled or unspecified",
      });
      break;
  }
};
