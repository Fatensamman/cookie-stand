
'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
function randomint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min - 1) + min)
}
var seattle = {
    MinCustPerHour: 23,
    MaxCustPerHour: 65,
    AvgCookiesPerHour: 6.3,
    CostomersPerHour: [],
    CookiesPerHour: [],
    totalCookiesPerDay: 0,
    getCusAndCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var SingleHourCust = randomint(this.MinCustPerHour, this.MaxCustPerHour);
            this.CostomersPerHour.push(SingleHourCust);
            var SingleHourcookies = Math.ceil(this.CostomersPerHour[i] * this.AvgCookiesPerHour);
            this.CookiesPerHour.push(SingleHourcookies);
            this.totalCookiesPerDay = this.totalCookiesPerDay + SingleHourcookies;
        };
    },
    RenderElement: function () {
        var parent = document.getElementById('location');
        var branchName = document.createElement('h2');
        branchName.textContent = ('Seattle');
        parent.appendChild(branchName);
        var listLocation = document.createElement('ul');
        parent.appendChild(listLocation);
        var listItem;
        for (var i = 0; i < hours.length; i++) {
            listItem = document.createElement('li');
            listItem.textContent = (hours[i] + ' : ' + this.CookiesPerHour[i] + ' Cookies.');
            listLocation.appendChild(listItem);
        }
        listItem = document.createElement('li')
        listItem.textContent = ' Total :' + this.totalCookiesPerDay
        listLocation.appendChild(listItem)
    },
}
seattle.getCusAndCookiesPerHour();
seattle.RenderElement();
console.log(seattle)

var Tokyo = {
    MinCustPerHour: 3,
    MaxCustPerHour: 24,
    AvgCookiesPerHour: 1.2,
    CostomersPerHour: [],
    CookiesPerHour: [],
    totalCookiesPerDay: 0,
    getCusAndCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var SingleHourCust = randomint(this.MinCustPerHour, this.MaxCustPerHour);
            this.CostomersPerHour.push(SingleHourCust);
            var SingleHourcookies = Math.ceil(this.CostomersPerHour[i] * this.AvgCookiesPerHour);
            this.CookiesPerHour.push(SingleHourcookies);
            this.totalCookiesPerDay = this.totalCookiesPerDay + SingleHourcookies;
        };
    },
    RenderElement: function () {
        var parent = document.getElementById('location');
        var branchName = document.createElement('h2');
        branchName.textContent = ('Tokyo');
        parent.appendChild(branchName);
        var listLocation = document.createElement('ul');
        parent.appendChild(listLocation);
        var listItem;
        for (var i = 0; i < hours.length; i++) {
            listItem = document.createElement('li');
            listItem.textContent = (hours[i] + ' : ' + this.CookiesPerHour[i] + ' Cookies.');
            listLocation.appendChild(listItem);
        }
        listItem = document.createElement('li');
        listItem.textContent = ' Total :' + this.totalCookiesPerDay;
        listLocation.appendChild(listItem);
    },
}
Tokyo.getCusAndCookiesPerHour();
Tokyo.RenderElement();
console.log(Tokyo);

var Dubai = {
    MinCustPerHour: 11,
    MaxCustPerHour: 38,
    AvgCookiesPerHour: 3.7,
    CostomersPerHour: [],
    CookiesPerHour: [],
    totalCookiesPerDay: 0,
    getCusAndCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var SingleHourCust = randomint(this.MinCustPerHour, this.MaxCustPerHour);
            this.CostomersPerHour.push(SingleHourCust);
            var SingleHourcookies = Math.ceil(this.CostomersPerHour[i] * this.AvgCookiesPerHour);
            this.CookiesPerHour.push(SingleHourcookies);
            this.totalCookiesPerDay = this.totalCookiesPerDay + SingleHourcookies;
        };
    },
    RenderElement: function () {
        var parent = document.getElementById('location');
        var branchName = document.createElement('h2');
        branchName.textContent = ('Dubai');
        parent.appendChild(branchName);
        var listLocation = document.createElement('ul');
        parent.appendChild(listLocation);
        var listItem;
        for (var i = 0; i < hours.length; i++) {
            listItem = document.createElement('li');
            listItem.textContent = (hours[i] + ' : ' + this.CookiesPerHour[i] + ' Cookies.');
            listLocation.appendChild(listItem);
        }
        listItem = document.createElement('li')
        listItem.textContent = ' Total :' + this.totalCookiesPerDay
        listLocation.appendChild(listItem)
    },
}
Dubai.getCusAndCookiesPerHour();
Dubai.RenderElement();
console.log(Dubai);

var Paris = {
    MinCustPerHour: 20,
    MaxCustPerHour: 38,
    AvgCookiesPerHour: 2.3,
    CostomersPerHour: [],
    CookiesPerHour: [],
    totalCookiesPerDay: 0,
    getCusAndCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var SingleHourCust = randomint(this.MinCustPerHour, this.MaxCustPerHour);
            this.CostomersPerHour.push(SingleHourCust);
            var SingleHourcookies = Math.ceil(this.CostomersPerHour[i] * this.AvgCookiesPerHour);
            this.CookiesPerHour.push(SingleHourcookies);
            this.totalCookiesPerDay = this.totalCookiesPerDay + SingleHourcookies;
        };
    },
    RenderElement: function () {
        var parent = document.getElementById('location');
        var branchName = document.createElement('h2');
        branchName.textContent = ('Tokyo');
        parent.appendChild(branchName);
        var listLocation = document.createElement('ul');
        parent.appendChild(listLocation);
        var listItem;
        for (var i = 0; i < hours.length; i++) {
            listItem = document.createElement('li');
            listItem.textContent = (hours[i] + ' : ' + this.CookiesPerHour[i] + ' Cookies.');
            listLocation.appendChild(listItem);
        }
        listItem = document.createElement('li')
        listItem.textContent = ' Total :' + this.totalCookiesPerDay
        listLocation.appendChild(listItem)
    },
}
Paris.getCusAndCookiesPerHour();
Paris.RenderElement();
console.log(Paris);

var Lima = {
    MinCustPerHour: 2,
    MaxCustPerHour: 16,
    AvgCookiesPerHour: 4.6,
    CostomersPerHour: [],
    CookiesPerHour: [],
    totalCookiesPerDay: 0,

    getCusAndCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var SingleHourCust = randomint(this.MinCustPerHour, this.MaxCustPerHour);
            this.CostomersPerHour.push(SingleHourCust);
            var SingleHourcookies = Math.ceil(this.CostomersPerHour[i] * this.AvgCookiesPerHour);
            this.CookiesPerHour.push(SingleHourcookies);
            this.totalCookiesPerDay = this.totalCookiesPerDay + SingleHourcookies;
        };
    },
    RenderElement: function () {
        var parent = document.getElementById('location');
        var branchName = document.createElement('h2');
        branchName.textContent = ('Tokyo');
        parent.appendChild(branchName);
        var listLocation = document.createElement('ul');
        parent.appendChild(listLocation);
        var listItem;
        for (var i = 0; i < hours.length; i++) {
            listItem = document.createElement('li');
            listItem.textContent = (hours[i] + ' : ' + this.CookiesPerHour[i] + ' Cookies.');
            listLocation.appendChild(listItem);
        }
        listItem = document.createElement('li')
        listItem.textContent = ' Total :' + this.totalCookiesPerDay
        listLocation.appendChild(listItem)
    },
}
Lima.getCusAndCookiesPerHour();
Lima.RenderElement();
console.log(Lima);