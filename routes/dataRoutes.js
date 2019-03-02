module.exports = (app, db) => {
    app.get('/db/getFoods', (req, res) => {
        res.send('filler text')
    })
    
    app.post('/db/newuser', (req, res) => {
        console.log(req.body)
        db.users.create(req.body).then(() => {
        res.send('Welcome ' + req.body.username + '!')
        });
    })
    
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
        })
    })
};