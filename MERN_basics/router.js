const express = require("express");
const router = express.Router();
const InfoRouter = require("./infoSchema");

router.post("/", async (req, res) => {
    var data = new InfoRouter({
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City
    });
    await data.save();
    res.json(data);
})

//Update
router.put("/update", async(req, res) => {
    var update = await InfoRouter.update({_id: req.body._id}, {$set: {
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City
    }});
    res.json(update);
})

//Delete
router.delete("/del/:id", async(req, res) => {
    var delData = await InfoRouter.findByIdAndRemove(req.params.id).then(e => {
        res.json({message: "Deleted Successfully!"})
    });
})


//getAll
router.get("/", async (req, res) => {
    var findData = await InfoRouter.find();
    res.json(findData);
})

router.get("/", (req, res) => {
    res.json("Router Connected successfully");
})

module.exports = router;