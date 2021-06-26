function categoria(){
    var idade = parseInt(document.getElementById("campoIdade").value);

    if(idade >=0 && idade <=4){
        document.getElementById("imgCategoria").src = 
        "https://cdn.awsli.com.br/300x300/1569/1569844/produto/58406822c70eb688e8.jpg";
        document.getElementById("resultado").innerHTML =
        "Com base em sua idade você irá para a categoria: Categoria Baby";
    }
    else if(idade >=5 && idade <=7){
        document.getElementById("imgCategoria").src = 
        "https://jtbazar.com.br/wp-content/uploads/2020/11/nadoinfantil-300x300.jpg";
        document.getElementById("resultado").innerHTML =
        "Com base em sua idade você irá para a categoria: Categoria Infantil A";
    }
    else if(idade >=8 && idade <=11){
        document.getElementById("imgCategoria").src = 
        "https://cdn.awsli.com.br/300x300/1569/1569844/produto/58406849903c943e11.jpg";
        document.getElementById("resultado").innerHTML = 
        "Com base em sua idade você irá para a categoria: Categoria Infantil B";
    }
    else if(idade >=12 && idade <=13){
        document.getElementById("imgCategoria").src = 
        "https://nitrosite-casa.s3.amazonaws.com/conteudo/natacao-condominio.jpg";
        document.getElementById("resultado").innerHTML = 
        "Com base em sua idade você irá para a categoria: Categoria Juvenil A";
    }
    else if(idade >=14 && idade <=17){
        document.getElementById("imgCategoria").src =
        "https://lh3.googleusercontent.com/proxy/yKODyHlhXpmhLPsV1xJbdNzhMekB3eog5S7P7fHIzOPSuVZpTOwpzhqJTgkGfgf6YkyNGBh5RiaP_KbGUFLpCVwdYEeqIcCcFvZF6uiuU0YwzTTu2L9S8yPMxLPfA3_n-Q";
        document.getElementById("resultado").innerHTML =
        "Com base em sua idade você irá para a categoria: Categoria Juvenil B";
    }
    else {
        document.getElementById("imgCategoria").src =
        "https://www.acquar1.com.br/wp-content/uploads/2021/02/natacao_adulto-300x300.jpg";
        document.getElementById("resultado").innerHTML = 
        "Com base em sua idade você irá para a categoria: Categoria Adulto";
    }
}

function limpar(){
    document.getElementById("resultado").innerHTML = 
    "Com base em sua idade você irá para a categoria: ";
 }