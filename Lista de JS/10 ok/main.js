function primo(num) {
    if(num!=1){
        for (var i = 2; i < num; i++)
        if (num % i == 0) return false;
    return num !== 1;    
    }
}

function verPrimo() {
    var num = document.getElementById("name").value;
    var resl = "";

    if(!isNaN(num)){
        if (primo(num)) {
            resl = "Número " + (num) + " Primo";
        }
        else {
            resl = "Número " + (num) + " Não é Primo"
        }
        document.getElementById("mensagem").innerHTML = resl;
    }
}