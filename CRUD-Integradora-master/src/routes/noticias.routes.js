import { Router } from "express";
import * as noticiasCtrl from "../controllers/Noticias.controllers";

const router= Router();


router.post('/',noticiasCtrl.createNoticias);

router.get('/', noticiasCtrl.findAllNoticias);

router.get('/:id',noticiasCtrl.findOneNoticia);

router.delete('/:id',noticiasCtrl.deleteNoticia);

router.put('/:id',noticiasCtrl.updateNoticia);



export default router;