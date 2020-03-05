import axios from 'axios';

export function getCows() {
  return axios.get("http://localhost:3000/api/cows");
};

export function postCow(cowObj) {
    return axios({
      "url": "http://localhost:3000/api/cows",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify(cowObj)
    });
  
    // var settings = {
    //   "url": "http://localhost:3000/api/cows",
    //   "method": "POST",
    //   "headers": {
    //     "Content-Type": "application/json"
    //   },
    //   "data": JSON.stringify(cowObj),
    // };

    // $.ajax(settings).done(function (response) {
    //   console.log(response);
    //   callback();
    // });
};

export function updateCow(route, cowObj) {
  return axios({
    "url": `http://localhost:3000/api/cows/${route}`,
    "method": "PUT",
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify(cowObj),
  });
};

export function deleteCow(cow) {
  return axios.delete(`http://localhost:3000/api/cows/${cow}`);
};