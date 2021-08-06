const mongoose = require("mongoose");

const { Schema } = mongoose;

const FollowSchema = new Schema(
  {
    follower: { type: Schema.Types.ObjectId, required: true },
    following: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);

const Follow = mongoose.model("Follow", FollowSchema);

module.exports = FollowSchema;
