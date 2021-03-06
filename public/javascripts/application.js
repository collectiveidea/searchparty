var Base = {
  addItem: function(item) {
    $('#' + this.name + '-result').append(item);
  },
  
  loaded: function() {
    $('#' + this.name).removeClass('loading');
  }
  
}

var GitHub = jQuery.extend({
  name: 'github',
  
  result: function(data) {
    base = this;
    $(data.repositories).each(function() {
      base.addItem(
        '<li>' + 
          '<a href="' + this.url + '">' + this.name + '</a>' +
          '<p>' + this.description + '</p>' +
          '<div class="url">' + this.url + '</div>' +
        '</li>'
      );
    });
    this.loaded();
  },
  
}, Base);

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
  init: function() {
    this.setTitle();
    $('#delicious-username input[name=username]').attr('value', this.username());
    $('#delicious-username').hide().submit(function () {
      Delicious.username($('#delicious-username input[name=username]').attr('value'));
      $(this).hide();
      Delicious.setTitle();
      window.location = window.location.href;
      return false;
    });
    $('a#customize-delicious').click(function() {
      $('#delicious-username').show();
      return false;
    });
  },
  
  result: function(data) {
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
  },
  
  username: function(val) {
    return $.cookie('delicious.username', val)
  },
  
  setTitle: function() {
    if(Delicious.username())
      $('a#customize-delicious').html(Delicious.username());
    
  }
}

$('.service').click(function(event) {
  if($(event.target).is('a')) return;
  
  if($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.service.inactive').removeClass('inactive');
  } else {
    $('.service.active').removeClass('active');
    $(this).addClass('active');
    $('.service:not(.active)').addClass('inactive');
  }
});

Delicious.init();
