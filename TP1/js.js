/*$(document).ready(function(){
    $('#paragraphe').click(function(){
        $(this).hide();
    });21
});*/

$(document).ready(function(){
    $('#Exercice1').append('<footer></footer>')
    $('#Exercice1 footer').html('&copy; Zeubi footer &copy')
    $('#Exercice1 footer').css("position",'absolute')
        .css('background-color','#E10F95')
        .css('color','black')
        .css('bottom', 0)
        .css('text-align','center')
        .css('width','100%');
});
/*---------------------------------------------------------------------------------------------------------*/

/*$(document).ready(function() {
    let colorHexa = prompt('Saisir une couleur de police');
    let colorBackground = prompt('Saisir une couleur de fond');
    let text = prompt('Saisir le texte');
  
    $('#Exercice2').css('color', '#' + colorHexa)
      .css('background-color', '#' + colorBackground)
      .css('display', 'flex')
      .css('justify-content', 'center')
      .css('align-items', 'center')
      .text(text);
  
  });*/
  

/*---------------------------------------------------------------------------------------------------------*/

$(document).ready(function() {
    let promptText;
    let promptLink;
  
    $('#Exercice3').append('<ul></ul>');
  
    do {
      promptLink = prompt('Saisissez votre lien, tapez FIN pour arrêter');
      if(promptLink != 'FIN') {
        promptText = prompt('Saisir texte du lien');
        $('<li><a href="' + promptLink + '">' + promptText + '</a></li>').appendTo('#Exercice3 ul');
      }
    } while (promptLink != 'FIN');
  });
  