function Show () {
    document.getElementById("comment").style.display = "block";
}

function Hide () {
    document.getElementById("comment").style.display = "none";
}

function Show_Hide () {
    const comment = document.getElementById("comment");

    if(comment.style.display == "none") {
        Show();
        document.getElementById("button").value = "Ocultar"
    }
    else {
        Hide();
        document.getElementById("button").value = "Mostrar más comentarios"
    }
}