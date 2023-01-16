let db = require('../../database/models')
const { Op } = require("sequelize");

module.exports = {
    actorsList: async (req, res) => {
        db.Actor.findAll({
            include:[{
                all : true
            }]
        })
        .then(actor => {
        let response = {
            status : 200,
            meta : {
                length : actor.length,
                url:`${req.protocol}://${req.get('host')}${req.originalUrl}`
            },
            data : actor
        }
        return res.status(200).json(response)
    })
    }
}
