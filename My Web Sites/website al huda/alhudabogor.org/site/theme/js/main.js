var hash = window.location.hash.replace('#', '');

jQuery(function($){

  $('.m-slider .flexslider').flexslider({
    animation: 'slide'
  });

  $('.latest-posts--logo').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 230,
    itemMargin: 10
  });

  $('video,audio').mediaelementplayer({
    'pluginPath': themeUrl + 'vendor/mediaelement/'
  });

  $('.royalSlider').royalSlider({
    template: 'default',
    image_generation: {
      lazyLoading: !0,
      imageWidth: '',
      imageHeight: '',
      thumbImageWidth: 96,
      thumbImageHeight: 72
    },
    thumbs: {
      paddingBottom: 4,
      thumbWidth: 96,
      thumbHeight: 72,
      appendSpan: !0
    },
    fullscreen: {
      enabled: !0,
      nativeFS: !0
    },
    width: '100%',
    height: 500,
    autoScaleSlider: !0,
    autoScaleSliderWidth: 770,
    autoScaleSliderHeight: 500,
    controlNavigation: 'thumbnails',
    arrowsNavHideOnTouch: !0,
    globalCaption: !0,
    globalCaptionInside: !0,
    keyboardNavEnabled: !0,
    fadeinLoadedSlide: !1
  });

  if( $('.gallery').length ) {
    // Galleria.loadTheme(themeUrl + 'vendor/galleria/themes/classic/galleria.classic.min.js');
    // Galleria.run('.gallery');

    // $('.gallery').magnificPopup({
  	// 	delegate: 'a',
  	// 	type: 'image',
  	// 	tLoading: 'Loading image #%curr%...',
  	// 	mainClass: 'mfp-img-mobile',
  	// 	gallery: {
  	// 		enabled: true,
  	// 		navigateByImgClick: true,
  	// 		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  	// 	},
  	// 	image: {
  	// 		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  	// 		titleSrc: function(item) {
  	// 			return item.el.attr('title'); // + '<small>by Marsel Van Oosten</small>';
  	// 		}
  	// 	}
  	// });

    $('.gallery').nanoGallery({
      thumbnailWidth: 'auto',
      thumbnailHeight: 250,
      theme: 'light',
      thumbnailGutterWidth : 0,
      thumbnailGutterHeight : 0,
      colorScheme: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
      i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
      thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' }
    });

  }

  $('.menu-toggle .button').on('click', function(e) {
    var m = $(this).attr('data-menu');

    if( !m ) return;

    e.preventDefault();

    if ($(window).outerWidth() < 768)
      $('.menu').not('.menu--' + m).slideUp();
    $('.menu--' + m).slideToggle();
  });

  $('.tabs .tabs__controls li').on('click', function(e) {
    var t = $(this),
       p = t.parents('.tabs'),
      d = t.attr('rel');
    p.find('.tabs__page').slideUp();
    p.find('#' + d).slideDown();

    p.find('.tabs__controls li').removeClass('-active');
    t.addClass('-active');

    p.find('.tabs__page--heading').removeClass('-active');
    p.find('.tabs__page--heading[rel=' + d + ']').addClass('-active');
  });
  $('.tabs .tabs__page--heading').on('click', function(e) {
    $('.tabs .tabs__controls li[rel=' + $(this).attr('rel') + ']').trigger('click');
  });

  if( hash != '') {
    $('.tabs .tabs__controls li[rel=tab-' + hash + ']').trigger('click');
  } else {
    $('.tabs .tabs__controls li:first-child').trigger('click');
  }

  $(window).scroll(function(z) {
    if ($(".site-header.-float").length > 0) {
      if ($(".site-header.-float").offset().top > 70) {
        $(".site-header.-float").addClass("is-visible");
      } else {
        $(".site-header.-float").removeClass("is-visible");
      }
    }
  });

  if( $('.js-accordion').length ) {
    $('.js-accordion > .answer').slideToggle();
    $('.js-accordion > .question').addClass('-closed');

    $('.js-accordion').on('click', '.question', function() {
      $(this).toggleClass('-closed');
      $(this).next().slideToggle();
    });
  }

  $('.js-img-popup').magnificPopup({type:'image'});

  $('.js-banner-float .close').on('click', function(e){
    e.preventDefault();
    $('.js-banner-float').addClass('-closed');
    $('body').removeClass('has-banner-float');
  });

});
