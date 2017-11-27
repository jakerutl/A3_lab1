(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
var images = document.querySelectorAll('.data-ref');
var name = document.querySelector('.modelName');
var  price = document.querySelector('.priceInfo');
var  details = document.querySelector('.modelDetails');
var  current = document.querySelector('#F55');
    // appliedClass;



    function changeText(){
      current.classList.add('nonActive');
      // console.log('hello');
      let objectIndex = carData[this.id];
      // console.log(objectIndex);
      this.classList.remove('nonActive');
      name.firstChild.nodeValue = objectIndex.carName;
      price.firstChild.nodeValue = objectIndex.price;
      details.firstChild.nodeValue = objectIndex.imageDescription;

      current = this;

    }

    images.forEach(function(image){
      // console.log(image);
      image.addEventListener('click', changeText, false);
      image.classList.add('nonActive');


    });

current.classList.remove('nonActive');
let objectIndex = carData[current.id];
name.firstChild.nodeValue = objectIndex.carName;
price.firstChild.nodeValue = objectIndex.price;
details.firstChild.nodeValue = objectIndex.imageDescription;
})();
