import $ from 'jquery';

export function getCows(callback) {
  $.get("http://localhost:3000/api/cows", 
        function(data) {
          console.log('successfully grabbed cows');
          callback(data);
        });
};

export function postCow(cowObj, callback) {
    var settings = {
      "url": "http://localhost:3000/api/cows",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify(cowObj),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      callback();
    });
};