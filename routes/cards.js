const cardsRouter = require('express').Router();
const cardController = require('../controllers/card');
const {
  validateDeleteCard, validateAddCard, validateAddLike, validateDeleteLike,
} = require('../middlewares/validations');

cardsRouter.get('/', cardController.getAllCards);
cardsRouter.delete('/:cardId', validateDeleteCard, cardController.deleteCardById);

cardsRouter.post('/', validateAddCard, cardController.createCard);

cardsRouter.put('/:cardId/likes', validateAddLike, cardController.addLike);

cardsRouter.delete('/:cardId/likes', validateDeleteLike, cardController.removeLike);

module.exports = cardsRouter;
