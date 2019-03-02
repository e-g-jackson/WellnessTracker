module.exports = (app, db) => {
    app.get('/db/getweights', (req, res) => {
        db.weight.find({}, function(err, result){
            if(err){
                throw err;
            } else {
                console.log(result);
                res.send(result);
            }
        });
    });
    
    app.post('/db/newuser', (req, res) => {
        console.log(req.body)
        db.users.create(req.body).then(() => {
        res.send('Welcome ' + req.body.username + '!')
        });
    });
    
    app.post('/db/food', function(req, res){
        console.log(req.body)
        db.food.create(req.body).then(() => {
        res.send('Food data received!')
        });
    });

    app.post('/db/weight', function(req, res){
        console.log(req.body);
        db.weight.create(req.body).then(() => {
        res.send('Weight entry received!')
        });
    });
};