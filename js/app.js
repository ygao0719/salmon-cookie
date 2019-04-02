
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// 1st and pike store.
var pike = {
  minCus: 23,
  maxCus:65,
  ave: 6.3,
  cookiesPerHour:[],
  people:[],
  customers: function(){
    for(var i = 0; i < hours.length; i++ )
      this.people.push(Math.floor(Math.random() * Math.floor(this.maxCus)));
  },
  cookies: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesPerHour.push(Math.floor(this.people[i] * this.ave));
    }
  },
  totalNum: function(){
    var total = 0;
    for(var i = 0; i < hours.length; i++){
      total += this.cookiesPerHour[i];
    }
    return total;
  }
};
pike.customers();
pike.cookies();

var ulEl = document.getElementById('pike');
for (var i =0; i < hours.length; i++){
  var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ': ' + pike.cookiesPerHour[i] + ' cookies.';
  ulEl.appendChild(liEl);
}
liEl = document.createElement('li');
liEl.textContent = 'Total: ' + pike.totalNum() + ' cookies';
ulEl.appendChild(liEl);



//seatac store.
var seaTac = {
  minCus: 3,
  maxCus:24,
  ave: 1.2,
  cookiesPerHour:[],
  people:[],

  customers: function(){
    for(var i = 0; i < hours.length; i++ )
      this.people.push(Math.floor(Math.random() * Math.floor(this.maxCus)));
  },
  cookies: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesPerHour.push(Math.floor(this.people[i] * this.ave));
    }
  },
  totalNum: function(){
    var total = 0;
    for(var i = 0; i < hours.length; i++){
      total += this.cookiesPerHour[i];
    }
    return total;
  }
};

seaTac.customers();
seaTac.cookies();
ulEl = document.getElementById('seaTac');
for (i =0; i < hours.length; i++){
  liEl = document.createElement('li');
  liEl.textContent = hours[i] + ': ' + seaTac.cookiesPerHour[i] + ' cookies.';
  ulEl.appendChild(liEl);
}
liEl = document.createElement('li');
liEl.textContent = 'Total: ' + seaTac.totalNum() + ' cookies';
ulEl.appendChild(liEl);

//Seattle Center.
var sea = {
  minCus: 23,
  maxCus:65,
  ave: 6.3,
  cookiesPerHour:[],
  people:[],

  customers: function(){
    for(var i = 0; i < hours.length; i++ )
      this.people.push(Math.floor(Math.random() * Math.floor(this.maxCus)));
  },
  cookies: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesPerHour.push(Math.floor(this.people[i] * this.ave));
    }
  },
  totalNum: function(){
    var total = 0;
    for(var i = 0; i < hours.length; i++){
      total += this.cookiesPerHour[i];
    }
    return total;
  }
};

sea.customers();
sea.cookies();
ulEl = document.getElementById('sea');
for (i =0; i < hours.length; i++){
  liEl = document.createElement('li');
  liEl.textContent = hours[i] + ': ' + sea.cookiesPerHour[i] + ' cookies.';
  ulEl.appendChild(liEl);
}
liEl = document.createElement('li');
liEl.textContent = 'Total: ' + sea.totalNum() + ' cookies';
ulEl.appendChild(liEl);

//capitol hill
var cap = {
  minCus: 23,
  maxCus:65,
  ave: 6.3,
  cookiesPerHour:[],
  people:[],

  customers: function(){
    for(var i = 0; i < hours.length; i++ )
      this.people.push(Math.floor(Math.random() * Math.floor(this.maxCus)));
  },
  cookies: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesPerHour.push(Math.floor(this.people[i] * this.ave));
    }
  },
  totalNum: function(){
    var total = 0;
    for(var i = 0; i < hours.length; i++){
      total += this.cookiesPerHour[i];
    }
    return total;
  }
};
cap.customers();
cap.cookies();
ulEl = document.getElementById('cap');
for (i =0; i < hours.length; i++){
  liEl = document.createElement('li');
  liEl.textContent = hours[i] + ': ' + cap.cookiesPerHour[i] + ' cookies.';
  ulEl.appendChild(liEl);

}
liEl = document.createElement('li');
liEl.textContent = 'Total: ' + cap.totalNum() + ' cookies';
ulEl.appendChild(liEl);



//Alki store
var alki = {
  minCus: 23,
  maxCus:65,
  ave: 6.3,
  cookiesPerHour:[],
  people:[],

  customers: function(){
    for(var i = 0; i < hours.length; i++ )
      this.people.push(Math.floor(Math.random() * Math.floor(this.maxCus)));
  },
  cookies: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesPerHour.push(Math.floor(this.people[i] * this.ave));
    }
  },
  totalNum: function(){
    var total = 0;
    for(var i = 0; i < hours.length; i++){
      total += this.cookiesPerHour[i];
    }
    return total;
  }
};
alki.customers();
alki.cookies();
ulEl= document.getElementById('alki');
for ( i =0; i < hours.length; i++){
  liEl = document.createElement('li');
  liEl.textContent = hours[i] + ': ' + alki.cookiesPerHour[i] + ' cookies.';
  ulEl.appendChild(liEl);
}
liEl = document.createElement('li');
liEl.textContent = 'Total: ' + sea.totalNum() + ' cookies';
ulEl.appendChild(liEl);

