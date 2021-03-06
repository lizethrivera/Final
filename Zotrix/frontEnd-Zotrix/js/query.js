$(document).ready(function(){
    $('#show').mousedown(function(){
        $('#contraseña-login').removeAttr('type');
        $('#show').addClass('fa-eye-slash').removeClass('fa-eye');
    });

    $('#show').mouseup(function(){
        $('#contraseña-login').attr('type','password');
        $('#show').addClass('fa-eye').removeClass('fa-eye-slash');
    });
});

jQuery(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

$(document).ready(function(){
    $('#showCE').mousedown(function(){
        console.log("Entro");
        $('#contraseñaEmpresa').removeAttr('type');
        $('#showC').addClass('fa-eye-slash').removeClass('fa-eye');
    });

    $('#showCE').mouseup(function(){
        $('#contraseñaEmpresa').attr('type','password');
        $('#showC').addClass('fa-eye').removeClass('fa-eye-slash');
    });
});


$(document).ready(function(){
    $('#showC').mousedown(function(){
        $('#contraseñaUsuario').removeAttr('type');
        $('#showC').addClass('fa-eye-slash').removeClass('fa-eye');
    });

    $('#showC').mouseup(function(){
        $('#contraseñaUsuario').attr('type','password');
        $('#showC').addClass('fa-eye').removeClass('fa-eye-slash');
    });
});

$('#input-search').hide();

function mostrarOcultarBusqueda(){
	console.log("Lo tengo");
	//var togg= document.getElementById("buton").title;

	if ( $('#lupa').hasClass('fa-search') ) { 
		console.log("Entro");
		$('#input-search').show();
		$('#lupa').removeClass('fa-search');
		$('#lupa').addClass('fas fa-search-minus');
	}else{
		if ( $('#lupa').hasClass('fa-search-minus') ) { 
			console.log("asd");
			$('#input-search').hide();
			//console.log(togg);
			//togg= document.getElementById("buton").title = "Agregar Sucursal";
			//console.log(togg);
			$('#lupa').removeClass('fas fa-search-minus');
			$('#lupa').addClass('fas fa-search');
	}
}
}


$(document).ready(function() {    
    $('#example').DataTable({
    //para cambiar el lenguaje a español
        "language": {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
                },
                "sProcessing":"Procesando...",
            }
    });     
});

$('#cancelar').hide();
$('#infoSucursales').hide();
//$('#guardarSucursal').hide();

function mostrarOcultarContenido(){
	console.log("Lo tengo");
	//var togg= document.getElementById("buton").title;

	if ( $('#agregar').hasClass('nuevaSucur') ) { 
		console.log("Entro");
		$('#infoSucursales').show();
		$('#agregar').removeClass('nuevaSucur');
		$('#agregar').addClass('guardar');
		$('#cancelar').show();
        $("#agregar").html('Cancelar');
	}else{
		if ( $('#agregar').hasClass('guardar') ) { 
			console.log("asd");
			$('#cancelar').hide();
			$('#infoSucursales').hide();
			cancelar();
			//console.log(togg);
			//togg= document.getElementById("buton").title = "Agregar Sucursal";
			//console.log(togg);
			$('#agregar').removeClass('guardar');
            $('#agregar').addClass('nuevaSucur');
            $("#agregar").html('Agregar');
	}
}
}

$('#divPromocion').hide();
function promo(){
	console.log("Si estoy");

	if(document.getElementById('customSwitch2').checked == true){
		$('#divPromocion').show();
	}else{
		$('#divPromocion').hide();
	}
}

function cancelar(){
	$('#cancelar').hide();
	$('#infoSucursales').hide();
	$('#agregar').removeClass('guardar');
	$('#agregar').addClass('nuevaSucur');
	$("#agregar").html('Editar');
}


function mostrarOcultarPromocion(){


    if ( $('#nuevoSucursal').hasClass('agregar') ) { 
		console.log("Entro");
		$('#info-Bunch').show();
		$('#nuevoSucursal').removeClass('agregar');
        $('#nuevoSucursal').addClass('cancelar');
	}else{
		if ( $('#nuevoSucursal').hasClass('cancelar') ) { 
			console.log("asd");
			$('#info-Bunch').hide();
			//console.log(togg);
			//togg= document.getElementById("buton").title = "Agregar Sucursal";
			//console.log(togg);
			$('#nuevoSucursal').removeClass('cancelar');
            $('#nuevoSucursal').addClass('agregar');
	}
}
}


