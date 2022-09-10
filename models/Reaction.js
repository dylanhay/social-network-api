const { Schema, model } = require("mongoose");

const ReactionSchema = new Schema({
  reactionId: {
    type: String,
  },
  reactionBody: {
    type: String,
  },
  username: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// // create the Reaction model using the ReactionSchema
// const Reaction = model('Reaction', ReactionSchema);

// // export the Reaction model
// module.exports = Thought;