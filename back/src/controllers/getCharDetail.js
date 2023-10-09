const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

async function getCharDetail(req, res) {
    const { detailId } = req.params;
    try {
        const response = await axios(URL + detailId);
        const character = {
                id: response.data.id,
                name: response.data.name,
                species: response.data.species,
                image: response.data.image,
                gender: response.data.gender,
                status: response.data.status,
                origin: response.data.origin?.name
            };
            res.status(200).json(character);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
    // axios(URL + detailId)
    //     .then((response) => {
    //         const character = {
    //             id: response.data.id,
    //             name: response.data.name,
    //             species: response.data.species,
    //             image: response.data.image,
    //             gender: response.data.gender,
    //             status: response.data.status,
    //             origin: response.data.origin?.name
    //         };
    //         res.status(200).json(character);
    //     })
    //     .catch((error) => {
    //         console.error(error); // Imprime el error en la consola para depuración
    //         res.status(500).send("Error interno del servidor");
    //     });
};

module.exports = {
    getCharDetail 
};


// const axios = require("axios");

// const getCharDetail = (res, id)=> {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data => {
//         const character = {
//             id: data.id,
//             name: data.name,
//             species: data.species,
//             gender: data.gender,
//             image : data.image,
//             status: data.status,
//             origin: data.origin?.name
//         };
//         res
//         .writeHead(200, {"content-type": "application/json"})
//         .end(JSON.stringify(character));
//     })
//     .catch((error)=> 
//         res
//             .writeHead(500, {"content-type": "text/plain"})
//             .end(`personaje con ${id} no encontrado`)
//         );
//     }


// module.exports = getCharDetail;