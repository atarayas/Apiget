const express = require ('express');
const app = express();

categorias = [
    {
        "nombre" : "Cocina",
        "articulos" : [
            "Olla Grande",
            "Olla Pequeña",
            "Olla Mediana",
            "Juego de cucharas",
            "Cucharón para sopa",
            "Juego de cubiertos"
        ]
    },

    {
        "nombre" : "Ferretería",
        "articulos" : [
            "Serrucho",
            "Martillo",
            "Taladro"
        ]
    },
    {
        "nombre" : "Audio y video",
        "articulos" : [
            "Pantalla LED 32",
            "Parlante Bluethoot",
            "Audifonos"
        ]
    }
]

app.use ((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept, Authorization");
    if (req.method==='OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');      
        return res.status(200).json({});
    }
    next();
})


app.get( '/', (req, res) => {
    res.send('Hola a todos!');
});

app.get('/api/categorias', (req, res)=> {
    res.send(categorias);
})

app.listen( 2500, ()=> console.log( "Servidor en 2500")  );