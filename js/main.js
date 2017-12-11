(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
var images = document.querySelectorAll('.data-ref');
// var httpRequest = new XMLHttpRequest();




    function getCarData(){
      const url = './includes/functions.php?carModel=' + this.id;

      //the fetch API uses new Javascript promise API
      fetch(url)// do an ajax call with fetch
        .then((resp) => resp.json())// convert to json
        .then(({modelName, pricing, modelDetails, model}) => {
          let  carmodel = document.querySelector('.modelName').textContent = modelName;
          let  price = document.querySelector('.priceInfo').innerHTML = pricing;
          let  desc = document.querySelector('.modelDetails').textContent = modelDetails;

        images.forEach(function(image, index){
            image.classList.add('nonActive');
          });

          // this is a template string constructor - look it up!
          document.querySelector(`#${model}`).classList.remove('nonActive');
        }) //call the process function
        .catch(function(error){ // catch ANY error
          console.log(error);
        })
}


    //
    // function processResult(data) {
    //   const { modelName, pricing, modelDetails } = data;
    //
    //   let  model = document.querySelector('.modelName').textContent = modelName;
    //   let  price = document.querySelector('.priceInfo').innerHTML = pricing;
    //   let  desc = document.querySelector('.modelDetails').textContent = modelDetails;
    //
    // images.forEach(function(image, index){
    //     image.classList.add('nonActive');
    //   });
    //
    //   // this is a template string constructor - look it up!
    //   document.querySelector(`#${data.model}`).classList.remove('nonActive');
    // }

images.forEach(function(car, index) {
  car.addEventListener('click', getCarData, false);
  });
})();