function ocultarPromocion(){
    if ( $('#cerrarDiv').hasClass('cerrar') ) { 
        console.log("asd");
        $('#info-Bunch').hide();
    }
}


$(document).ready(function(){
	
	$(".largeGrid").click(function(){											
    $(this).find('a').addClass('active');
    $('.smallGrid a').removeClass('active');
    
    $('.product').addClass('large').each(function(){											
		});						
		setTimeout(function(){
			$('.info-large').show();	
		}, 200);
		setTimeout(function(){

			$('.view_gallery').trigger("click");	
		}, 400);								
		
		return false;				
	});
	
	$(".smallGrid").click(function(){		        
    $(this).find('a').addClass('active');
    $('.largeGrid a').removeClass('active');
    
		$('div.product').removeClass('large');
		$(".make3D").removeClass('animate');	
    $('.info-large').fadeOut("fast");
		setTimeout(function(){								
				$('div.flip-back').trigger("click");
		}, 400);
		return false;
	});		
	
	$(".smallGrid").click(function(){
		$('.product').removeClass('large');			
		return false;
	});
  
  $('.colors-large a').click(function(){return false;});
	
	
	$('.product').each(function(i, el){					

		// Lift card and show stats on Mouseover
		$(el).find('.make3D').hover(function(){
				$(this).parent().css('z-index', "20");
				$(this).addClass('animate');
				$(this).find('div.carouselNext, div.carouselPrev').addClass('visible');			
			 }, function(){
				$(this).removeClass('animate');			
				$(this).parent().css('z-index', "1");
				$(this).find('div.carouselNext, div.carouselPrev').removeClass('visible');
		});	
		
		// Flip card to the back side
		$(el).find('.view_gallery').click(function(){	
			
			$(el).find('div.carouselNext, div.carouselPrev').removeClass('visible');
			$(el).find('.make3D').addClass('flip-10');			
			setTimeout(function(){					
			$(el).find('.make3D').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
					$(el).find('.product-front, .product-front div.shadow').hide();															
				});
			}, 50);
			
			setTimeout(function(){
				$(el).find('.make3D').removeClass('flip90').addClass('flip190');
				$(el).find('.product-back').show().find('div.shadow').show().fadeTo( 90 , 0);
				setTimeout(function(){				
					$(el).find('.make3D').removeClass('flip190').addClass('flip180').find('div.shadow').hide();						
					setTimeout(function(){
						$(el).find('.make3D').css('transition', '100ms ease-out');			
						$(el).find('.cx, .cy').addClass('s1');
						setTimeout(function(){$(el).find('.cx, .cy').addClass('s2');}, 100);
						setTimeout(function(){$(el).find('.cx, .cy').addClass('s3');}, 200);				
						$(el).find('div.carouselNext, div.carouselPrev').addClass('visible');				
					}, 100);
				}, 100);			
			}, 150);			
		});			
		
		// Flip card back to the front side
		$(el).find('.flip-back').click(function(){		
			
			$(el).find('.make3D').removeClass('flip180').addClass('flip190');
			setTimeout(function(){
				$(el).find('.make3D').removeClass('flip190').addClass('flip90');
		
				$(el).find('.product-back div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
					$(el).find('.product-back, .product-back div.shadow').hide();
					$(el).find('.product-front, .product-front div.shadow').show();
				});
			}, 50);
			
			setTimeout(function(){
				$(el).find('.make3D').removeClass('flip90').addClass('flip-10');
				$(el).find('.product-front div.shadow').show().fadeTo( 100 , 0);
				setTimeout(function(){						
					$(el).find('.product-front div.shadow').hide();
					$(el).find('.make3D').removeClass('flip-10').css('transition', '100ms ease-out');		
					$(el).find('.cx, .cy').removeClass('s1 s2 s3');			
				}, 100);			
			}, 150);			
			
		});				
	
		makeCarousel(el);
	});
	
	$('.add-cart-large').each(function(i, el){
		$(el).click(function(){
			var carousel = $(this).parent().parent().find(".carousel-container");
			var img = carousel.find('img').eq(carousel.attr("rel"))[0];						
			var position = $(img).offset();	

			var productName = $(this).parent().find('h4').get(0).innerHTML;				
	
			$("body").append('<div class="floating-cart"></div>');		
			var cart = $('div.floating-cart');		
			$("<img src='"+img.src+"' class='floating-image-large' />").appendTo(cart);
			
			$(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
			setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
			
			setTimeout(function(){
			$('div.floating-cart').remove();
			$("body").removeClass("MakeFloatingCart");


			var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+img.src+"' alt='' /></div><span>"+productName+"</span><strong>$39</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			

			$("#cart .empty").hide();			
			$("#cart").append(cartItem);
			$("#checkout").fadeIn(500);
			
			$("#cart .cart-item").last()
				.addClass("flash")
				.find(".delete-item").click(function(){
					$(this).parent().fadeOut(300, function(){
						$(this).remove();
						if($("#cart .cart-item").size() == 0){
							$("#cart .empty").fadeIn(500);
							$("#checkout").fadeOut(500);
						}
					})
				});
 		    setTimeout(function(){
				$("#cart .cart-item").last().removeClass("flash");
			}, 10 );
			
		}, 1000);
			
			
		});
	})
	
	/* ----  Image Gallery Carousel   ---- */
	function makeCarousel(el){
	
		
		var carousel = $(el).find('.carousel ul');
		var carouselSlideWidth = 315;
		var carouselWidth = 0;	
		var isAnimating = false;
		var currSlide = 0;
		$(carousel).attr('rel', currSlide);
		
		// building the width of the casousel
		$(carousel).find('li').each(function(){
			carouselWidth += carouselSlideWidth;
		});
		$(carousel).css('width', carouselWidth);
		
		// Load Next Image
		$(el).find('div.carouselNext').on('click', function(){
			var currentLeft = Math.abs(parseInt($(carousel).css("left")));
			var newLeft = currentLeft + carouselSlideWidth;
			if(newLeft == carouselWidth || isAnimating === true){return;}
			$(carousel).css({'left': "-" + newLeft + "px",
								   "transition": "300ms ease-out"
								 });
			isAnimating = true;
			currSlide++;
			$(carousel).attr('rel', currSlide);
			setTimeout(function(){isAnimating = false;}, 300);			
		});
		
		// Load Previous Image
		$(el).find('div.carouselPrev').on('click', function(){
			var currentLeft = Math.abs(parseInt($(carousel).css("left")));
			var newLeft = currentLeft - carouselSlideWidth;
			if(newLeft < 0  || isAnimating === true){return;}
			$(carousel).css({'left': "-" + newLeft + "px",
								   "transition": "300ms ease-out"
								 });
			isAnimating = true;
			currSlide--;
			$(carousel).attr('rel', currSlide);
			setTimeout(function(){isAnimating = false;}, 300);						
		});
	}
	
	$('.sizes a span, .categories a span').each(function(i, el){
		$(el).append('<span class="x"></span><span class="y"></span>');
		
		$(el).parent().on('click', function(){
			if($(this).hasClass('checked')){				
				$(el).find('.y').removeClass('animate');	
				setTimeout(function(){
					$(el).find('.x').removeClass('animate');							
				}, 50);	
				$(this).removeClass('checked');
				return false;
			}
			
			$(el).find('.x').addClass('animate');		
			setTimeout(function(){
				$(el).find('.y').addClass('animate');
			}, 100);	
			$(this).addClass('checked');
			return false;
		});
	});
	
	$('.add_to_cart').click(function(){
		var productCard = $(this).parent();
		var position = productCard.offset();
		var productImage = $(productCard).find('img').get(0).src;
		var productName = $(productCard).find('.product_name').get(0).innerHTML;				

		$("body").append('<div class="floating-cart"></div>');		
		var cart = $('div.floating-cart');		
		productCard.clone().appendTo(cart);
		$(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
		setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
		setTimeout(function(){
			$('div.floating-cart').remove();
			$("body").removeClass("MakeFloatingCart");


			var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>$39</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			

			$("#cart .empty").hide();			
			$("#cart").append(cartItem);
			$("#checkout").fadeIn(500);
			
			$("#cart .cart-item").last()
				.addClass("flash")
				.find(".delete-item").click(function(){
					$(this).parent().fadeOut(300, function(){
						$(this).remove();
						if($("#cart .cart-item").size() == 0){
							$("#cart .empty").fadeIn(500);
							$("#checkout").fadeOut(500);
						}
					})
				});
 		    setTimeout(function(){
				$("#cart .cart-item").last().removeClass("flash");
			}, 10 );
			
		}, 1000);
	});
});

