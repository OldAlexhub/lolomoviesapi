import axios from "axios";

const SearchMovies = async (req, res) => {
  try {
    const { t } = req.query;
    // console.log(t);
    const apiKey = process.env.API_KEY;
    // console.log(apiKey);
    if (!t) {
      return res.status(400).json({ message: `At least t is required!` });
    }

    const response = await axios.get(
      `http://www.omdbapi.com/?t=${t}&apikey=${apiKey}`
    );

    res.status(200).json({
      message: "Data fetched successfully",
      data: response.data,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export default SearchMovies;
