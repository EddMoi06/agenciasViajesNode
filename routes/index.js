import express from 'express';
import { paginaInicio, 
        paginaNosotros, 
        paginaViajes,  
        paginaTestimoniales,
        paginaDetallesViajes
} from '../controllers/paginasController.js';

const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:viaje', paginaDetallesViajes);
router.get('/testimoniales', paginaTestimoniales);


export default router