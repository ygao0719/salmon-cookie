'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var allStore = [];
function Store (locationName,minCus,maxCus,ave) {
  this.locationName = locationName;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.ave = ave;
  this.cookiesPerHour=[];
  this.people=[];
  allStore.push(this);
  this.render();
}

Store.prototype.customers=function(){
  for(var i = 0; i < hours.length; i++ ){
    this.people.push(Math.floor(Math.random() * (this.maxCus-this.minCus +1))+this.minCus);
  }
};

Store.prototype.cookies=function(){
  this.customers();
  for(var i = 0; i < hours.length; i++){
    this.cookiesPerHour.push(Math.ceil(this.people[i] * this.ave));
  }
};
Store.prototype.totalNum=function(){
  this.cookies();
  var total = 0;
  for(var i = 0; i < hours.length; i++){
    total += this.cookiesPerHour[i];
  }
  return total;
};

Store.prototype.render=function(){
  this.totalNum();
  // make a tr
  var trEl = document.createElement('tr');
  // create, content, append for store location column
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);

};
//create a table frame.
function tableForStores(){
  var storeTable = document.getElementById('main');
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
      thEl.textContent = 'Daily\n Location \n Total';
      trEl.appendChild(thEl);
    }
  }

  var footer = storeTable.createTFoot();
  var row = footer.insertRow(0);
  var cell = row.insertCell(-1);
  cell.innerHTML = '<b>Total</b>';

  storeTable.appendChild(trEl);

}


tableForStores();
new Store('1st and Pike','23','65','6.3');
new Store('SeaTac Airport','3','24','1.2');
new Store('Seattle Center','11','38','3.7');
new Store('Capitol Hill','20','38','2.3');
new Store('Alki','2','16','4.6');









