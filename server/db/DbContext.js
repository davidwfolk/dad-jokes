import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import JokeSchema from "../models/Joke";
import TagSchema from "../models/Tags";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Jokes = mongoose.model("Joke", JokeSchema);
  Tags = mongoose.model("Tag", TagSchema);
}

export const dbContext = new DbContext();
