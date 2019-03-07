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

    app.get('/db/finduser/:username/:password', (req, res) => {
        const UN = req.params.username;
        const PW = req.params.password
        db.users.find({}, function(err, result){
            if (err){
                throw err;
            } else {
                let match = false;
                for( var i = 0; i < result.length; i++){
                    if(result[i].username === UN && result[i].password === PW){
                        match = true
                    }
                }
                if(match === true){
                    res.send(true)
                } else {
                    res.send(false)
                }
            }
        })
    })

    app.get('/db/getFoods', (req, res) => {
        db.food.find({}, function(err, result){
            if (err){
                throw err;
            } else {
                res.json(result)
            }
        })
    })
    
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