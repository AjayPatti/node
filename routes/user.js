const express = require("express");
const router = express.Router();
const {
  handlerGetAllData,
  handlerGetDataId,
  handlerGetUpdateData,
  handlerDeleteData,
  handlerStoreData,
} = require("../controllers/user");

router.route("/").get(handlerGetAllData).post(handlerStoreData);

router
  .route("/:id")
  .get(handlerGetDataId)
  .patch(handlerGetUpdateData)
  .delete(handlerDeleteData);

module.exports = router;
