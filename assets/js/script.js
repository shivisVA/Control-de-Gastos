let listaNombreGastos=[];
let listaValorGastos=[];
let listaDescripcion=[];
let gastoActual = -1;

function clickBoton(){

	let nombreGasto= document.getElementById('nombreGasto').value;
	let descripcion=document.getElementById('descripcionGasto').value;
	let valorGasto=document.getElementById('valorGasto').value;
	

	if(Number(valorGasto)>150){
		alert('El gasto ingresado es mayor a $150');

	}

	if (gastoActual === -1) {

        listaNombreGastos.push(nombreGasto);
        listaValorGastos.push(valorGasto);
        listaDescripcion.push(descripcion);

    } else {

        listaNombreGastos[gastoActual] = nombreGasto;
        listaValorGastos[gastoActual] = valorGasto;
        listaDescripcion[gastoActual] = descripcion;
        gastoActual = -1; 
        document.getElementById('botonActualizar').style.display = 'none';
        document.getElementById('botonFormulario').style.display = 'block';

    }
	
	actualizarValorGasto();
}

function actualizarValorGasto(){
	const listaElementos = document.getElementById('listaDeGastos');
	const totalElementos = document.getElementById('totalGastos');
	const descripcionElementos=document.getElementById('descripcionGasto');
	let htmlLista='';
	let totalGastos=0;

	listaNombreGastos.forEach((elemento,posicion)=>{
		const valorGasto = Number(listaValorGastos[posicion]);
		const descripcionElemento= listaDescripcion[posicion];
		htmlLista+= `<li> ${elemento} - Descripcion ${descripcionElemento} - USD ${valorGasto.toFixed(2)}
						<div>
							<button onclick="editarGasto(${posicion});">Editar</button>
							<button onclick="eliminarGasto(${posicion});">Eliminar</button>
						</div>												
					</li>`;
		totalGastos+=Number(valorGasto);
	})

	listaElementos.innerHTML = htmlLista;
	totalElementos.innerHTML = totalGastos.toFixed(2);

	limpiar();
}

function limpiar(){
	document.getElementById('nombreGasto').value='';
	document.getElementById('descripcionGasto').value='';
	document.getElementById('valorGasto').value='';

}

function eliminarGasto(posicion){
	listaNombreGastos.splice(posicion,1);
	listaValorGastos.splice(posicion,1);
	listaDescripcion.splice(posicion,1);

	actualizarValorGasto();
}

function editarGasto(posicion){
	document.getElementById('nombreGasto').value=listaNombreGastos[posicion];
	document.getElementById('descripcionGasto').value=listaDescripcion[posicion];
	document.getElementById('valorGasto').value=listaValorGastos[posicion];
	gastoActual=posicion;
	document.getElementById('botonActualizar').style.display = 'block';
    document.getElementById('botonFormulario').style.display = 'none';
	
}