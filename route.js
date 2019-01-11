module.exports = function(app) {
    const controller = require('./controller');

    app.get('/', function(req, res) {
        controller.index(req, res);
    })

    app.post('/form', function(req, res) {
        controller.form(req, res);
    })

    app.get('/display', function(req, res) {
        controller.display(req, res);
    })
}