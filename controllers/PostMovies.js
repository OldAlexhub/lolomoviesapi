import MovieModel from "../models/Movies.js";

const PostMovies = async (req, res) => {
  try {
    const {
      userId,
      img,
      title,
      release_date,
      original_langugae,
      genre_ids,
      vote_average,
      overView,
      id,
    } = req.body;

    const newMovie = await MovieModel({
      userId,
      img,
      title,
      release_date,
      original_langugae,
      genre_ids,
      vote_average,
      overView,
      id,
    });
    await newMovie.save();
    res.status(201).json({ message: `Movie Saved` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error!` });
  }
};
export default PostMovies;
