import Eventos from '../models/Eventos';



export const findAllEventos = async(req,res)=>{
     try {
        const eventos = await Eventos.find()
        res.json(eventos);
     } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al deovolver los eventos'})
     }
}


export const  createEventos = async(req,res)=>{
    if(!req.body.nameEventoEsp){   
        return res.status(400).json({message: 'Nombre del evento es requerido'})
     }
    try {
        const newEventos = new Eventos({
            nameEventoEsp:req.body.nameEventoEsp,
            nameEventoEng:req.body.nameEventoEng,
            contenidoEsp:req.body.contenidoEsp,
            contenidoEng:req.body.contenidoEng,
            fechaInicio:req.body.fechaInicio,
            fechaFin:req.body.fechaFin,
            visibilidad:req.body.visibilidad,
            img:req.body.img,
            creador:req.body.creador
        
        });
        const  eventoSaved = await newEventos.save();
        
        res.json(eventoSaved); 
    } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al crear el evento'})
    }
}

export const findOneEvento= async(req ,res)=>{

    const {id}= req.params;
    try {
       
   
    const eventos = await Eventos.findById(id);
    if(!eventos)
    return res.
    status(404)
    .json({message:'el evento con es id no existe'});

    
    res.json(eventos);
    } catch (error) {
        
        res.status(500).json({message: error.message||'Eror con ese id'})
    }


}

export const deleteEvento= async(req,res)=>{
    const {id}= req.params;
   try {
    const data= await Eventos.findByIdAndDelete(id);

    res.json({
        message: 'el evento ha sido eliminado'
    });
   } catch (error) {
    res.status(500).json({message:'Error, el evento no fue liminado'});
   }

}

export const updateEvento = async(req,res)=>{

   try {
    await Eventos.findByIdAndUpdate(req.params.id,req.body,{
        useFindAndModify:false
       });
    
       res.json({message: "evento actualizado"});
    
   } catch (error) {
    res.status(500).json({message:'No se puedo actualizar'});
   }
}