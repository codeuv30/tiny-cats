import type { Request, Response } from "express";
import catService from "../services/cat.service.ts";

const createCat = async (req: Request, res: Response) => {
  const result = await catService.createCat(req.body);

  return res.status(201).json({
    success: true,
    message: "Cat created.",
    data: result,
  });
};

const getAllCats = async (req: Request, res: Response) => {
  const result = await catService.getAllCats();

  return res.status(200).json({
    success: true,
    message: "Successfully fetched all cats",
    data: result,
  });
};

const getCatById = async (req: Request, res: Response) => {
  const catId = req.params.id;

  if (!catId || Array.isArray(catId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid Cat Id",
    });
  }

  const result = await catService.getCatById(catId);

  return res.status(200).json({
    success: true,
    message: "Successfully fetched all cats",
    data: result,
  });
};

const searchCat = async (req: Request, res: Response) => {
    const q = req.query.q as string;

    const result = await catService.searchCat(q);

    return res.status(200).json({
        success: true,
        message: "Cat fetched",
        data: result
    });
}

const recommendCats = async (req: Request, res: Response) => {
    console.log("========================================")
    console.log(req.body);
    console.log("========================================")

    const { kidsFriendly, appartmentFriendly } = req.body;

    const result = await catService.recommend(kidsFriendly, appartmentFriendly);

    return res.status(200).json({
        success: true,
        message: "Cats fetched",
        data: result
    });
}

export default {
  createCat,
  getAllCats,
  getCatById,
  searchCat,
  recommendCats
};
