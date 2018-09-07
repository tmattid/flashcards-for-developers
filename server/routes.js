const express = require("express");

const isAuthenticated = require("./middleware/isAuthenticated");
const UsersController = require("./controllers/UsersController");
const CardsController = require("./controllers/CardsController");
<<<<<<< HEAD
const DecksController = require("./controllers/DecksController");
const CollectionsController = require("./controllers/CollectionsController");
=======
>>>>>>> Add cards endpoint

const router = express.Router();

router.get("/hello", (req, res) => res.send({ message: "Hello world!" }));

<<<<<<< HEAD
router.get("/api/decks", DecksController.getDecks);

router.get("/api/decks/:deckId", DecksController.getDeck);

router.get("/api/collections/:collectionId", CollectionsController.getCollection);

router.get("/api/cards", CardsController.getCards);

router.post("/auth/github", UsersController.githubUser);

=======
router.get("/api/cards", CardsController.getCards);

router.post("/auth/github", UsersController.githubUser);

>>>>>>> Add cards endpoint
router.put("/users/saved_decks", isAuthenticated, UsersController.setSavedDecks);

router.get("/users/saved_decks", isAuthenticated, UsersController.getSavedDecks);

module.exports = router;
