import Cat from "../models/cat.model.ts";

const createCat = async (payload: object) => {
  return await Cat.create(payload);
};

export const getAllCats = async () => {
  return await Cat.find();
};

export const getCatById = async (catId: string) => {
  return await Cat.findById(catId);
};

export const searchCat = async (query: string) => {
  return await Cat.find({
    $or: [
      {
        name: {
          $regex: query,
          $options: "i",
        },
      },
      {
        breed: {
          $regex: query,
          $options: "i",
        },
      },
    ],
  });
};

export const recommend = async (kidsFriendly: boolean, appartmentFriendly: boolean) => {
  return await Cat.find({
    kidsFriendly,
    appartmentFriendly
  });
};

export default {
  createCat,
  getAllCats,
  getCatById,
  searchCat,
  recommend
};
