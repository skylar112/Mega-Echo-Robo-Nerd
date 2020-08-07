const router = require("express").Router();
const bookRoutes = require("./books");
const google = require("./google");

router.use("/book", bookRoutes);
router.use("/book", google);


module.exports = router;