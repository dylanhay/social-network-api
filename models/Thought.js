const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String
  },
  // username: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
  reactions: []
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;