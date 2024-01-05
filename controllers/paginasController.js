import { where } from "sequelize"
import { Viaje } from "../models/Viaje.js"

const paginaInicio = (req,res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    })
}

const paginaNosotros = (req,res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req,res) => {

    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    })
}

const paginaDetallesViajes = async (req,res) => {
    const { viaje } = req.params;

    try {
        const resultado = await Viaje.findOne({where : {slug : viaje}});
        res.render('viaje',{
            pagina:'Informacion Viaje',
            resultado
        })
    } catch (error) {
        console.log(error)
    }
}

const paginaTestimoniales = (req,res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })
}


export{
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetallesViajes
}