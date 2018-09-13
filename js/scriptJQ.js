
var IMGaddress = [ ];
	
function nextpic(){
	var rightNow= $('.modal-content').attr('src');
	var indexNow=IMGaddress.indexOf(rightNow);
	if(indexNow!=IMGaddress.length-1){
	$('.modal-content').attr('src', IMGaddress[indexNow+1])
	$(".fa-chevron-left").css("color", "#ffffff" );
	$(".fa-chevron-left").css("cursor", "pointer" );
	}
	if(indexNow==IMGaddress.length-2){
		$(".fa-chevron-right").css("color", "#2d2d2d" );
		$(".fa-chevron-rightt").css("cursor", "auto" );
		
	};
	
}

function prepic(){
	var rightNow= $('.modal-content').attr('src');
	var indexNow=IMGaddress.indexOf(rightNow);
	if(indexNow!=0){
	$('.modal-content').attr('src', IMGaddress[indexNow-1]);
	$(".fa-chevron-right").css("color", "#ffffff" );
	$(".fa-chevron-right").css("cursor", "pointer" );
	}else{
		$(".fa-chevron-left").css("color", "#2d2d2d" );
		$(".fa-chevron-left").css("cursor", "auto" );
	}
}
				
	
	$(document).ready(function(){
		//corrigir img fluid
		
		IMGaddress.splice(0,IMGaddress.length)
		
		$('.img-fluid').each(function() {
			var loca=$(this).attr('src');
			IMGaddress.push(loca);
			
		});
		
		$('.dropdown-submenu a.test').on("click", function(e){
		$(this).next('ul').toggle();
			e.stopPropagation();
			e.preventDefault();
		});
		
		$('.img-fluid').on('click', function() {
			$('.modal-content').attr('src', $(this).attr('src'));
			$('#myModal').modal('show');   
		});		
		
		
		
		$('#gallery .banner').click(function(){
			
			var idName = $(this).data("id");
			$('#'+idName).slideToggle(function(){
				var ok=$('#'+idName).css("display")
				if(ok=="block"){
					$('#'+idName).css("display","flex")
				}
			});
			
			$(this).find("h2").toggleClass( "goDown" );
		});
		
		$('.capaIMG').hover(function(){
			$( this ).find( "h1" ).css( "letter-spacing", "10px" );
		}, function() {
			$( this ).find( "h1" ).css( "letter-spacing", "2px" );
		});
		
	});


