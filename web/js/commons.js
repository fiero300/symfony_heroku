
/**
 * Funcion     : visibilidadCmp().
 * Descripcion : Elimina u Otorga la Visibilidad de un componente o listado de compomentes.
 * Versión     : 1.0 - 11/02/2017 -> "Creacion".
 * 
 * @param {object}  objCmp  (string)-> ID del componete.
 *                          (array) -> Listado de ID's de componentes.
 * @param {integer} intModo  -> Identificador de visilidad: 0=Oculto, 1=Visible
 * 
 * @author Alejandro Domínguez Vargas
 */
function visibilidadCmp(objCmp, intModo)
{
    var strModo = intModo === 0 ? "none" : "block";

    if (Array.isArray(objCmp))
    {
        objCmp.forEach(function (value)
        {
            $("#" + value).attr("style", "display:" + strModo);
        });
    }
    else
    {
        $("#" + objCmp).attr("style", "display:" + strModo);
    }
}

/**
 * Funcion     : cambiarClaseCmp().
 * Descripcion : Cambia el nombre de la clase al o los componentes.
 * Versión     : 1.0 - 11/02/2017 -> "Creacion".
 * 
 * @param {object}  objCmp  (string)-> ID del componete.
 *                          (array) -> Listado de ID's de componentes.
 * @param {string} strClassName     -> Nombre de la Clase a aplicar al o los componentes.
 * @author Alejandro Domínguez Vargas
 */
function cambiarClaseCmp(objCmp, strClassName)
{
    if (Array.isArray(objCmp))
    {
        objCmp.forEach(function (value)
        {
            $("#" + value).attr("class", strClassName);
        });
    }
    else
    {
        $("#" + objCmp).attr("class", strClassName);
    }
}

/**
 * Funcion     : setHtmlCmp().
 * Descripcion : Establece el contenido HTML de uno o varios componentes a un mismo valor.
 * Versión     : 1.0 - 11/02/2017 -> "Creacion".
 * 
 * @param {object}  objCmp  (string)-> ID del componete.
 *                          (array) -> Listado de ID's de componentes.
 * @param {string} strHtml     -> Contenido HTML a establecer.
 * @author Alejandro Domínguez Vargas
 */
function setHtmlCmp(objCmp, strHtml)
{
    if (Array.isArray(objCmp))
    {
        objCmp.forEach(function (value)
        {
            $("#" + value).html(strHtml);
        });
    }
    else
    {
        $("#" + objCmp).html(strHtml);
    }
}

/**
 * Funcion     : iniciarSesion().
 * Descripcion : Inicia la sesion del usuario.
 * Versión     : 1.0 - 11/02/2017 -> "Creacion".
 * @author Alejandro Domínguez Vargas
 */
function iniciarSesion(strUser, strPassword)
{
    console.log("iniciarSesion");
	init();
	firebase.auth().signInWithEmailAndPassword(strUser, strPassword).then(function (result)
    {
		/*
		resultado = "";
		for (var i in result) 
		{
			if (result.hasOwnProperty(i)) 
			{
				resultado +=  i + " = " + result[i] + "\n";
			}
		}
		alert(resultado);
		*/
        console.log("OK");
		window.location.href = "/mapx";
        //window.location = "file:///C:/Users/since_000/Desktop/proy/maps.html";
    }).catch(function (err)
	{
        console.log("ERROR-> " + err.code);
	});
}

function init()
{
    console.log("init");
	var config = {
				apiKey: "AIzaSyCg_gZRScHBxqdjTpKqmcBTyaSp0ct5Hvo",
				authDomain: "posicionamiento-d0b1b.firebaseapp.com",
				databaseURL: "https://posicionamiento-d0b1b.firebaseio.com",
				storageBucket: "posicionamiento-d0b1b.appspot.com",
				messagingSenderId: "748730235011"
			};
	firebase.initializeApp(config);
}
/**
 * Funcion     : cerrarSesion().
 * Descripcion : Cierra la sesion actual del usuario si la hay.
 * Versión     : 1.0 - 11/02/2017 -> "Creacion".
 * @author Alejandro Domínguez Vargas
 */
function cerrarSesion()
{
    firebase.auth().signOut().then(function ()
    {
        document.location.href="/";
    }, function (error)
    {
        console.log(error.code);
    });
}