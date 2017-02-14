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
    console.log("iniciarSesion");
    var strUser = $("#txt_usuario").val();
    var strPassword = $("#txt_clave").val();

    console.log(strUser);
    console.log(strPassword);

    try
    {
        alert("Antes-> " + firebase.auth().currentUser);
        firebase.auth().signOut();
        alert("Despues-> " + firebase.auth().currentUser);
        
        if (!firebase.auth().currentUser)
        {
            firebase.auth().signInWithEmailAndPassword(strUser, strPassword).then(function (result)
            {
                window.location.href = "/mapx";
            }).catch(function (err)
            {
                console.log("ERROR-> " + err.message);
            });
        }
        else
        {
            firebase.auth().signOut();
            alert("Cerrar Sesión");
        }
    }
    catch (e)
    {
        console.log(e);
    }

}

document.getElementById("btnSignIn").addEventListener('click', iniciarSesion, false);
