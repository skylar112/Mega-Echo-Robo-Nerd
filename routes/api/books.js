const router = require("express").Router();

const booksController = require("../../controller/books");

//call methods that we make in books controller, use existing solved for CRUD functions
router.route("/")
.get(booksController.findAll())
.post(booksController.create())


router.route("/:id")
.get(booksController.findById())
.put(booksController.update())
.delete(booksController.remove())

module.exports = router;