$(document).ready(function(){
    $(window).scroll(function(){
         if(this.scrollY > 20){
    $('.navbar').addClass("sticky");

}else{

    $('.navbar').removeClass("sticky");

}

});

//typing
var typed= new Typed (".typing",{
    strings: ["Developer","Designer","FreeLancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


var typed= new Typed (".typing-2",{
    strings: ["Developer","Designer","FreeLancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

//owl carousel script

$('.carousel').owlcarousel({

});


});

