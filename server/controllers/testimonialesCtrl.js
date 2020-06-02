const Testimonial = require("../models/Testimoniales");

exports.testimonialCtrl = async(req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render("testimoniales", {
        pagina: "Testimoniales",
        testimoniales,
    });
}

exports.agregar = async(req, res) => {
    let {
        nombre,
        correo,
        mensaje
    } = req.body;

    let errores = [];
    if (!nombre) {
        errores.push({
            mensaje: "Agrega tu nombre",
        });
    }
    if (!correo) {
        errores.push({
            mensaje: "Agrega tu correo",
        });
    }
    if (!mensaje) {
        errores.push({
            mensaje: "Agrega tu mensaje",
        });
    }
    //
    if (errores.length > 0) {
        const testimoniales = await Testimonial.findAll()
        res.render("testimoniales", {
            pagina: "Testimoniales",
            nombre,
            correo,
            mensaje,
            errores,
            testimoniales,
        });
    } else {
        const testimonial = await Testimonial.create({
            nombre,
            correo,
            mensaje,
        });
        res.redirect("/testimoniales");
    }
}