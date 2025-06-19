function validarCampos() {

    //Capturar os valores informados pelo usuário
    var nome = document.getElementById('nome').value;
    var dono = document.getElementById('dono').value;
    var raca = document.getElementById('raca').value;
    var numero = document.getElementById('numero').value;
    var dia = document.getElementById('dia').value;
    var hora = document.getElementById('hora').value;
    var sexo = document.getElementById('sexo').value;
    var especie = document.getElementById('especie').value;
    var servico = document.getElementById('servico').value;
    //alert(nome + ' - ' + dono + ' - ' +  raca + ' - ' + numero  + ' - ' + dia  + ' - ' + hora  +  ' - '  + sexo  +  ' - ' + especie  + ' - ' + servico);

    erros = [];

    if (titulo == '') {
        erros.push("Informe o nome do bichano!");
    }
    if (autor == '') {
        erros.push("Informe o dono!");
    }
    if (genero == '') {
        erros.push("Informe a raça!");
    }
    if (paginas == '') {
        erros.push("Informe o número para contato!");
    }
    if (paginas == '') {
        erros.push("Informe o dia para agendamento de serviço");
    }

     if (paginas == '') {
        erros.push("Informe a hora para agendamento de serviço");
    }

     if (paginas == '') {
        erros.push("Informe o sexo do bichano");
    }

    if (paginas == '') {
        erros.push("Informe a espécie do bichano");
    }

    if (paginas == '') {
        erros.push("Informe o tipo de serviço");
    }

    if (erros.length > 0) {

        document.getElementById("mensagem").innerHTML = erros.join("<br>");
        //alert(erros.join("\n"));
        return false;
    }

    return true;


}

/*  $nome = $_POST["nome"];
    $dono = $_POST["dono"];
    $raca = $_POST["raca"];
    $numero = $_POST["numero"];
    $link = $_POST["link"];
    $link = $_POST["dia"];
    $link = $_POST["hora"];
    $sexo = $_POST["sexo"];
    $especie = $_POST["especie"];
    $servico = $_POST["servico"];*/