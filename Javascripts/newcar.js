import { toyota, benz, bmw, tata, landRover,marutiSuzuki,volkswagen,mahindra,morrisGarage ,
  jaguar,volvo,skoda,kia,porschee} from './newmodels.js';


  var  datadetailsmodel='';
  var  datadetails='';
  var datadetails3 = JSON.parse(localStorage.getItem('datadetails'));
  var datadetailsmodel3 = JSON.parse(localStorage.getItem('datadetailsmodel'));
  
  var datadetails2 = JSON.parse(localStorage.getItem('datadetails2'));
  var datadetailsmodel2 = JSON.parse(localStorage.getItem('datadetailsmodel2'));
  // var van = JSON.parse(localStorage.getItem('van'));   
  let van =JSON.parse( localStorage.getItem('van'));

// var datadetailsmodel = JSON.parse(localStorage.getItem('totalCar'));   
// console.log(van);   

console.log(van);    
// van = 0;

if(van == 1){  
  datadetailsmodel = datadetailsmodel2;   
  datadetails = datadetails2;   
  console.log(datadetails);
  console.log(datadetailsmodel);
}   
else if(van == 2) {    
  datadetails = datadetails3;  
  datadetailsmodel = datadetailsmodel3; 
  console.log(datadetails);
  console.log(datadetailsmodel);
}    

// else{
//   datadetails !=datadetails2;
//   datadetailsmodel != datadetailsmodel2;
// }
var totalCar;
// van = B;
// localStorage.setItem('van',JSON.stringify(van));
// var van = JSON.parse(localStorage.getItem('van'));  
// console.log(datadetails2);
console.log(datadetailsmodel);
console.log(van);
switch (datadetailsmodel) {
  case ("toyota"):
    totalCar = toyota;
    break;
  case ("mercedesBenz"):
    totalCar = benz;
    break;
  case ("bmw"):
    totalCar = bmw;
    break;
  case ("tata"):
    totalCar = tata;
    break;
  case ("Landrover"):
    totalCar = landRover;
    break;
  case ("maruti"):
    totalCar = marutiSuzuki;
    break;
  case ("volkswagen"):
    totalCar = volkswagen;
    break;
  case ("mahindra"):
    totalCar = mahindra;
    break;
  case ("mg"):
    totalCar = morrisGarage;
    break;
  case ("jaguar"):
    totalCar = jaguar;
    break;
  case ("volvo"):
    totalCar = volvo;
    break;
  case ("skoda"):
    totalCar = skoda;
    break;
  case ("kia"):
    totalCar = kia;
    break;
  case ("porsche"):
    totalCar = porschee;
    break;
}
console.log(datadetails);

