function renderStatus(statusText) {
  document.getElementById('status').innerHTML = statusText;
}

document.addEventListener('DOMContentLoaded', function() {

  var searchUrl = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand';
  var x = new XMLHttpRequest();
  x.open('GET', searchUrl);
  x.responseType = 'json';

  x.onload = function() {
    var response = x.response;
    if (!response  || response.length === 0) {
      errorCallback('No response from Host');
      return;
    }
    var firstResult = response[0];
    var content=firstResult.content
    renderStatus(content);

  };
  x.onerror = function() {
    errorCallback('Network error.');
    renderStatus('Error...');
  };
  x.send();
  
});

