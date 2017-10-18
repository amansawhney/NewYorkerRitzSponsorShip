var counter = 0;
var changed = false;

jQuery(function($) {
  init();
}); // start jQuery when DOM is ready

function init() {
  // start
  setWindow(); // set up window events
}

function setWindow() {
  $(window).on('load resize scroll', function(e) {
    // when window is ready, resized, or scrolled
    viewportLog(); // log view counter
  });
}

function viewportLog() {
    if (
        topInViewport($('#reset')) &&
        $('#elem').css('background-image').indexOf('image1_@2x.jpg') === -1
    ) {
        console.log(
            $('#elem').css('background-image').indexOf('image1_@2x.jpg') === -1,
        );
        newUrl = "'./Assets for Developer 10-10-17/image1_@2x.jpg'";
        if (
            !changed &&
            $('#elem').css('background-image').indexOf('image1_@2x.jpg') === -1
        ) {
            changed = true;
            $('#elem')
                .stop(true).fadeTo('slow', 0, function() {
                $(this).css('background-image', 'url(' + newUrl + ')');
                console.log('1');
            })
                .fadeTo('slow', 1);
            return;
        }
    } else if (
    topInViewport($('#mydivname')) &&
    $('#elem').css('background-image').indexOf('image2_@2x.jpg') === -1
  ) {
    console.log(
      $('#elem').css('background-image').indexOf('image2_@2x.jpg') === -1,
    );
    newUrl = "'./Assets for Developer 10-10-17/image2_@2x.jpg'";
    if (
      !changed &&
      $('#elem').css('background-image').indexOf('image2_@2x.jpg') === -1
    ) {
      changed = true;
      $('#elem')
        .stop(true).fadeTo('slow', 0, function() {
          $(this).css('background-image', 'url(' + newUrl + ')');
          console.log('1');
        })
        .fadeTo('slow', 1);
      return;
    }
  } else if (
    topInViewport($('#mydivname2')) &&
    $('#elem').css('background-image').indexOf('image2_wQuote_@2x.jpg') === -1
  ) {
    console.log(
      $('#elem').css('background-image').indexOf('image2_wQuote_@2x.jpg') ===
        -1,
    );

    newUrl = "'./Assets for Developer 10-10-17/image2_wQuote_@2x.jpg'";
    if (
      !changed &&
      $('#elem').css('background-image').indexOf('image2_wQuote_@2x.jpg') === -1
    ) {
      changed = true;
      $('#elem')
        .stop(true).fadeTo('slow', 0, function() {
          $(this).css('background-image', 'url(' + newUrl + ')');
          console.log('2');
        })
        .fadeTo('slow', 1);
      return;
    }
  } else if (
    topInViewport($('#mydivname3')) &&
    $('#elem').css('background-image').indexOf('image3_@2x.jpg') === -1
  ) {
    console.log(
      $('#elem').css('background-image').indexOf('image3_@2x.jpg') === -1,
    );

    newUrl = "'./Assets for Developer 10-10-17/image3_@2x.jpg'";
    if (
      !changed &&
      $('#elem').css('background-image').indexOf('image3_@2x.jpg') === -1
    ) {
      changed = true;
      $('#elem')
        .stop(true).fadeTo('slow', 0, function() {
          $(this).css('background-image', 'url(' + newUrl + ')');
          console.log('3');
        })
        .fadeTo('slow', 1);
      return;
    }
  } else if (
    topInViewport($('#mydivname4')) &&
    $('#elem').css('background-image').indexOf('image4_@2x.jpg') === -1
  ) {
    console.log(
      $('#elem').css('background-image').indexOf('image4_@2x.jpg') === -1,
    );

    newUrl = "'./Assets for Developer 10-10-17/image4_@2x.jpg'";
    if (
      !changed &&
      $('#elem').css('background-image').indexOf('image4_@2x.jpg') === -1
    ) {
      changed = true;
      $('#elem')
        .stop(true).fadeTo('slow', 0, function() {
          $(this).css('background-image', 'url(' + newUrl + ')');
          console.log('4');
        })
        .fadeTo('slow', 1);
      return;
    }
  } else if (
    topInViewport($('#mydivname5')) &&
    $('#elem').css('background-image').indexOf('image4_wQuote_@2x.jpg') === -1
  ) {
    console.log(
      $('#elem').css('background-image').indexOf('image4_wQuote_@2x.jpg') ===
        -1,
    );

    newUrl = "'./Assets for Developer 10-10-17/image4_wQuote_@2x.jpg'";
    if (
      !changed &&
      $('#elem').css('background-image').indexOf('image4_wQuote_@2x.jpg') === -1
    ) {
      changed = true;
      $('#elem')
        .stop(true).fadeTo('slow', 0, function() {
          $(this).css('background-image', 'url(' + newUrl + ')');
          console.log('5');
        })
        .fadeTo('slow', 1);
      return;
    }
  } else if (
    topInViewport($('#mydivname6')) &&
    $('#elem').css('background-image').indexOf('image5_@2x.jpg') === -1
  ) {
    console.log(
      $('#elem').css('background-image').indexOf('image5_@2x.jpg') === -1,
    );

    newUrl = "'./Assets for Developer 10-10-17/image5_@2x.jpg'";
    if (
      !changed &&
      $('#elem').css('background-image').indexOf('image5_@2x.jpg') === -1
    ) {
      changed = true;
      $('#elem')
        .stop(true).fadeTo('slow', 0, function() {
          $(this).css('background-image', 'url(' + newUrl + ')');
          console.log('6');
        })
        .fadeTo('slow', 1);
      return;
    }
  } else if (
    topInViewport($('#mydivname7')) &&
    $('#elem').css('background-image').indexOf('image5_wQuote_@2x.jpg') === -1
  ) {
    console.log(
      $('#elem').css('background-image').indexOf('image5_wQuote_@2x.jpg') ===
        -1,
    );

    newUrl = "'./Assets for Developer 10-10-17/image5_wQuote_@2x.jpg'";
    if (
      !changed &&
      $('#elem').css('background-image').indexOf('image5_wQuote_@2x.jpg') === -1
    ) {
      changed = true;
      $('#elem')
        .stop(true).fadeTo('slow', 0, function() {
          $(this).css('background-image', 'url(' + newUrl + ')');
          console.log('7');
        })
        .fadeTo('slow', 1);
      return;
    }
  } else {
    changed = false;
  }
}

function topInViewport(element) {
  // is the top of the element in viewport?
  return (
    $(element).offset().top >= $(window).scrollTop() &&
    $(element).offset().top <= $(window).scrollTop() + $(window).height()
  );
}
