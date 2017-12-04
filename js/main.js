(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
var images = document.querySelectorAll('.data-ref');
var httpRequest = new XMLHttpRequest();




    function getCarData(){
//make an AJAX call to the DB; handle errors first
  if (!httpRequest){
    alert('giving up... your browser sucks');
    return false;
  }

  httpRequest.onreadystatechange = processRequest;
  httpRequest.open('Get', './includes/functions.php?carModel=' + this.id);
  httpRequest.send();

}

function processRequest() {
  let reqIndicator = document.querySelector('.request-state');
  reqIndicator.textContent = httpRequest.readyState;
  // debugger;

  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) { // 200 means everything is awesome
      // debugger;
      let data = JSON.parse(httpRequest.responseText);

      processResult(data);
    } else {
      alert('There was a problem with the request.');
    }
  }
}



    function processResult(data) {
      const { modelName, pricing, modelDetails } = data;

      let  model = document.querySelector('.modelName').textContent = modelName;
      let  price = document.querySelector('.priceInfo').innerHTML = pricing;
      let  desc = document.querySelector('.modelDetails').textContent = modelDetails;

      carButtons.forEach(function(car,index){
        car.classList.add('nonActive');
      });

      // this is a template string constructor - look it up!
      document.querySelector('#${data.model}').classList.remove('nonActive');
    }

images.forEach(function(car, index) {
  car.addEventListener('click', getCarData, false);
  });
})();
