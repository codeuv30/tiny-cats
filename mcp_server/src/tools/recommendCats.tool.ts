import axios from "axios";

export const recommendCatsTool = async (kidsFriendly: boolean, appartmentFriendly: boolean) => {
    const res = await axios.post('http://localhost:3000/api/cats/recommended', {
        kidsFriendly,
        appartmentFriendly
    });

    return res.data;
}

export const getAllCats = async () => {
    const res = await axios.get('http://localhost:3000/api/cats');

    return res.data;
}