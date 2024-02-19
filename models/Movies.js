import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  date: { type: Date, default: new Date().toLocaleDateString() },
  userId: String,
  img: String,
  title: String,
  release_date: Date,
  original_language: String,
  genre_ids: String,
  vote_average: Number,
  overView: String,
  id: String,
});
const MovieModel = mongoose.model("movies", MovieSchema);

export default MovieModel;
