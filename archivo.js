const fs= require('fs');
const c = require('./curso');

const registro = {
	id:{ 
		demand:true,
		alias:'i'
	}, 
	nombre:{
		demand:true,
		alias:'n'
	}, 
	cedula:{
		demand:true,
		alias:'cc'
	}
}

const argv = require ('yargs')
	  .command('registro','registro de un estudiante',registro)
	  .argv

let cursos = c.cursos;

let crearArchivo = (registro)=>{
	
	let busquedaCurso = cursos.find(function(cursos) {
 	 return cursos.id == argv.id});

	if (busquedaCurso != null) {
	text = 'id curso: ' + argv.id + '\n' +
		   'nombre del curso' + busquedaCurso.nombre +'\n' +
		   'nombre estudiante: '+ argv.nombre + '\n' +
		   'cedula estudiante: ' + argv.cedula + '\n'  


	fs.writeFile('datos.txt' , text , (err) =>{
		if(err) throw (err);
		console.log('se ha creado el archivo')
	});
	}else{
		console.log('el id del curso no coincide con ningun curso ofertado')
	}
}

let ejecutar =() => {
	setTimeout(function(){mostar()}, 100);
	if (argv.id != null){
	crearArchivo(registro);
}
}

let mostar = () =>{
	console.log('id: ' + cursos[0].id);
	console.log('nombre :' + cursos[0].nombre);
	console.log('duracion :' + cursos[0].duracion);
	console.log('valor :' + cursos[0].valor + '\n');

	setTimeout(function() {	
	console.log('id: ' + cursos[1].id);
	console.log('nombre :' + cursos[1].nombre);
	console.log('duracion :' + cursos[1].duracion);
	console.log('valor :' + cursos[1].valor + '\n');
	},2000)

	setTimeout(function() {	
	console.log('id: ' + cursos[2].id);
	console.log('nombre :' + cursos[2].nombre);
	console.log('duracion :' + cursos[2].duracion);
	console.log('valor :' + cursos[2].valor + '\n');
	},4000)	
	}

	ejecutar();



