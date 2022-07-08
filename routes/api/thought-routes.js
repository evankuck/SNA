const router = require("express").Router();
import {  getAllThought, getThoughtById, createThought, updateThought, deleteThought, addReaction, removeReaction,
} from "../../controllers/thought-controller";


// /api/thoughts
router.route("/").get(getAllThought).post(createThought);

// /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

export default router;