var hariCar = '';
totalCar.filter((value, index) => {
  if (totalCar[index].model === datadetails) {
    hariCar = totalCar[index];
  }
})
// var hence = document.querySelector('#iframehide')
// if (hariCar.iframeInterior == '') {
//   hence.classList.remove("iframehide")
// }
var hellfireData =

  `<div class="maindiv1">
  <img class="mainimg" src="${hariCar.img}" alt="">
</div>
<div class="subshadow">
  <div class="carone">
    <h1 class="mainname">${hariCar.model}</h1>
  </div>
  </div>
    <div class="shadow">
  <div class="des">
   <br>
    <p class="carmodel">${hariCar.price}</p><br>
  </div>
  <button class="test">Book a Test Drive</button>
  <button class="test1">Configure& Price</button>
  

  <div class="maintable">
    <div class="table column-gap-5 row-gap-3">
      <p class="para">${hariCar.pricecount}</p>
      <p class="para1">Starting from</p>
    </div>
    <div class="table1 row-gap-3">
      <p class="para">${hariCar.mileage}</p>
      <p class="para1">Fuel consumption, combined</p>
    </div>
    <div class="table2 row-gap-3">
      <p class="para">${hariCar.variant}</p>
      <p class="para1">Engine and Fuel Type</p>
    </div>
  </div>
</div>
</div>

<div class="spec">
<h1 class="keyfeatures">KEY SPECS & FEATURES OF TOYOTA FORTUNER</h1>
<div class="buttondiv">

  <button class="button1 mt-4">KEY SPECIFICATIONS</button>
  <button class="button2 mt-4">TOP FEATURES</button>
  <div class="container text-center ">
    <div class="row mt-lg-2  row-gap-3 g-3">
      <div class="col-lg-6 d-flex justify-content-between p-0  w-50 column-gap-4 rowing">
        <div class="left d-flex text-center align-items-center">
          <img class="icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKklEQVR4nO2YPUsdQRSGn/hVRS1TWQh2dtEfYCcEhECaNCIJgoKCIgYVNN7UKVIFooWFf8A6BhQ/AhHtxM5KCaQQi2ChoI4MzIVl7h13d3Zm7l6YB041O2fOu2c+zgxEIpGIJTuAsLQDSoQoaKXBNqAoxBdZ5v/vZphaBxmCNLXvU3JMQpoOEYUEpg1YBf46OEeEZtfAOvAyhJA1DwKEZj98i/ikBroF3njwP6D8X+GRd8AD8AiMehxH+NzlBoEbNcAyfhG+hPQC/5TzDfwjEkIOTQfpdko5IXekCnBZ57tfQHvGYIbq9N+yECJMVUNaOfHF0P4H6CY7u1r//0BPASFVaoTUNCiqmXiPPfWyMZujv3AhxMVC07NxArQ2m5AhTcS9OhvyIJ6Z+sGE6Nn45uBqsFcvPlPgpj9QJBsXQCduESYhpouRi2y8xT3CJMT4oYOdSrdN+/jDCdGzods50GXhN7MQ08NAUfoTvu5UrZaVw2fu9kEWe5JKwtd8M26/Vc6Un59AC/kQZTgQk9NKVsyvcvZtV30fyiCkoi5fwxZ9l9X4p2nxhSga5bT6atFvLpGNES2+mjVjW8YfZSzj5bQ6BjpyiphR48hMjqcc2Humhn2HFyv5V/tyiphSAqRN4pE8V93XOX1PJERMEwAfjw8f1HqQPhcIiMvnoLGEiCUaQNEHuhdqMcsLl/SzSAP5nlIgZrUVGozc2T4XeMSWlfDHRouIRCIRgvEEDtb91hhEgNIAAAAASUVORK5CYII=">
          <h5 class="d-flex align-items-center m-0 eng ps-3">Engine</h5>
        </div>
        <div class="right align-items-center d-flex">
          <h5 class="fw-bold align-items-center me-4 d-flex CC">${hariCar.engineCc}</h5>
        </div>
        
      </div>
      <div class="col-lg-6 d-flex justify-content-between p-0 pe-2 w-50 rowing">
        <div class="left d-flex text-center align-items-center ">
          <svg style="margin-left:20px;" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 30 30">
            <path d="M 19.664062 0 C 19.423063 0 19.217828 0.17120313 19.173828 0.40820312 L 18.953125 1.5839844 C 18.896125 1.8889844 18.654609 2.1166875 18.349609 2.1796875 C 18.065609 2.2386875 17.785672 2.3123906 17.513672 2.4003906 C 17.218672 2.4963906 16.897313 2.4205469 16.695312 2.1855469 L 15.919922 1.2792969 C 15.762922 1.0962969 15.498062 1.0528281 15.289062 1.1738281 L 14.710938 1.5078125 C 14.502937 1.6278125 14.408281 1.8804219 14.488281 2.1074219 L 14.884766 3.234375 C 14.987766 3.526375 14.893109 3.8437813 14.662109 4.0507812 C 14.447109 4.2437812 14.243781 4.4471094 14.050781 4.6621094 C 13.843781 4.8931094 13.526375 4.9897187 13.234375 4.8867188 L 12.105469 4.4882812 C 11.878469 4.4082812 11.627813 4.5019375 11.507812 4.7109375 L 11.171875 5.2910156 C 11.051875 5.4990156 11.097297 5.764875 11.279297 5.921875 L 11.376953 6.0058594 C 12.559953 6.0258594 13.572016 6.8720625 13.791016 8.0390625 L 13.851562 8.3574219 L 14.060547 8.1113281 C 14.519547 7.5773281 15.162172 7.2869531 15.826172 7.2519531 C 16.722172 5.8969531 18.255 5 20 5 C 22.761 5 25 7.239 25 10 C 25 11.745 24.103047 13.277875 22.748047 14.171875 C 22.713047 14.835875 22.422672 15.4795 21.888672 15.9375 L 21.642578 16.146484 L 21.960938 16.207031 C 23.127938 16.426031 23.974141 17.438094 23.994141 18.621094 L 24.078125 18.71875 C 24.235125 18.90175 24.499984 18.947172 24.708984 18.826172 L 25.289062 18.490234 C 25.497062 18.370234 25.591719 18.119578 25.511719 17.892578 L 25.113281 16.763672 C 25.010281 16.471672 25.106891 16.154266 25.337891 15.947266 C 25.552891 15.754266 25.756219 15.550938 25.949219 15.335938 C 26.156219 15.104938 26.473625 15.010281 26.765625 15.113281 L 27.892578 15.509766 C 28.119578 15.589766 28.372187 15.496109 28.492188 15.287109 L 28.826172 14.707031 C 28.946172 14.499031 28.902703 14.235125 28.720703 14.078125 L 27.814453 13.300781 C 27.579453 13.098781 27.503609 12.777422 27.599609 12.482422 C 27.687609 12.210422 27.761312 11.932438 27.820312 11.648438 C 27.883312 11.344437 28.111016 11.102922 28.416016 11.044922 L 29.591797 10.822266 C 29.828797 10.781266 30 10.576938 30 10.335938 L 30 9.6640625 C 30 9.4230625 29.828797 9.2178281 29.591797 9.1738281 L 28.416016 8.953125 C 28.111016 8.896125 27.883312 8.6546094 27.820312 8.3496094 C 27.761312 8.0656094 27.687609 7.7856719 27.599609 7.5136719 C 27.503609 7.2186719 27.579453 6.8973125 27.814453 6.6953125 L 28.720703 5.9199219 C 28.903703 5.7629219 28.947172 5.4980625 28.826172 5.2890625 L 28.492188 4.7109375 C 28.372187 4.5029375 28.119578 4.4082812 27.892578 4.4882812 L 26.765625 4.8847656 C 26.473625 4.9877656 26.156219 4.8931094 25.949219 4.6621094 C 25.756219 4.4471094 25.552891 4.2437813 25.337891 4.0507812 C 25.106891 3.8437813 25.010281 3.526375 25.113281 3.234375 L 25.511719 2.1054688 C 25.591719 1.8784687 25.498063 1.6278125 25.289062 1.5078125 L 24.708984 1.171875 C 24.500984 1.051875 24.235125 1.0972969 24.078125 1.2792969 L 23.302734 2.1855469 C 23.100734 2.4205469 22.779375 2.4963906 22.484375 2.4003906 C 22.212375 2.3123906 21.932437 2.2386875 21.648438 2.1796875 C 21.344438 2.1166875 21.102922 1.8870312 21.044922 1.5820312 L 20.824219 0.40625 C 20.782219 0.17025 20.576938 0 20.335938 0 L 19.664062 0 z M 10.664062 8 C 10.423063 8 10.217828 8.17025 10.173828 8.40625 L 9.9882812 9.3945312 C 9.9112813 9.8055313 9.5838281 10.108406 9.1738281 10.191406 C 8.8328281 10.260406 8.497875 10.348078 8.171875 10.455078 C 7.775875 10.585078 7.3413125 10.487875 7.0703125 10.171875 L 6.4199219 9.4121094 C 6.2629219 9.2301094 5.9970625 9.1866406 5.7890625 9.3066406 L 5.2109375 9.640625 C 5.0019375 9.760625 4.9082812 10.013234 4.9882812 10.240234 L 5.3242188 11.191406 C 5.4622188 11.585406 5.3305312 12.009109 5.0195312 12.287109 C 4.7625312 12.517109 4.5180625 12.760578 4.2890625 13.017578 C 4.0110625 13.328578 3.5873594 13.460266 3.1933594 13.322266 L 2.2402344 12.988281 C 2.0132344 12.908281 1.7625781 13.002937 1.6425781 13.210938 L 1.3066406 13.789062 C 1.1856406 13.998062 1.2310625 14.262922 1.4140625 14.419922 L 2.1738281 15.070312 C 2.4898281 15.341313 2.5870312 15.775875 2.4570312 16.171875 C 2.3500312 16.497875 2.2623594 16.832828 2.1933594 17.173828 C 2.1103594 17.583828 1.8074844 17.911281 1.3964844 17.988281 L 0.40820312 18.173828 C 0.17120313 18.217828 0 18.423063 0 18.664062 L 0 19.335938 C 0 19.576937 0.17025 19.782172 0.40625 19.826172 L 1.3945312 20.011719 C 1.8055312 20.088719 2.1084062 20.416172 2.1914062 20.826172 C 2.2604063 21.168172 2.3480781 21.502125 2.4550781 21.828125 C 2.5850781 22.224125 2.487875 22.658687 2.171875 22.929688 L 1.4121094 23.580078 C 1.2301094 23.737078 1.1866406 24.002938 1.3066406 24.210938 L 1.640625 24.789062 C 1.760625 24.998062 2.0132344 25.091719 2.2402344 25.011719 L 3.1914062 24.675781 C 3.5854063 24.537781 4.0091094 24.669469 4.2871094 24.980469 C 4.5171094 25.237469 4.7605781 25.481938 5.0175781 25.710938 C 5.3285781 25.988937 5.4602656 26.412641 5.3222656 26.806641 L 4.9882812 27.759766 C 4.9082812 27.986766 5.0029375 28.237422 5.2109375 28.357422 L 5.7890625 28.693359 C 5.9980625 28.814359 6.2629219 28.768937 6.4199219 28.585938 L 7.0703125 27.826172 C 7.3413125 27.510172 7.775875 27.412969 8.171875 27.542969 C 8.497875 27.649969 8.8328281 27.737641 9.1738281 27.806641 C 9.5838281 27.889641 9.9112813 28.192516 9.9882812 28.603516 L 10.173828 29.591797 C 10.217828 29.828797 10.423063 30 10.664062 30 L 11.335938 30 C 11.576938 30 11.782219 29.82875 11.824219 29.59375 L 12.009766 28.605469 C 12.086766 28.194469 12.414219 27.891594 12.824219 27.808594 C 13.166219 27.739594 13.500172 27.651922 13.826172 27.544922 C 14.222172 27.414922 14.656734 27.512125 14.927734 27.828125 L 15.578125 28.587891 C 15.735125 28.769891 15.999031 28.815313 16.207031 28.695312 L 16.787109 28.359375 C 16.996109 28.239375 17.089766 27.988719 17.009766 27.761719 L 16.675781 26.808594 C 16.537781 26.414594 16.669469 25.990891 16.980469 25.712891 C 17.237469 25.482891 17.481938 25.239422 17.710938 24.982422 C 17.988937 24.671422 18.413641 24.539734 18.806641 24.677734 L 19.759766 25.011719 C 19.986766 25.091719 20.237422 24.997062 20.357422 24.789062 L 20.693359 24.210938 C 20.814359 24.001937 20.768937 23.737078 20.585938 23.580078 L 19.826172 22.929688 C 19.510172 22.658688 19.412969 22.224125 19.542969 21.828125 C 19.649969 21.502125 19.737641 21.167172 19.806641 20.826172 C 19.889641 20.416172 20.192516 20.088719 20.603516 20.011719 L 21.591797 19.826172 C 21.828797 19.782172 22 19.576937 22 19.335938 L 22 18.664062 C 22 18.423063 21.82875 18.218781 21.59375 18.175781 L 20.605469 17.990234 C 20.194469 17.913234 19.891594 17.583828 19.808594 17.173828 C 19.739594 16.832828 19.651922 16.497875 19.544922 16.171875 C 19.414922 15.775875 19.512125 15.343266 19.828125 15.072266 L 20.587891 14.421875 C 20.769891 14.264875 20.815313 13.999016 20.695312 13.791016 L 20.359375 13.210938 C 20.239375 13.001937 19.988719 12.908281 19.761719 12.988281 L 18.808594 13.324219 C 18.414594 13.462219 17.990891 13.330531 17.712891 13.019531 C 17.482891 12.762531 17.239422 12.518062 16.982422 12.289062 C 16.671422 12.011063 16.539734 11.587359 16.677734 11.193359 L 17.011719 10.240234 C 17.091719 10.013234 16.997062 9.7625781 16.789062 9.6425781 L 16.210938 9.3066406 C 16.001938 9.1856406 15.737078 9.2310625 15.580078 9.4140625 L 14.929688 10.173828 C 14.658687 10.489828 14.224125 10.587031 13.828125 10.457031 C 13.502125 10.350031 13.167172 10.262359 12.826172 10.193359 C 12.416172 10.110359 12.088719 9.8074844 12.011719 9.3964844 L 11.826172 8.4082031 C 11.782172 8.1712031 11.576937 8 11.335938 8 L 10.664062 8 z M 20 9 C 19.448 9 19 9.448 19 10 C 19 10.552 19.448 11 20 11 C 20.552 11 21 10.552 21 10 C 21 9.448 20.552 9 20 9 z M 11 13 C 14.314 13 17 15.686 17 19 C 17 22.314 14.314 25 11 25 C 7.686 25 5 22.314 5 19 C 5 15.686 7.686 13 11 13 z M 11 17 C 9.895 17 9 17.895 9 19 C 9 20.105 9.895 21 11 21 C 12.105 21 13 20.105 13 19 C 13 17.895 12.105 17 11 17 z"></path>
            </svg>
          <h5 class="d-flex align-items-center m-0 eng ps-3">Torque</h5>
        </div>
        <div class="right align-items-center d-flex">
          <h5 class="fw-bold align-items-center m-0 d-flex CC">${hariCar.Drivetype}</h5>
        </div>
        
      </div>
      <div class="col-lg-6 d-flex justify-content-between p-0 pe-2 w-50 rowing">
        <div class="left d-flex text-center align-items-center">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjklEQVR4nNWZTYhNYRjHf8MYDUryNRHFFDaSuncMZSMl5WPjYyWJpCzIgm4WlJK5oixlQxMrFlNEKdRVJB8bRureYUGUkeRjfAyjt/7q7XTOO6cR53l/deqc9/zv7Xm6/3vO8zwv/FtGA3eBoRzHALAKo6zNmcSfYzNGuaYAKwHNCmleAi0YpB34CXwDpgd0l5XIAYxyUgF2BzTzlewnYDIGaQXeKZHOgO60NKcwynYF+CigmQp8AQZlQ5PcVyIuoSwOSXMRoyxVgO+B8RmascBr6ZZhlG4FeCKg2SHNPYwyRW/oX8C8DE0T8ESJbMQoFQV4NaBZLc1zoBmDjAL6FOSagO66NHsxyjoF+ELFYhoLZbsPwESM11X7A5pz0lQxSrtKja/AtAzNDNVdP4DZGK+rzgY0R6U5j1FavbqqnKEZB/RL04HxuuphQLNbmlsY5oGC3BbQPM3ZIdYoiE4F0C+LZXEzZyKPKbiu+pvH6RKV8u6pt5wC6yoXwNwRfkeLfoVCm6uKAnA990g54tVdEyiIRk7fu/9HGouA7ypZVlIgtZyJ1FM+2+w97c5gnOMKtCvl3kHdewVMwjgNBVtKGQEN6N56jNOhQPvUEfo9Sy3HvMu8rfZp/a3GQcRoqznAR61vIALKKbZq8lrcHiKhmmKrXVpz5X4bkdBI2GqmhnVubQuRUE6xVY/WrhAR1YStturaTU1mERF1z1ZtXgu8k4goJ2x1Sdc3Ei/FqGy1SeefLe99DGcrt8X8Rud7iIySZ6sLOr8TGJ2a5ZiC7/U2/xcQIfVEM2V2qzmPrYa8DdAxREiXl4QbUC8mUupeIoeJlJKXRK92a4nZVoOBSXwUPLO+A0VO3Hbb7WEG2P+F31f8AqKLGR/iAAAAAElFTkSuQmCC">
          <h5 class="d-flex align-items-center m-0 eng ps-3">Power</h5>
        </div>
        <div class="right align-items-center d-flex">
          <h5 class="fw-bold align-items-center me-4 d-flex CC">${hariCar.power}</h5>
        </div>
        
      </div>
      <div class="col-lg-6 d-flex justify-content-between p-0 pe-2 w-50 rowing">
        <div class="left d-flex text-center align-items-center">
          <img class="ms-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFg0lEQVR4nO1ba4iWRRR+Pne3vSh2JQ0zKlMWMUL8Ef4wgqigtMDAtqwMg+jm6qqYbUXbBbqpZCBFP4IuvxbKKNbNrEy7UVgRBaWGRmllmWtBt93cL46cidPZmff+znwb3wMHPt4zl3fO+8zMOWfmA+qoo4466jiKUwF0AzgH8WgDcBmA5QC6+Dc9qwVMBNAh3q2Dn8ViB4AqgJ8ANDrKVACsADDAZaUMcIdUJgRmAdgM4Ijl3ejZqwBmRjWwX1Q4y6KngT1vaVzLcwGMQIb/O8G7DQFY6mpkuyh4sUW/IkEHRpbB7+Bl34PMhLUsr/EzWcZqhKdFgVuVrs1Be5ccAtDqifbyy78F4ExLuSkAtikmjJgOd4oC65RuXorBG7kU5WOz6G8rgGMiypLubVG+Xxe4UihfyUF/I7QKl4lTxII36PjyGlPFdKC6E6TybPHy+0aBATpEX8SEpNgi6i2QCtr6fhNKsnAtTwH5UdakqLcm6iO9I5Q06KyL4M8eFsEe0V9PUfUeE8r7YrabKOnMP758A8lab6FQblK6Cjs5cYN/xpMjVIoB2oXyR8tAKsyEQw7ad3r0AksxwBg1uBmORmh+z2VjdPFvH45P6QYgbPQ8l4vYBR5NUW9t3FZ9myjwEmoX0g8gfz8pXnf5AQbTRYFfATQjGcYDuJwDoS5unDyvsjBReYLk78dhGscBxhM82VVwb0xkaNDEg6Zp85dlYRzmIORClIN+0de2mFigWfk5fVENrxcFN1j04wA8AuBAQr9gmD2wBhSLmeKLVjmkn+r48nLwQ3GZrwtE4W95d5C4P4NrXOUFqGgsVX0Msb+/jmWLMhLJkrhGm3hfNxXOU/q7MhrAufAUYAQ9SJsM8SKfCE+Jik8q3eSEKSib0LQ5vngbHJ0O/RE5wb6ECd9/cb5o4KBlgXk5BwueQHmYwLkN46QtiFrto0Dz/hvx0lco/SU5DEBf5FyMAjwoXpoWE20guV2mlc8A3B4jKwHcAGB2RKq+VJwh5tSwZYvpzmGAtPIDgLtDHMD0RWReyBv7w6MRSL4o2cMcgbmi8wF2eV1JFF/yHR/leUEDgN2i81UWFshcoi/Z6vME6kZl/RalfziAAUjm+zJAszo7vEnpT+LI0bcBPvXJgpWi4/2W1ThrfJBXtH9SGsbxVmQ6Xq30x6WIDkctC25RO8KJSn99IBaQ6+sFTQB2io5pC5SoqLjbp29QdK7Bifkxx8zTS3SOKOv0NRu5l1P3Rnc1PKHC5/Cm4w8t1l+Vc6CDPMiHAFzF9wBs93yWh2JBO4A/Rec6ydCQcSq8D2AxgBMSvkebWpjpZMsb7hEd/wLgdKU/TWWVouQNjviyQLLgS58saGbamc7ftYSs8ziKdA18H1+xywNiwfehWDBb5eLutZR5wDH4jew7FIGuUCzQd4soTzgHIxMnL6jB9xTsvLQqFlwDjxgD4E3lJk9SZcZywvIgB1ZlICgLJvENU/MCH/OgfaJFBWxeWUC4SK0HvQFujC4T/e/0zQIdK1Q5QvSJVs5XmP6vRQCsV0a4IyALdofIJjfw/SJpBOcF5f8rC8aqu7nDlixSXld8F59LUOo+6sB0V4i1wCRQZDxwpKDbo43ivw1V3v7iWHAdAmE8gPfUdHg85xfpVuExsQEJWBDkZIlwLMcJ2g3OcsIzQ0WhdEyf1C8IxgJDyV5lhA84YkyKRs49mPo7EnzVzlphAdgpknf0SA6nuDChqU+32+PQwhGnqbcINYDFlr+wPBtz0bJdpdkoAEsKyYKvQrPAYI66e0DyUcQx+ScpqR+1FtQEC8BprxcTZozSUl9jiWjjc9QYbgbwe0ID0DqQBcSCPdwGZbFqDtN4cJQFdgldjc0TXVLOknyD//y36B9Q4F+JcZYxpgAAAABJRU5ErkJggg==">
          <h5 class="d-flex align-items-center m-0 eng ps-3">Seating Capacity</h5>
        </div>
        <div class="right align-items-center d-flex">
          <h5 class="fw-bold align-items-center m-0 d-flex CC">${hariCar.seatingCapacity}</h5>
        </div>
        
      </div>
      <div class="col-lg-6 d-flex justify-content-between p-0 pe-2 w-50 rowing">
        <div class="left d-flex text-center align-items-center">
          <img style="width:50px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqElEQVR4nO3bUWrCQBSF4bOPajGuxm0qxHYB1b43lNJtWGibuogpgRsYJH1ob5gz154P5iWg8zPEOEYFRERERERERERErsYGwBuA9Mdxsuf4t/0nx+Qpi2Ch949Pwnq8F72fHuBE76cHONH76QFO9H56gBO9nx7gRO+nbwOc6P0bZ8Spgo101f0dgCfEFb1fxOnZXgZR0fu74NeQ6P0iTq8AXgKvIr0/kT+qhe9P7IDo/YkdELW/AbDLAvYAVoijseaxf2fHilgD+Jz44H0OsoiNtV72f5RaxHub8AHAwsYhOxNrt2f3f9lkN9mx5Qz33UqPYeFGCzvWl1jAfiLgtoIF+e1YTpwARRbwziY72MTD4j3asRb1a631mPUfS76E13bBTRejt5jarX54E3kv+U48RGyzydsgi5f359uYLWsHkbSR1gImxpmnM3AmXfA7utH7RaJ/qxW9vwt+DYneLxL9GlJ7P/1/FtH76T9QdKL3e28WJPLNBno/PcCJ3k8PcKL30wOc6P30ACd6Pz3Aid5P3wY40fur/5/FlfeLiIiIiIiIiIhgRt93dzoqq36lVgAAAABJRU5ErkJggg==">
          <h5 class="d-flex align-items-center m-0 eng ps-3">Drive Type</h5>
        </div>
        <div class="right align-items-center d-flex">
          <h5 class="fw-bold align-items-center me-4 d-flex CC">${hariCar.variant}</h5>
        </div>
        
      </div>
      <div class="col-lg-6 d-flex justify-content-between p-0 pe-2 w-50 rowing">
        <div class="left d-flex text-center align-items-center">
          <img class="ms-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZUlEQVR4nO2Xy0tXQRTHP0UPjB5CIbToRZuiTZm0CSoEXeWyksw24S7pBYql7YpomRDtWgUtwiJS2xQ93EmuoloUUf9AIIn2Sy0OHOF0vff+5npHKzgfGLi/uWfOfGfunDPnB47jOI7jOE4s1gD1QCvQCXRrO6t9+4Aa/jF2An3ACFABflVpYvMKuALs+JvCm4DnwGyA6Kw2CzwFNi2l8D3AiwxBM8B7YADoB25o69e+D2qTHHd+KYQvB3pSjon8fgQcAzYG+JHdPgE8Bn4CE0DDYotfCwylCL8FbCnhtxbYoM8HgTHgLbCZiMiOjSbEvwZ2R/K/DLiU+LKSwaKwLiFegu4asCKS/1o9fsmYkAQR5czbYzMNnCEe+4FPKeK/ASv1y7QBJ/W5MD2JnY8pvgOYyshk99TmlOm7uJBUac+kHJsYyM7ernI3HFfbdtP3HdheZKKXiYCNcebr9AbOEz+lcYfOOWbeDYdO1GQG/YiUbfYCXwNu5qGUOJk27w+FTPbMDJA8XxbZkPHA0qIjZfwd8/5BSGE2V9tUSl5S6I5NBoqvZNzku4wm+Rrb8ia8ahxKfi7DauBzgcJuMMfXsLHrypt0JCUbLJSWgpVpe46v0zlx8sefkbnUORNYmOXRV0D8JLA+x9dWYzuelRXrjdE7ytNbYAH3A/zZW1u0zqPVGDyMsICjBRbQGODvibGX0n0enZHT5yrgS4D4N4G1zl0z5ly12uc6cWjUyzBL/ARwINDXTTPucpqBLZ6kCozFEeBjiniJs1DxQfpKl69Virhm4IK2w1quF2Ex9TmO4ziO4/A/8hvbpURztK8DJwAAAABJRU5ErkJggg==">
          <h5 class="d-flex align-items-center m-0 eng ps-3">Mileage</h5>
        </div>
        <div class="right align-items-center d-flex">
          <h5 class="fw-bold align-items-center m-0 d-flex CC">${hariCar.mileage}</h5>
        </div>
        
      </div>
      <div class="col-lg-6 d-flex justify-content-between p-0 pe-2 w-50 rowing">
        <div class="left d-flex text-center align-items-center">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6UlEQVR4nNWZXYhOQRjHf0S+WR+1QlY+lm0pUaK4kXznyrbttleIq72SEhKSK9IWLpbIx5ULhBJ7SXGzWWxWySpWq4hstMuuHU09Sm/OOXNm5sw5+69/vfWemef5nTPvnGeeF7JRBXAMaAW+ifXno8BshoDmAE1AH6Ai/Au4AlRSQM0DLgP9MQCl7pcxemzuWgBckLtsCvC/J3QemJ8HwHJZHgMOAKX+DdwB1mWd/ExgL9DmMfkoP5VYM3wlr9fvHqBF7pgK7AHgAbA77W+pHKiVNduZQ+IqwZ2SW63kGik1xBypnwVIThm6NxoDvhQgQWXoT3Eg7wuQoDL02ziQVwVIUBm6PQ6ktQAJKkM/iQNpySGhNwlFporw3TiQ5sAQGmARUCVAKoV1lR2p/YFBDkrchbKdqhRujAOpCQjxHBgJDAceWozfFAeyLBCErttWScxGyzkq40AmeC7No3xK4uljb4/F+B5gBAlqC/AiGy+xblvOcR8Dnc0YZL3EaXCY47AJSL3FxB8M67SLEmOa1Eq2IGtNWzlpJtUAi8VdMdd1A1MkxjUHiF5gHIZqTzGxTr76nx/vy4jr9Nautdlxad4ihY6knPwrsEbGTgYelXyvmwp/d8V3jiD1aUCqLcuN7TJ+rNRCSrqMszxtJH3ARFIqaokkNd12yXi9z1+SxoHWag8NjJtYaJ9lsEHgkMwxTDwK6HCEULY9rzLgu0PQM1JHaR33APFCboqVzjkGvwGscGypKvFOHFTlYV37gOgCRuOoqx4ScfUOPKjC8ijqyx0mla6pTuYIshWPKpPCMDTEdTLQlsAQn5Ma1S5yqVrTuo4MpZfY6wAQzQTQEuBHhhDPgDEEUoPUVL4hPgJzCawDniH0U15JTmryBKFfuBvJUboaPe0Iof8l20ZBdMISQjfaNlAw1aXczbqkRVtILZVOYhLEY2A6BVc5cC8CYFAOa85ni5CqKekmdvuuZAmoqdJ518eASVlG+gOUBqUvs/HtvQAAAABJRU5ErkJggg==">
          <h5 class="d-flex align-items-center m-0 eng ps-3">Global NCAP Safety Rating</h5>
        </div>
        <div class="right align-items-center d-flex">
          <h5 class="fw- align-items-center me-4 d-flex CC ">${hariCar.NCAPsafetyrating}</h5>
        </div>
        
      </div>
      <div class="col-lg-6"></div>
    </div>
  </div>
</div>
</div>
<div class="compount overflow-hidden mt-5">
<h1 class="ps-5 pb-5 comfort">COMFORT HIGHLIGHTS OF THE CAR</h1>
<div class="row ps-4">
<div class="col-4 h-auto widthing">
  <div class="card">
    <img class="card-img" src="./images/seperate/img1.jpg" alt="">
    <h3 class="card-title p-3 h-75">Best Comfort Seat Available</h3>
    <div class="card-body p-0">
      <p class="card-text h-50 p-3  cardh1">
        The vehicle's 6-seat design offers passengers in <br> &nbsp; &nbsp; the 2nd row more comfort and also facilitates <br> &nbsp; &nbsp; access to the 3rd row of seats.
      </p>

    </div>
  </div>
</div>
<div class="col-4 widthing">
  <div class="card">
    <div class="card-body p-0">
      <img class="card-img" src="./images/seperate/img2.jpg" alt="">
      <h3 class="card-title p-3 texting fs-4 fw-medium">Automatic Air Conditioning With Control</h3>
      <p class="card-text p-3 cardh1">
        The Automatic air conditioning with 5-zone <br> &nbsp; &nbsp; control allows the individual setting of the <br> &nbsp; &nbsp; feel-good temperature in all three rows of.
      </p>

    </div>
  </div>
</div>
<div class="col-4 widthing">
  <div class="card">
    <div class="card-body p-0">
      <img class="card-img" src="./images/seperate/img3.jpg" alt="">
      <h3 class="card-title p-3">Best Surround Sound System</h3>
      <p class="card-text p-3 texting cardh1">
        The Automatic air conditioning with 5-zone <br> &nbsp; &nbsp; control allows the individual setting of the <br> &nbsp; &nbsp; temperature in all three rows of seats.
      </p>

    </div>
  </div>
</div>

</div>
</div>
<div class="rotate pt-4 ">
<h1 class="pb-4 interiormain">Toyota Fortuner 360 view</h1>
<h2 class="pb-4 text-md-center interior">Toyota Interior 360 view</h2>
<div class="mainone">

  <iframe class="videosource iframehide" id="iframehide" src="${hariCar.iframeInterior}" frameborder="0">
  </iframe>
  <div class="overlay">
      <span>Click to Interact</span>
  </div>
</div>
</div>
<div class="rotate pt-4 ">
<h2 class="pb-4 text-md-center pt-5 pb-4 interior">Toyota Exterior 360 view</h2>
<div class="mainone">
 
  <iframe class="videosource pointer-event" src="${hariCar.iframeExterior}" frameborder="0">
  </iframe>
  <div class="overlay">
      <span>Click to Interact</span>
  </div>
</div>
</div>
</div>`;
document.querySelector('.contentmain').innerHTML = hellfireData;

van =0;
// // localStorage.setItem('van',van);
localStorage.getItem(van);
console.log(van);


