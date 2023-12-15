$(document).ready(function () {
    // générateur de MDP ????????????? le seule truc qui fonctionne ???????????????
    let aleatoire = ["4,5,6,9,8,2"]; 
    $('#genererPassword').on("click", function(){
        $('#password,#password2').val(aleatoire);
       });
    
    //fonction afficher le mot de passe ??????????????? mais ne le recache pas :)
    $('button[name="voirPassword"]').on("click",function(){
        $('#password,#password2').attr('type', 'text')
        
    });

    //changer la couleur de la div ?????????????????? ne fonctionne pas??????????
    $('#couleur').on('click',function(){
        $('form-group').css('input[name="color"');
    });
    
    //envoi Ajax  ??????????????????????? ne fonctionne pas non plus ??????????
    
    $("form-group").submit(function () {
        let formData = {
          email: $("#email").val(),
          password: $("#password").val(),
          password2: $("#password2").val(),
        };
    
        $.ajax({
          type: "POST",
          url: "ajax.php",
          
        })
    
})}
   );
//fonction constructeur
function Connexion (email,mdp,couleur){
    this.email = email,
    this.mdp = mdp,
    this.couleur = couleur,
    this.utilisateur = function() {
        return this.email + this.mdp + this.couleur;
    };
};