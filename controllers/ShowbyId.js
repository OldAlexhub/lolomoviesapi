import MovieModel from "../models/Movies.js";

const ShowbyId = async (req, res) => {
  try {
    const { userId } = req.params;
    // console.log(userId);
    const show = await MovieModel.find({ userId: userId });

    res.status(200).json({ message: `Data`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowbyId;
