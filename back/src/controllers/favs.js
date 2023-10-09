const favs = require("../utils/favs");

function postFav(req, res) {
    favs.push(req.body);
    res.status(201).json(favs);
}

function getFavs(req, res) {
    res.status(201).json(favs);
}
function deleteFavs(req, res) {
    const {id} = req.params;
    favs = favs.filter((character)=>character.id !== Number(id))
    res.status(200).json(favs);
}

module.exports = {
    postFav,
    getFavs,
    deleteFavs
}