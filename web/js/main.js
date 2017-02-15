var status = 0;

var user_id                 = "";
var Entity_Sites            = "SITIOS";
var Entity_Markers          = "MARCADORES";
var Entity_Markers_by_Sites = "MARCADORES_X_SITIO";

var config = {
    apiKey: "AIzaSyCg_gZRScHBxqdjTpKqmcBTyaSp0ct5Hvo",
    authDomain: "posicionamiento-d0b1b.firebaseapp.com",
    databaseURL: "https://posicionamiento-d0b1b.firebaseio.com",
    storageBucket: "posicionamiento-d0b1b.appspot.com",
    messagingSenderId: "748730235011"
};
firebase.initializeApp(config);


/**
 * Funcion     : iniciarSesion().
 * Descripcion : Inicia la sesion del usuario.
 * Versión     : 1.0 - 11/02/2017 -> "Creacion".
 * @author Alejandro Domínguez Vargas
 */
function iniciarSesion()
{
    status = 0;
    var strUser = $("#txt_usuario").val();
    var strPassword = $("#txt_clave").val();

    try
    {
        if (!firebase.auth().currentUser)
        {
            firebase.auth().signInWithEmailAndPassword(strUser, strPassword).then(function (result)
            {
                status = 1;
                user_id = result['uid'];
                window.location.href = "/mapx";
            }).catch(function (err)
            {
                console.log("ERROR-> " + err.message);
            });
        }
        else
        {
            firebase.auth().signOut();
        }
    }
    catch (e)
    {
        console.log(e);
    }
}

document.getElementById("btnSignIn").addEventListener('click', iniciarSesion, false);
