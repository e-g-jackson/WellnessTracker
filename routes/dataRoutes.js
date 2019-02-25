module.exports = (app, db) => {
    app.get('/api/getInfo', (req, res) => {
        res.send('filler text')
    })
    
    app.post('/db/food', (req, res) => {
        db.create()
    })
};