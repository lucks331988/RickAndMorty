const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

async function getCharById(req, res) {
    const { id } = req.params;

    try {
        const response = await axios(URL + id);
            const character = {
                id: response.data.id,
                name: response.data.name,
                species: response.data.species,
                image: response.data.image,
                gender: response.data.gender
            };
            res.status(200).json(character);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
    // axios(URL + id)
    // .then((response) => {
    //     if (!response.data.id) {

    //         res.status(404).json({ error: 'Personaje no encontrado' });
    //     } else {
    //         const character = {
    //             id: response.data.id,
    //             name: response.data.name,
    //             species: response.data.species,
    //             image: response.data.image,
    //             gender: response.data.gender
    //         };
    //         res.status(200).json(character);
    //     }
    // })
    // .catch((error) => {
    //     console.error(error);
    //     res.status(500).json({ error: 'Error en el servidor' });
    // });
};

module.exports = {
    getCharById 
};


// const axios = require("axios");

// const getCharById = (res, id)=> {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data => {
//         const character = {
//             id: data.id,
//             name: data.name,
//             species: data.species,
//             gender: data.gender,
//             image : data.image
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
