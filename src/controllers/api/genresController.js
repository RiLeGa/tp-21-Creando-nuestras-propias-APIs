let db = require('../../database/models')
const sequelize = db.sequelize;
const { Op } = require("sequelize");

module.exports = {
    genresList: async (req, res) => {
        db.Genre.findAll({
            include:[{
                all : true
            }]
        })
        .then(genero => {
        let response = {
            status : 200,
            meta : {
                length : genero.length,
                url:`${req.protocol}://${req.get('host')}${req.originalUrl}`
            },
            data : genero
        }
        return res.status(200).json(response)
    })
    },
    detail: async(req, res) => {
        let idParams = +req.params.id
        db.Genre.findByPk(idParams, {
            include: [{
                all: true
            }]
        }).then(genero=> {
                    
                let response = {
                    status: 200,
                    meta: {
                        url:`${req.protocol}://${req.get('host')}${req.originalUrl}`
                    },
                    data: genero
                }
                return res.status(200).json(response)
            })
            .catch(err => res.status(500).json(err))
            
    }
}
