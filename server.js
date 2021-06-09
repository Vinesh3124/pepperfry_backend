const express = require("express");
const server = express();
// const body_parser = require("body-parser");
server.use(express.json())

const db = require("./db");
const { ObjectId } = require("bson");
const dbName = "pepprefyy";
const collectionName = "users";
const chairCollection = "chairs";
const setteesCollection = "settees";
const sofasCollection = "sofas";
const tablesCollection = "tables";
const diningbarCollection= "dining&bar"
const bedsCollection = "beds"
const homeChickCollection = "homeChickHome"
const houseFavListCollection = "houseFavList"
const happyHomeEssentialsCollections = "happyHomeEssentials"
const decorationListCollections = "decorationList"
const modernStyleBannersCollections = "modernStyleBanners"
const nightEssentialCollections = "nightEssential"

//user data
db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    // to get all the users
    server.get("/users", (req, res) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    });
    //to get a single user
    server.get("/users/:email/:pass", (req, res)=>{
        const email = req.params.email
        const password = req.params.pass
        dbCollection.find({$and: [{"email": {$eq: email}}, {"password": {$eq: password}}]}).toArray((error, result)=>{
            if(error) throw error
            if(result.length == 0){
                res.status(200).json("Invalid Email or Password") 
            }
            else{
                res.status(200).json(result) 
            }
        })
    })
    //to add new user
    server.post("/users", (req, res) => {
        const user = req.body
        dbCollection.insertOne(user, (error, result) => {
            if(error) throw error
            res.status(201).json(user)
        })
    })
    //to delete a user
    server.delete("/users/:id", (request, response) => {
        const itemId = request.params.id;
        console.log("Delete item with id: ", itemId);
    
        dbCollection.deleteOne({"_id": ObjectId(itemId)}, function(error, result) {
            if (error) throw error;
            response.status(201).json("deleted")
        });
    })
    //to update a user
    server.put("/users/:id", (req, res) => {
        const id = req.params.id
        const data = req.body

        dbCollection.updateOne({"_id": ObjectId(id)}, {$set: data}, (error, result) => {
            if(error) throw error
            res.status(201).json("Updated")
        })
    })
}, 

function(err) { // failureCallback
    throw (err);
});
//chair data
db.initialize(dbName, chairCollection, function(dbCollection){
    // to get all the chairs
    server.get("/chairs", (req, res) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    });
    //to get a single product
    server.get("/chairs/:id", (req, res) => {
        dbCollection.find({"_id": ObjectId(req.params.id)}).toArray((error, result)=>{
            if(error) throw error
            res.status(200).json(result)
        })
    })
},

function(err){
    throw(err)
})
//settees data
db.initialize(dbName, setteesCollection, function(dbCollection){
    // to get all the settees
    server.get("/settees", (req, res) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    });
    //to get a single settees
    server.get("/settees/:id", (req, res) => {
        dbCollection.find({"_id": ObjectId(req.params.id)}).toArray((error, result)=>{
            if(error) throw error
            res.status(200).json(result)
        })
    })
},

function(err){
    throw(err)
})
//sofas data
db.initialize(dbName, sofasCollection, function(dbCollection){
    // to get all the sofas
    server.get("/sofas", (req, res) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    });
    //to get a single sofas
    server.get("/sofas/:id", (req, res) => {
        dbCollection.find({"_id": ObjectId(req.params.id)}).toArray((error, result)=>{
            if(error) throw error
            res.status(200).json(result)
        })
    })
},

function(err){
    throw(err)
})
//tables data
db.initialize(dbName, tablesCollection, function(dbCollection){
    // to get all the tables
    server.get("/tables", (req, res) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    });
    //to get a single tables
    server.get("/tables/:id", (req, res) => {
        dbCollection.find({"_id": ObjectId(req.params.id)}).toArray((error, result)=>{
            if(error) throw error
            res.status(200).json(result)
        })
    })
},

