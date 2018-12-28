function openKontakt(){
	window.location.href = 'kontakt.html';
}

function openCenovnik(){
	window.location.href = 'cenovnik.html';
}

function openGalerija(){
	window.location.href = 'galerija.html';
}

function openGalerijaSvecanosti(){
	window.location.href = 'galerija.html#svecanosti';
}

function openGalerijaObrada(){
	window.location.href = 'galerija.html#obrada';
}

function openPocetna(){
	window.location.href = 'index.html';
}

function openPorudzbine(){
	window.location.href = 'porudzbine.html';
}


function openCenovnik(){
	window.location.href = 'cenovnik.html';
}


$(document).ready(function() {
    var $lightbox = $('#lightbox');
    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 200,
                'maxHeight': $(window).height() - 200
            };
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
});