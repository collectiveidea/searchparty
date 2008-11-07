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
    console.log(data);
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