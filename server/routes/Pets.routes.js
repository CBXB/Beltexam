const Pets = require("../controllers/Pets.controller");

module.exports = app => {
    app.get('/api/pets', Pets.getAll);
    app.post('/api/pets', Pets.create);
    app.get('/api/pets/:_id', Pets.getOne);
    app.delete('/api/pets/:_id', Pets.delete);
    app.put('/api/pets/:_id', Pets.update);
}