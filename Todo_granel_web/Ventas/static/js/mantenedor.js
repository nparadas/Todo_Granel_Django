//inicio funcion
function mostrar(){

    document.getElementById('md-form-create').style.display='block';
    
}


//inicio mostrar editar
function mostrareditar(){
    
    document.getElementById('md-form-edit').style.display='block';

}


//mostar eliminar
function mostrareliminar(){
    
    document.getElementById('mod-warning').style.display='block';

}


//inicio funcion ocultar agregar
function ocultar(){
    limpiar()
    document.getElementById('md-form-create').style.display='none';
    
}


//inicio funcion ocultar eliminar
function ocultar2(){

    document.getElementById('mod-warning').style.display='none';
    
}

//inicio funcion ocultar editar
function ocultar3(){
    limpiar();
    document.getElementById('md-form-edit').style.display='none';
   
}
//inicio funcion alerta
function alerta(){
    alert("¡se agrego correctamente!")
}


//inicio funcion alerta eliminacion
function alerta2(){
    document.getElementById('mod-warning').style.display='none';
    alert("¡se elimino correctamente!")

}


//inicio funcion
function soloLetras(e){
    key=e.keyCode || e.which;
    teclado=String.fromCharCode(key).toLowerCase();
    letras="abcdefghijklmnñopqrstuvwxyz"
    especiales="8-37-38-46-164"
    teclado_especial=false;
    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
            break;
        }
   
        if(letras.indexOf(teclado)==-1 && !teclado_especial){
            return false;
        }
    }
}
//inicio funcion
function soloNumeros(e){
    key=e.keyCode || e.which;
    teclado=String.fromCharCode(key).toLowerCase();
    letras="0123456789"
    especiales="8-37-38-46-164"
    teclado_especial=false;
    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
            break;
        }
   
        if(letras.indexOf(teclado)==-1 && !teclado_especial){
            return false;
        }
    }
}
function limpiar() {
    document.getElementById("idProducto").value = "";
    document.getElementById("nombreProducto").value = "";
    document.getElementById("selectKilos").selectedIndex = 0;
    document.getElementById("precio").value = "";
}