import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      extended:true
    },
    userDetails:{
      type:Array,
      default:[]
    },
  },
  { timestamps: true }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
