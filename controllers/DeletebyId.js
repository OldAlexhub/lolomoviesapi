import MovieModel from "../models/Movies.js";

const DeletebyId = async (req, res) => {
  try {
    const { movieId } = req.params;
    // console.log(movieId);
    const deleteMovie = await MovieModel.findByIdAndDelete({ _id: movieId });

    if (!deleteMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({ message: "Deleted", deleteMovie });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export default DeletebyId;
