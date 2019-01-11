module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render("index");
    })

    app.post('/form', function(req, res) {
        console.log("data: \n\n", req.body);
        req.session.info = req.body;
        console.log(req.session.info);
        res.redirect("/display");
    })

    app.get('/display', function(req, res) {
        res.render('display', {r: req.session.info});
    })
}