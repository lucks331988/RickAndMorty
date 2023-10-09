const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } = require('../controllers/getCharDetail');
const { postFav, getFavs,deleteFavs } = require('../controllers/favs');

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);

router.post("/favs", postFav)
router.get("/favs", getFavs)
router.delete("/fav/:id", deleteFavs)
module.exports = router;