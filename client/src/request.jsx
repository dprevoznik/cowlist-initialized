import $ from 'jquery';

export function getCows(callback) {
  $.get("http://localhost:3000/api/cows", 
        function(data) {
          console.log('successfully grabbed cows');
          callback(data);
        });
};

export function postCow(cowObj, callback) {
    //$.post(data: cowObj,
        //success equals callback
    //)
    
    // $.get("http://localhost:3000/api/cows", 
    //       function(data) {
    //         console.log('successfully grabbed cows');
    //         callback(data);
    //       });
  };