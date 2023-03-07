import {} from "./jquery.js"
/*-------------------------------COMPTEUR DE CLIQUES---------------------------- */
var compteur = 0;
$('h3').html(compteur);


$('#buton').click(function(){
    compteur++;
    $('h3').html(compteur);
    
})
/*-----------------------------------FORMULAIRE--------------------------------*/


$('#envoyer').click(function(){
  

    var nom = "Nom : ";
    var prenom = "Prénom : ";
    var date = " <br> Date de naissance : "; 
	nom += $("input:text:eq(0)").val();
	prenom += $("input:text:eq(1)").val();
	date += $("input:text:eq(2)").val();

    $('p').html(nom);
    $('p1').html(prenom);
    $('p2').html(date);
})


/*---------------------------------Les couleurs--------------------------------*/



$('#random').click(function(){
    $('body').css('background-color','red')

})
