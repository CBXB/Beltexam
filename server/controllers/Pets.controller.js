const Pet = require('../models/Pets.models');

class PetController{
    getAll(req, res){
        Pet.find({}).sort("type").exec()
            .then(pets => res.json(pets))
            .catch(err => res.json(err));
    }
    
    create(req, res){
        const newPet = new Pet(req.body);
        newPet.save()
        .then(()=> res.json({msg: "Pet added"}))
        .catch(err => res.json(err));
    }

    delete(req, res){
        Pet.findOneAndDelete({_id: req.params._id})
            .then(() => res.json({msg: "Deleted "}))
            .catch(err => res.json(err));
    }

    getOne(req, res){
        Pet.findOne({_id: req.params._id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    }
    
    update(req, res){
        Pet.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true, context: 'query'})
            .then( () => res.json({msg: "Updated "}))
            .catch(err => res.json(err));
    }
}

module.exports = new PetController();