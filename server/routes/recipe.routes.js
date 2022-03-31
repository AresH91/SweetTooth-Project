// Import your controller
const Recipe = require('../controllers/recipe.controller')

module.exports = function (app) {
    app.get('/api', Recipe.index);
    app.get('/api/recipes', Recipe.getAllFunct);
    app.get('/api/recipes/latest', Recipe.getLatestFunct);
    app.get('/api/recipes/find/:category', Recipe.findByCategory);
    app.get('/api/recipes/search/:searchBy', Recipe.searchBy);
    app.get('/api/random', Recipe.random);
    app.post('/api/add/recipe', Recipe.addFunct);
    app.get('/api/recipe/:id', Recipe.getOneFunct);
    app.put('/api/update/recipe/:id', Recipe.updateOneFunct);
    app.delete('/api/delete/recipe/:id', Recipe.deleteOneFunct);
}