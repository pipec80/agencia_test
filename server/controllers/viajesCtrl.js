const Viaje = require("../models/Viajes");
exports.viajesCtrl = async(req, res) => {
    const viajes = await Viaje.findAll()
    res.render("viajes", {
        pagina: "Proximos viajes",
        viajes,
    });
}

exports.viaje = async(req, res) => {
    const viaje = await Viaje.findByPk(req.params.id)
    res.render("viaje", {
        viaje,
    });
}