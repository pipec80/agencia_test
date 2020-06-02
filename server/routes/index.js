const express = require("express");
const router = express.Router();
//ctrl
const nosotrosCtrl = require("../controllers/nosotrosController");
const homeCtrl = require("../controllers/homeCrontrollers");
const viajesCtrl = require("../controllers/viajesCtrl");
const testimonialCtrl = require("../controllers/testimonialesCtrl");

module.exports = function() {
    router.get("/", homeCtrl.homeCtrl);
    router.get("/nosotros", nosotrosCtrl.nosotrosCtrl);
    router.get("/viajes", viajesCtrl.viajesCtrl);
    router.get("/viajes/:id", viajesCtrl.viaje);
    router.get("/testimoniales", testimonialCtrl.testimonialCtrl);
    router.post("/testimoniales", testimonialCtrl.agregar);
    //
    return router;
};