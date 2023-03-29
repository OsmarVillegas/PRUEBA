import express  from 'express';
import cors from 'cors';
import morgan from 'morgan';
import NoticiasRoutes from './routes/noticias.routes';
import EventosRoutes from './routes/eventos.routes';



const app=express();
//settings
app.set('port', process.env.PORT || 4000);

//middelware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Configuración de CORS
app.use(cors());
//rutas
app.get('/', (req, res)=>{
    res.json({message:'hello world'})

});

app.use('/api/noticias', NoticiasRoutes);
app.use('/api/eventos', EventosRoutes);



export default app;