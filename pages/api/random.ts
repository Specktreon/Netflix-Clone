import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      console.log("Invalid method");
      return res.status(405).end();
    }
    console.log("Before auth");
    await serverAuth(req, res);
    console.log("After auth");

    const moviesCount = await prismadb.movie.count();
    console.log("Movie count:", moviesCount);

    const randomIndex = Math.floor(Math.random() * moviesCount);
    console.log("Random index:", randomIndex);

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });
    console.log("Found movie:", randomMovies);

    if (!randomMovies || randomMovies.length === 0) {
      return res.status(404).json({ error: "No movie found at random index" });
    }

    return res.status(200).json(randomMovies[0]);
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
}
