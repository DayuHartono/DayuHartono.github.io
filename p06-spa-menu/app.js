
$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".inti").slideToggle("medium");

	$('nav ul li.mati').each(function(index, el) {
		var intiID = el.id.split('_')[1];
		$('.inti#' + intiID).hide();
	});
});

$('nav').delegate('.mati', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.inti:visible').fadeOut('medium', function() {
		$('.inti#' + pilihIsi).fadeIn('medium');
	});

	var $this = $(this);
	$this.removeClass('mati').addClass("hidup");
    $this.siblings().addClass('mati').removeClass('hidup');

    });
});