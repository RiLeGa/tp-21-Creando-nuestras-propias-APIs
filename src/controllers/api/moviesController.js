let db = require('../../database/models')
const { Op } = require("sequelize");

module.exports = {
    moviesList: async (req, res) => {
        db.Movie.findAll({
            include:[{
                all : true
            }]
        })
        .then(pelicula => {
        let response = {
            status : 200,
            meta : {
                length : pelicula.length,
                url:`${req.protocol}://${req.get('host')}${req.originalUrl}`
            },
            data : pelicula
        }
        return res.status(200).json(response)
    })
    },
    create: async (req, res) => {

        db.Movie.create({
          title: req.body.title,
          rating: req.body.rating,
          awards: req.body.awards ,
          release_date: req.body.release_date ,
          length: req.body.length,
          genre_id: req.body.genre_id 

        })
          .then(pelicula => {
            let response = {
                status : 200,
                meta : {
                    msg: "creado con exito",
                    url:`${req.protocol}://${req.get('host')}${req.originalUrl}`
                },
                data : pelicula
            }
            return res.status(200).json(response)
        })
        }
    }