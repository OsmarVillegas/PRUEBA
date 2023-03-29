import { Router } from "express";
import * as eventosCtrl from "../controllers/Eventos.controllers";

const router= Router();


router.post('/',eventosCtrl.createEventos);

router.get('/', eventosCtrl.findAllEventos);

router.get('/:id',eventosCtrl.findOneEvento);

router.delete('/:id',eventosCtrl.deleteEvento);

router.put('/:id',eventosCtrl.updateEvento);



export default router;