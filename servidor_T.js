const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());  
app.use(express.json());

let productos = [
    { id: "1", nombre: "Almadana", descripcion: "16 libras", precio: 120 },
    { id: "2", nombre: "Taladro", descripcion: "5000rpm", precio: 250 },
    { id: "3", nombre: "Motosierra", descripcion: "9000rpm", precio: 800 },
];

app.get("/", (req, res) => {
    res.json(productos);
});


app.post("/productos", (req, res) => {
    const producto = req.body; 

    if (productos.some(p => p.id === producto.id)) {
        return res.json({ error: "El producto ya existe" });
    }

    
    productos.push(producto); 
    res.json("Producto guardado" );
});


app.put("/productos/:id", (req, res) => {
    const id = req.params.id;
    const nuevoProducto = req.body;

    const index = productos.findIndex(p => p.id === id);

    if (index !== -1) {
        
        productos[index] = { ...productos[index], ...nuevoProducto, id };
        res.json("Producto actualizado");
    } else {
        res.json("Producto no encontrado");
    }
});


app.delete("/productos/:id", (req, res) => {
    const id = req.params.id; // ID en formato string
    const index = productos.findIndex(p => p.id === id); // Comparación correcta

    if (index !== -1) {
        productos.splice(index, 1);
        res.json("Producto eliminado");
    } else {
        res.json("Producto no encontrado");
    }
});

app.listen(3000, () => {
    console.log("El servidor está corriendo en el puerto 3000");
});