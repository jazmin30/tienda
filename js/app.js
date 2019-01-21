$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $('.parallax').parallax();
    $('.slider').slider();
    $('.carousel').carousel({dist:0, shift:30});
	$('.fixed-action-btn').floatingActionButton();
	$('.materialboxed').materialbox();

	$('input.autocomplete').autocomplete({
      data: {
        "Álvaro Obregón": null,
		"Azcapotzalco": null,
		"Benito Juárez": null,
		"Coyoacán": null,
		"Cuajimalpa": null,
		"Cuauhtémoc": null,
		"Gustavo A. Madero": null,
		"Iztacalco": null,
        "Iztapalapa": null,
		"Magdalena Contreras": null,
		"Miguel Hidalgo": null,
		"Milpa Alta": null,
		"Tláhuac": null,
		"Tlalpan": null,
		"Venustiano Carranza": null,
		"Xochimilco": null
      },
    });
  });