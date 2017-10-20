$(function(){

	$(".banner-list li").width($(window).width());
	
	$('#banner-box').slides({
		generateNextPrev: false,
		generatePagination:false,
		paginationClass:"banner-nav",
		container: 'banner-list',
		/*play: 12000,
		pause:8000,*/
		effect:"fade",
		slideEasing:"easeInOutQuart",
		slidesLoaded: function() {
		},
		animationStart: function(current){
		$('.t-d').animate({
			top:130,left:0
		});
		$('.animate-img').animate({top:120,right:0});

	},
		animationComplete: function(current){
			$('.t-d').animate({top:130,left:20});
			$('.animate-img').animate({top:120,right:40});
		}
	});

});
