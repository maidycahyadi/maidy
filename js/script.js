$('.page-scroll').on('click', function(){
    // ambil isi href
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);


    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo' );
   

});

// parallax

// about

$(window).on('load', function(){
	$('.pkiri').addClass('pmuncul');
	$('.pkanan').addClass('pmuncul');
})

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();


	// jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});



	// portofolio
	if (wScroll > $('.portofolio').offset().top -250 ) {
		$('.portofolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portofolio .thumbnail').eq(i).addClass('muncul');
			}, 100 * (i+1));

		});


		
	}


});