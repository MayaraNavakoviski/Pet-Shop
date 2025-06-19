 <?php

    require_once("util/Conexao.php");

    //Pegar o ID do Animal
    if (! isset($_GET['id'])) {
        echo "ID do animal não informado!";
        echo "<a href='index.php'>Voltar</a>";
        exit;
    }

    $id = $_GET['id'];

    //Executar o SQL para excluir o animal
    $sql = "DELETE FROM Animal WHERE id = ?";
    $con = Conexao::getConexao();
    $stm = $con->prepare($sql);
    $stm->execute([$id]);

    //Redirecionar para o index.php
    header("location: index.php");


