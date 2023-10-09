const app = require("../app");
const session = require('supertest');
const agent = session(app);

describe("Ruta: GET /rickandmorty/onsearch/:id", ()=>{
    it( 'Responde con status: 200',async ()=>{
        const response =  await session(app).get("/rickandmorty/onsearch/1")
        expect(response.statusCode).toBe(200)
    })
    test("Responde un objeto con las propiedades: id, name, species, image, gender",async ()=>{
        const response =  await session(app).get("/rickandmorty/onsearch/1");
        const responseBody = response.body;
        expect(Object.keys(responseBody)).toEqual([
            "id",
            "name",
            "species",
            "image",
            "gender",
        ])
    })
    it( 'Si hay un error responde con status: 500',()=>{
        return agent
        .get("/rickandmorty/onsearch/10000")
        .send()
        .then(response => expect(response.statusCode).toBe(500));
    })
})

