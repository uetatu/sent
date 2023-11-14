(function($) {
    var $body   = $('body');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // メニューの開閉
    $btn.on( 'click', function() {
      if ( ! $body.hasClass( open ) ) {
        $body.addClass( open );
      } else {
        $body.removeClass( open );
      }
    });
    // 背景の除去
    $mask.on('click', function() {
      $body.removeClass( open );
    });
  } )(jQuery);