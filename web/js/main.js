var status = 0;

var Entity_Sites = "SITIOS";
var Entity_Markers = "MARCADORES";
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
            if (strUser === '' || strUser.trim === '' || strUser === null)
            {
                setHtmlCmp("lbl_error", "ERROR! Usuario Inválido.");
            }
            else
            {
                firebase.auth().signInWithEmailAndPassword(strUser, strPassword).then(function (result)
                {
                    status = 1;
                    window.location.href = "/mapx";
                }).catch(function (err)
                {
                    console.log(err);
                    cambiarClaseCmp("msg_error", "alert");
                    visibilidadCmp("msg_error", 1);

                    strCodigoError = err.code;
                    strMensajeError = err.message;

                    if (strCodigoError === 'auth/invalid-email')
                    {
                        setHtmlCmp("lbl_error", "ERROR! La dirección de correo electrónico incorrecta.");
                    }
                    else if (strCodigoError === 'auth/user-not-found')
                    {
                        setHtmlCmp("lbl_error", "ERROR! No hay registro de usuario correspondiente a este identificador. " +
                                "El usuario puede haber sido eliminado.");
                    }
                    else if (strCodigoError === 'auth/wrong-password')
                    {
                        setHtmlCmp("lbl_error", "ERROR! La contraseña no es válida o el usuario no tiene una contraseña.");
                    }
                    else if (strCodigoError === 'auth/invalid-api-key')
                    {
                        setHtmlCmp("lbl_error", "ERROR! Su clave de API no es válida.");
                    }
                    else
                    {
                        setHtmlCmp("lbl_error", "ERROR! " + strMensajeError);
                    }
                });
            }
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
