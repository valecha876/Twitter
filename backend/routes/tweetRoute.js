import express from "express";
// import {Register , Login , logout } from "../controllers/userController.js";
import {
  createTweet,
  deleteTweet,
  likeOrDislike,
  getAllTweets,
  getFollowingTweets,
} from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);
router.route("/like/:id").put(isAuthenticated, likeOrDislike);
router.route("/alltweets/:id").get(isAuthenticated, getAllTweets);
router.route("/followingtweets/:id").get(isAuthenticated, getFollowingTweets);
export default router;
