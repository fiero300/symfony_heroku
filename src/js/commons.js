
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
        alert(error.code);
    });
}