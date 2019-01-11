module.exports = {
    index: function(req, res) {
        res.render("index");
    },
    form: function(req, res) {
        console.log("data: \n\n", req.body);
        req.session.info = req.body;
        console.log(req.session.info);
        res.redirect("/display");
    },
    display: function(req, res) {
        res.render('display', {r: req.session.info});
    }
}