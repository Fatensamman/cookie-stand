
'use strict';

// create a constructor;
// var allBranches = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
function randomint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min - 1) + min)
}
function SalmonBranches(branchName, MinCustPerHour, MaxCustPerHour, AvgCookiesPerHour) {
    this.branchName = branchName;
    this.MinCustPerHour = MinCustPerHour;
    this.MaxCustPerHour = MaxCustPerHour;
    this.AvgCookiesPerHour = AvgCookiesPerHour;
    this.CostomersPerHour = [];
    this.CookiesPerHour = [];
    this.totalCookiesPerDay = 0;
    SalmonBranches.prototype.allBranches.push(this);
}
var allBr = SalmonBranches.prototype.allBranches = [];
SalmonBranches.prototype.getCusAndCookiesPerHour = function () {
    var SingleHourCust;
    var SingleHourcookies;
    for (var i = 0; i < hours.length; i++) {
        SingleHourCust = randomint(this.MinCustPerHour, this.MaxCustPerHour);
        this.CostomersPerHour.push(SingleHourCust);
        SingleHourcookies = Math.ceil(this.CostomersPerHour[i] * this.AvgCookiesPerHour);
        this.CookiesPerHour.push(SingleHourcookies);
        this.totalCookiesPerDay = this.totalCookiesPerDay + SingleHourcookies;
    };
};
var seattle = new SalmonBranches('Seattle', 23, 65, 6.3);
var Tokyo = new SalmonBranches('Tokyo', 3, 24, 1.2);
var Dubai = new SalmonBranches('Dubai', 11, 38, 3.7);
var Paris = new SalmonBranches('Paris', 20, 38, 2.3);
var Lima = new SalmonBranches('Lima', 2, 16, 4.6);
seattle.getCusAndCookiesPerHour();
Tokyo.getCusAndCookiesPerHour();
Dubai.getCusAndCookiesPerHour();
Paris.getCusAndCookiesPerHour();
Lima.getCusAndCookiesPerHour();
console.log(seattle);

//render in table 

var objsection = document.getElementById('objsection');
var salesTable = document.createElement('table');
salesTable.setAttribute('class', 'border_class');
objsection.appendChild(salesTable);


// table header
var Naming = document.createElement('tr');
salesTable.appendChild(Naming);
var topHeader = document.createElement('th');
topHeader.textContent = "Branch Name";
Naming.appendChild(topHeader);

for (var i = 0; i < hours.length; i++) {
    topHeader = document.createElement('th');
    topHeader.textContent = hours[i];
    Naming.appendChild(topHeader);
};
topHeader = document.createElement('th');
topHeader.textContent = "Total Per Day";
Naming.appendChild(topHeader);

// table body
SalmonBranches.prototype.render = function () {
    var namecell = document.createElement('tr');
    var branchData = document.createElement('td');
    branchData.textContent = this.branchName;
    namecell.appendChild(branchData);

    for (var i = 0; i < hours.length; i++) {
        branchData = document.createElement('td');
        branchData.textContent = this.CookiesPerHour[i];
        namecell.appendChild(branchData);
    }
    branchData = document.createElement('td');
    branchData.textContent = this.totalCookiesPerDay;
    namecell.appendChild(branchData);
    salesTable.appendChild(namecell);
};
function renderAll() {
    for (var i = 0; i < allBr.length; i++) {
        allBr[i].render();
    }
};
// table footer
// just a try
// getTotalhour()
// function getTotalhour() {
//     var totalPerHour = [];
//     var sumTotal = 0;
//     for (var i = 0; i < hours.length; i++) {
//       var inHour = 0;
//       for (var x = 0; x< allBr.length; x++) {
//         inHour = inHour + allBr[x]. CookiesPerHour[x];
//       }
//       totalPerHour.push(inHour);
//       sumTotal = sumTotal + inHour;
//     }
//     return [totalPerHour, sumTotal];
//   }
// console.log(getTotalhour())
renderAll()

