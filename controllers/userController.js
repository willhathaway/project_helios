const userModel = require("../models/user");

// Defining methods for the taskController
let userController = {
    findAll: function (req, res) {
        userModel.find(req.query)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findOne_or_create: function (req, res) {
        // look for a user in the DB with the same email:
        console.log("req: ", req.body);
        userModel.findOne({
            email: req.body.email
        }, function(err, dbUser) {
            if(err){
                throw err
            }
            if (dbUser) {
                console.log("user found: ", dbUser)
                res.json({
                    userData: dbUser
                })
            } else {
                userModel.create(req.body).then(response => res.json({userData: response }))
            }
       
        })

        // if you can find the user, return the user information (and query for their tasks). if not, add the user to the database
    },
    create: function (req, res) {
        userModel.create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        userModel.findOneAndUpdate({
                id: req.params.id
            }, req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        userModel.findById(req.params.id)
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
};

module.exports = userController;