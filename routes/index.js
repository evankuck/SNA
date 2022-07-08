const router = require("express").Router();
import apiRoutes from "./api";

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!</h1>");
});

export default router;