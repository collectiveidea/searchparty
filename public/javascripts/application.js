var GitHub = {
  result: function(data) {
    $(data.repositories).each(function() {
      $('#github-result').append(
        '<li>' + 
          '<a href="' + this.url + '">' + this.name + '</a>' +
          '<p>' + this.description + '</p>' +
          '<div class="url">' + this.url + '</div>' +
        '</li>'
      );
      $('#github').removeClass('loading');
    });
  }
}

var Google = {
  result: function(data) {
    $(data.responseData.results).each(function() {
      $('#google-result').append(
        '<li>' + 
          '<a href="' + this.url + '">' + this.title + '</a>' +
          '<p>' + this.content + '</p>' +
          '<div class="url">' + this.visibleUrl + '</a>' +
        '</li>'
      );
    });
    $('#google').removeClass('loading');
  }
}


var Delicious = {
  result: function(data) {
    console.log(data);
    $(['user', 'everyone']).each(function() {
      var is_mine = this == 'user';
      $(data[this]).each(function() {
        $('#delicious-result').append(
          '<li class="' + (is_mine ? 'mine' : 'other') + '">' + 
            '<a href="' + this.url + '">' + this.title + '</a>' +
            '<p>' + this.description + '</p>' +
            '<div class="url">' + this.url + '</a>' +
          '</li>'
        );
      });
      
    });
    $('#delicious').removeClass('loading');
  }
}

$(function() {
  $('.service:first').addClass('active');
  
  $('.service').click(function() {
    if($(this).hasClass('active')) return;
    
    $('.service.active').animate({width: '200px', height: '200px', left: $(this).offset().left }, function() {
      $(this).removeClass('active').css({position: 'static', left: 'auto'})
    });
    $(this).css({position: 'absolute', left: $(this).offset().left});
    $(this).animate({width: '400px', height: '1000px', 'left': 0}, function() {
      $(this).addClass('active').css({height: 'auto'});
    });
  })
})