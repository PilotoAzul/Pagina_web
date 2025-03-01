const express = require("express")
const cors = require("cors")
const app = express()
const mysql = require("mysql")
app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
    host:"db4free.net",
    user:"estudiantesweb",
    password:"admin12345",
    database:"cursoweb",
    port:3306
})

connection.connect (err=> {
    if(err) throw err;
    console.log("conectado a mysql")

});


app.get("/",(req,res)=>{
    res.send("servidor only")
});
app.listen(3000, ()=>{
    console.log("el servidor corriendo por el puerto 3000");

})

app.post("/adddata", (req, res) => {
    const { name, last_name, identification, email, phone } = req.body;
    
    connection.query("INSERT INTO student (name, last_name, identification, email, phone) VALUES (?,?,?,?,?)",
        [name,last_name, identification, email, phone],(err,result) =>{

        }
    )
 res.send("cliente agregado")

});


app.get("/lis", (req, res) => {
    connection.query("SELECT * FROM student", (err, result) => {
      if (err) {
      }
      res.json(result);
    });
    
  });

  app.delete("/borrar", (req,res) =>{
    connection.query("DELETE * WHERE id = ?", [id], (err, result) => {
        if (err){

        }
        if (result.affectedRows === 0){

        }
        res.json("Estudiante eliminado")
    })
  })


  app.put("/actualizar-email", (req, res) => {  
    const id = req.body.id;       
    const nuevoEmail = req.body.email;  

    connection.query("UPDATE student SET email = ? WHERE id = ?", [nuevoEmail, id], (err, result) => {  
        if (err) {  
        }  
        
        if (result.affectedRows === 0) {  
        }  
        
        res.json( "Email actualizado correctamente" );  
    });  
});  


app.get("/usuario", (req, res) => {  
    const identification = req.body.identification;

    connection.query("SELECT * FROM student WHERE identification = ?", [identification], (err, result) => {  
        if (err) {  
        }  

        if (result.length === 0) {  
        }  

        res.send(result);
    });  
    




});  








