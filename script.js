// creo los arrays que contienen los centros de atencion para cada uno de las regiones
var centrosDeAtencion_1 = new Array ("CNEL. PRINGLES", "RIO COLORADO", "CARHUE"); // Bahia Blanca
var centrosDeAtencion_2 = new Array ("SAENZ PENA", "SAN MARTIN", "CHARATA"); // Chaco

function cambiar_Centros() 
{
	// tomamos la regional elegida por el usuario
	var regional
	regional = document.getElementById('Regionales').value
	mis_reg = regional

	// verificamos que la regional este definida
	if(mis_reg!=0)
	{
		// en caso de estar definida obtengo los centros distintivos de la region seleccionada
		mis_cda = eval("centrosDeAtencion_" + mis_reg)

		// calculo la cantidad de centros ya ubicados en el array
		num_centros = mis_cda.length
		// coloco el numero de centros en el select
		document.formulario1.CDA.length = num_centros

		// mientras haya centros de atencion en el array los introduzco en el select..
		for (i=0; i<num_centros; i++)
		{
			document.formulario1.CDA.options[i].value = mis_cda[i]
			document.formulario1.CDA.options[i].text = mis_cda[i]
		}
	}
	else
	{
		// sino se selecciono niguna regional, elimino los centros del select y hago saber al usuario
		// que aun no selecciono nada...
		
		document.formulario1.CDA.options.length = 1 // Cambio la longitud de las opciones en 1

		document.formulario1.CDA.options[0].value = " "
		document.formulario1.CDA.options[0].text = "Sin asignar" // Mensaje para el usuario
	}

}