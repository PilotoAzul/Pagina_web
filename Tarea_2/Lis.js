
 const inputTarea = document.getElementById('tarea');
 const botonAgregar = document.getElementById('agregar');
 const listaTareas = document.getElementById('lista');

 botonAgregar.addEventListener('click', () => {
     const texto = inputTarea.value.trim(); 

     if (texto !== "") {

         const nuevaTarea = document.createElement('li');
         nuevaTarea.textContent = texto;
         const botonEliminar = document.createElement('button');
         botonEliminar.textContent = 'Eliminar';
         botonEliminar.addEventListener('click', () => {
             listaTareas.removeChild(nuevaTarea);
         });
         nuevaTarea.appendChild(botonEliminar);
         listaTareas.appendChild(nuevaTarea);
         inputTarea.value = "";
     } else {
         alert("Por favor, escribe una tarea.");
     }
 });
 
 inputTarea.addEventListener('keypress', (e) => {
     if (e.key === 'Enter') {
         botonAgregar.click(); 
     }
 });