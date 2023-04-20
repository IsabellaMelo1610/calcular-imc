function resultado(){
    var alt = document.getElementById("alt").value;
    var peso = document.getElementById("peso").value;

    var total = parseInt(peso / (alt **2));

    document.getElementById("total").innerHTML = "O resultado é: " + total
}