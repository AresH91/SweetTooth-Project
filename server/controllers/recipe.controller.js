// Desctructure and Import Model
const { Recipe} = require('../models/recipe.model')



//Test
module.exports.index = (req, res) => { //The .index becomes the name of the function
    res.json({
        message: "This is a test"
    })
}

// Add
module.exports.addFunct = (req, res) => {
    Recipe.create(req.body)
        .then(Pie => res.json(Pie))
        .catch(err => res.status(400).json(err))
}

// Get All
module.exports.getAllFunct = (req, res) => {
    Recipe.find().sort({name: 1})
        .then(allThings => res.json(allThings))
        .catch(err => res.status(400).json(err))
}
//Additionall you can sortAlphabetical Order by chaining the .find as so -> find().sort({ {ReplaceWithKeyName}: 1 })

//Get 5 Latest
module.exports.getLatestFunct = (req, res) => {
    Recipe.find().sort({_id:-1}).limit(5)
        .then(latest => res.json(latest))
        .catch(err => res.status(400).json(err))
}

//Get One  the ID will be passed through PARAMS
module.exports.getOneFunct = (req, res) => {
    Recipe.findOne({ _id: req.params.id })
        .then(thing => res.json(thing))
        .catch(err => res.status(400).json(err))
}

// Update One - Passing in object w/ _id from params, the Req Body, then Running validators on input
module.exports.updateOneFunct = (req, res) => {
    Recipe.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedThing => res.json(updatedThing))
        .catch(err => res.status(400).json(err))
}

// Delete One by passing in object with ID from Params
module.exports.deleteOneFunct = (req, res) => {
    Recipe.deleteOne({ _id: req.params.id })
        .then(res => res.json(res))
        .catch(err => res.status(400).json(err))
}

// Find all by category
module.exports.findByCategory = (req, res) => {
    Recipe.find({ category: req.params.category })
    .then(thing => res.json(thing))
    .catch(err => res.status(400).json(err))
}

module.exports.searchBy = (req, res) => { 
    Recipe.find({ $text: { $search: req.params.searchBy, $diacriticSensitive: true } })
        .then(thing => res.json(thing))
        .catch(err => res.status(400).json(err))
}

module.exports.random = (req, res) => {
    Recipe.aggregate(
        [ {$sample: {size: 1}}]
    )
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err))
}