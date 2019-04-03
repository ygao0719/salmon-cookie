'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var storeCookiePerHour = [];
var allStore = [];
var newStore = document.getElementById('newStore');

function Store (locationName,minCus,maxCus,ave) {
  this.locationName = locationName;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.ave = ave;
  this.cookiesPerHour=[];
  this.people=[];
  allStore.push(this);
}
new Store('1st and Pike',23,65,6.3);
new Store('SeaTac Airport',3,24,1.2);
new Store('Seattle Center',11,38,3.7);
new Store('Capitol Hill',20,38,2.3);
new Store('Alki',2,16,4.6);


Store.prototype.customers=function(){
  for(var i = 0; i < hours.length; i++ ){
    this.people.push(Math.floor(Math.random() * (this.maxCus-this.minCus+1)+this.minCus));
  }
};

Store.prototype.cookies=function(){
  this.customers();
  for(var i = 0; i < hours.length; i++){
    this.cookiesPerHour.push(Math.ceil(this.people[i] * this.ave));
  }
};
Store.prototype.totalNum=function(){
  var total = 0;
  for(var i = 0; i < hours.length; i++){
    total += this.cookiesPerHour[i];
  }
  return total;
};

Store.prototype.render=function(){
  this.cookies();

  var storeTable = document.getElementById('t-body');
  // make a tr
  var trEl = document.createElement('tr');
  // create, content, append for store location column
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalNum();
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
};

//create a table head.
function tableHead(){
  var storeTable = document.getElementById('t-head');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = ' ';
  trEl.appendChild(thEl);

  for (var i = 0; i< hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
    if (i === hours.length-1){
      thEl = document.createElement('th');
      thEl.textContent = 'Daily Location Total';
      trEl.appendChild(thEl);
      storeTable.appendChild(trEl);
    }
  }
}

function renderStore() {
  
  for (var i = 0; i < allStore.length; i++) {
    allStore[i].render();
  }
}

//calculate hourly total cookies for all five stores.
function totalAtFooter(){
  storeCookiePerHour = [];
  for (var i = 0; i < hours.length; i ++){
    var totalCookiePerHour = 0;
    for (var j =0; j < allStore.length; j++){
      totalCookiePerHour += allStore[j].cookiesPerHour[i];
    }
    storeCookiePerHour.push(totalCookiePerHour);
  }
  var footData = document.getElementById('main');
  
  var trEl = document.createElement('tr');
  trEl.id = 'total-row';
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);
  //print last row.
  for (i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = storeCookiePerHour[i];
    trEl.appendChild(tdEl);
  }
  //total cookies from all stores.
  var totalAllStore = 0;
  for (i =0;i<hours.length;i++){
    totalAllStore += storeCookiePerHour[i];
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalAllStore;
  trEl.appendChild(tdEl);

  footData.appendChild(trEl);
}
// Event listener for comment submission form
newStore.addEventListener('submit', handleNewStore);

function handleNewStore(event){
  //prevents page reload on a 'submit' event
  event.preventDefault();

  var newStoreName = event.target.storeName.value;
  var newMinCus = event.target.minCus.value;
  var newMaxCus = event.target.maxCus.value;
  var newAve = event.target.ave.value;
  var newInput = new Store(newStoreName,newMinCus,newMaxCus,newAve);

  // This empties the form fields after the data has been grabbed
  event.target.storeName.value = null;
  event.target.minCus.value = null;
  event.target.maxCus.value = null;
  event.target.ave.value = null;

  newInput.render();
  totalAtFooter();
}
function boomRow(){
  var totalRow = document.getElementById('total-row');
  if (totalRow ){
    totalRow.remove();
  }
}

//function call.
tableHead();
renderStore();
totalAtFooter();
boomRow();
