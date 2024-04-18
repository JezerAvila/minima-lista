function agregarTarea() {
    var inputTarea = document.getElementById("inputTarea");
    var tarea = inputTarea.value.trim();

    if (tarea !== "") {
        var listaTareas = document.getElementById("listaTareas");
        var nuevaTarea = document.createElement("li");
        
        // Crear checkbox para marcar como completada
        var checkboxCompletada = document.createElement("input");
        checkboxCompletada.type = "checkbox";
        checkboxCompletada.addEventListener("change", function() {
            // Marcar tarea como completada cuando el checkbox cambia de estado
            if (this.checked) {
                nuevaTarea.classList.add("completada");
            } else {
                nuevaTarea.classList.remove("completada");
            }
        });

        // Crear botón para eliminar tarea
        var botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function() {
            // Eliminar la tarea cuando se haga clic en el botón
            listaTareas.removeChild(nuevaTarea);
        });

        nuevaTarea.textContent = tarea;
        nuevaTarea.appendChild(checkboxCompletada);
        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        inputTarea.value = "";
    } else {
        alert("Por favor, ingresa una tarea válida.");
    }
}
