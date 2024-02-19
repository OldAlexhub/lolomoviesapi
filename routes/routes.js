import { Router } from "express";
import SearchMovies from "../controllers/SearchMovies.js";
import Signup from "../controllers/Signup.js";
import Login from "../controllers/Login.js";
import protectRoute from "../middleware/protectRoute.js";
import PostMovies from "../controllers/PostMovies.js";
import ShowbyId from "../controllers/ShowbyId.js";
import DeletebyId from "../controllers/DeletebyId.js";

const router = Router();

router.get("/searchmovies", SearchMovies);

//users
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/watchlist", protectRoute, PostMovies);
router.get("/mywatchlist/:userId", protectRoute, ShowbyId);
router.delete("/delete/:movieId", protectRoute, DeletebyId);

export default router;