function(err){
    throw(err)
})

//beds data
db.initialize(dbName, diningbarCollection, function(dbCollection){
    // to get all the beds
    server.get("/diningbar", (req, res) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    });
    //to get a single beds
    server.get("/diningbar/:id", (req, res) => {
        dbCollection.find({"_id": ObjectId(req.params.id)}).toArray((error, result)=>{
            if(error) throw error
            res.status(200).json(result)
        })
    })
},

function(err){
    throw(err)
})

//beds data
db.initialize(dbName, bedsCollection, function(dbCollection){
    // to get all the beds
    server.get("/beds", (req, res) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    });
    //to get a single beds
    server.get("/beds/:id", (req, res) => {
        dbCollection.find({"_id": ObjectId(req.params.id)}).toArray((error, result)=>{
            if(error) throw error
            res.status(200).json(result)
        })
    })
},

function(err){
    throw(err)
})

//homeChickHome data
db.initialize(dbName, homeChickCollection, function(dbCollection){
    // to get all the homeChickHome
    server.get("/homeChick", (req, res) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    });
    //to get a single homeChickHome
    server.get("/homeChick/:id", (req, res) => {
        dbCollection.find({"_id": ObjectId(req.params.id)}).toArray((error, result)=>{
            if(error) throw error
            res.status(200).json(result)
        })
    })
},

function(err){
    throw(err)
})

//houseFavList data
db.initialize(dbName, houseFavListCollection, function(dbCollection){
    // to get all the houseFavList
    server.get("/houseFavList", (req, res) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    });
    //to get a single houseFavList
    server.get("/houseFavList/:id", (req, res) => {
        dbCollection.find({"_id": ObjectId(req.params.id)}).toArray((error, result)=>{
            if(error) throw error
            res.status(200).json(result)
        })
    })
},

function(err){
    throw(err)
})

//happyHomeEssentials data
db.initialize(dbName, happyHomeEssentialsCollections, function(dbCollection){
    // to get all the happyHomeEssentials
    server.get("/happyHomeEssentials", (req, res) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    });
    //to get a single happyHomeEssentials
    server.get("/happyHomeEssentials/:id", (req, res) => {
        dbCollection.find({"_id": ObjectId(req.params.id)}).toArray((error, result)=>{
            if(error) throw error
            res.status(200).json(result)
        })
    })
},

function(err){
    throw(err)
})

//decorationList data
db.initialize(dbName, decorationListCollections, function(dbCollection){
    // to get all the decorationList
    server.get("/decorationList", (req, res) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    });
    //to get a single decorationList
    server.get("/decorationList/:id", (req, res) => {
        dbCollection.find({"_id": ObjectId(req.params.id)}).toArray((error, result)=>{
            if(error) throw error
            res.status(200).json(result)
        })
    })
},

function(err){
    throw(err)
})

//modernStyleBanners data
db.initialize(dbName, modernStyleBannersCollections, function(dbCollection){
    // to get all the modernStyleBanners
    server.get("/modernStyleBanners", (req, res) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    });
    //to get a single modernStyleBanners
    server.get("/modernStyleBanners/:id", (req, res) => {
        dbCollection.find({"_id": ObjectId(req.params.id)}).toArray((error, result)=>{
            if(error) throw error
            res.status(200).json(result)
        })
    })
},

function(err){
    throw(err)
})

//nightEssential data
db.initialize(dbName, nightEssentialCollections, function(dbCollection){
    // to get all the nightEssential
    server.get("/nightEssential", (req, res) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    });
    //to get a single nightEssential
    server.get("/nightEssential/:id", (req, res) => {
        dbCollection.find({"_id": ObjectId(req.params.id)}).toArray((error, result)=>{
            if(error) throw error
            res.status(200).json(result)
        })
    })
},

function(err){
    throw(err)
})

server.listen(3001, () => {
    console.log(`Server listening at 3001`);
});