
'use strict';
var allBranches = []
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
    '6pm', '7pm']
// create a constructor;
function SalmonBranches(branchName, MinCustPerHour, MaxCustPerHour, AvgCookiesPerHour) {
    this.branchName = branchName;
    this.MinCustPerHour = MinCustPerHour;
    this.MaxCustPerHour = MaxCustPerHour;
    this.AvgCookiesPerHour = AvgCookiesPerHour;
    this.CostomersPerHour = [];
    this.CookiesPerHour = [];
    this.totalCookiesPerDay = 0;
    allBranches.push(this);
}
// var allBr = SalmonBranches.prototype.allBranches = [];
SalmonBranches.prototype.getCusPerHour = function () {
    var SingleHourCust;
    for (var i = 0; i < hours.length; i++) {
        SingleHourCust = randomint(this.MinCustPerHour, this.MaxCustPerHour);
        this.CostomersPerHour.push(SingleHourCust);
    };
};
SalmonBranches.prototype.getCookiesPerHour = function () {
    var SingleHourcookies;
    for (var i = 0; i < hours.length; i++) {
        SingleHourcookies = Math.ceil(this.CostomersPerHour[i] * this.AvgCookiesPerHour);
        this.CookiesPerHour.push(SingleHourcookies);
        this.totalCookiesPerDay = this.totalCookiesPerDay + SingleHourcookies;
    };
};

// creating objects
var seattle = new SalmonBranches('Seattle', 23, 65, 6.3);
var Tokyo = new SalmonBranches('Tokyo', 3, 24, 1.2);
var Dubai = new SalmonBranches('Dubai', 11, 38, 3.7);
var Paris = new SalmonBranches('Paris', 20, 38, 2.3);
var Lima = new SalmonBranches('Lima', 2, 16, 4.6);


//adding table 
var objsection = document.getElementById('objsection');
var salesTable = document.createElement('table');
salesTable.setAttribute('class', 'border_class');
objsection.appendChild(salesTable);
tableHead()
tableBody()
// tablefooter()


// functions
// random number function
function randomint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min - 1)) + min
};


// table header
function tableHead() {
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
};
//table body
function tableBody() {
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

    
        for (var i = 0; i < allBranches.length; i++) {
            allBranches[i].getCusPerHour();
            allBranches[i].getCookiesPerHour()
            allBranches[i].render();
        }
    };
    var totalcell;
function tablefooter() {
    totalcell = document.createElement('tr');
    var NameTotal = document.createElement('td')
    NameTotal.textContent = 'Total';
    totalcell.appendChild(NameTotal);
    salesTable.appendChild(totalcell);
    var sumTotal = 0;
    for (var i = 0; i < hours.length; i++) {
        var EachHour = document.createElement('td');
        var inHour = 0;
        var totalPerHour = [];
        for (var x = 0; x < allBranches.length; x++) {
            inHour = inHour + allBranches[x].CookiesPerHour[i];
        }
        EachHour.textContent = inHour;
        totalcell.appendChild(EachHour);
        sumTotal = sumTotal + inHour;
    }
    var Sumation = document.createElement('td');
    Sumation.textContent = sumTotal;
    totalcell.appendChild(Sumation);
}

var LocationForm = document.getElementById('LocationForm')
LocationForm.addEventListener('submit',submitter);
function submitter (event){
    event.preventDefault()
    var Name = event.target.nameFeild.value;
    var mincust = event.target.minCust.value;
    var maxcust = event.target.maxCust.value;
    var avgCookies = event.target.avgCookies.value;
    var addedLocation = new SalmonBranches(Name, mincust, maxcust, avgCookies);
    addedLocation.getCusPerHour();
    addedLocation.getCookiesPerHour();
    addedLocation.render()
    var last = document.getElementById('totalcell')
    totalcell.textContent=''
    tablefooter()

};

tablefooter()