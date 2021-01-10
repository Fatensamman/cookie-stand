
'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10am', '11am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']
function randomint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}
var seattle = {
    MinCustPerHour: 23,
    MaxCustPerHour: 65,
    AvgCookiesPerHour: 6.3,
    CostomersPerHour : [],
    CookiesPerHour : [],
    totalCookiesPerDay: 0,

    getCusAndCookiesPerHour: function(){

        for (var i = 0; i < hours.length; i++){

            var SingleHourCust = randomint(this.MinCustPerHour, this.MaxCustPerHour);
            this.CostomersPerHour.push(SingleHourCust);
            var SingleHourcookies = Math.floor(this.CostomersPerHour[i] * this.AvgCookiesPerHour);
            this.CookiesPerHour.push(SingleHourcookies);
            this.totalCookiesPerDay = this.totalCookiesPerDay + this.CookiesPerHour;
        }
    },
}

var Tokyo = {
    MinCustPerHour: 3,
    MaxCustPerHour: 24,
    AvgCookiesPerHour: 1.2,
    CostomersPerHour : [],
    CookiesPerHour : [],
    totalCookiesPerDay: 0,

    getCusAndCookiesPerHour: function(){

        for (var i = 0; i < hours.length; i++){

            var SingleHourCust = randomint(this.MinCustPerHour, this.MaxCustPerHour);
            this.CostomersPerHour.push(SingleHourCust);
            var SingleHourcookies = Math.floor(this.CostomersPerHour[i] * this.AvgCookiesPerHour);
            this.CookiesPerHour.push(SingleHourcookies);
            this.totalCookiesPerDay = this.totalCookiesPerDay + this.CookiesPerHour;
        }
    },
}

var Dubai = {
    MinCustPerHour: 11,
    MaxCustPerHour: 38,
    AvgCookiesPerHour: 3.7,
    CostomersPerHour : [],
    CookiesPerHour : [],
    totalCookiesPerDay: 0,

    getCusAndCookiesPerHour: function(){

        for (var i = 0; i < hours.length; i++){

            var SingleHourCust = randomint(this.MinCustPerHour, this.MaxCustPerHour);
            this.CostomersPerHour.push(SingleHourCust);
            var SingleHourcookies = Math.floor(this.CostomersPerHour[i] * this.AvgCookiesPerHour);
            this.CookiesPerHour.push(SingleHourcookies);
            this.totalCookiesPerDay = this.totalCookiesPerDay + this.CookiesPerHour;
        }
    },
}

var Paris = {
    MinCustPerHour: 20,
    MaxCustPerHour: 38,
    AvgCookiesPerHour: 2.3,
    CostomersPerHour : [],
    CookiesPerHour : [],
    totalCookiesPerDay: 0,

    getCusAndCookiesPerHour: function(){

        for (var i = 0; i < hours.length; i++){

            var SingleHourCust = randomint(this.MinCustPerHour, this.MaxCustPerHour);
            this.CostomersPerHour.push(SingleHourCust);
            var SingleHourcookies = Math.floor(this.CostomersPerHour[i] * this.AvgCookiesPerHour);
            this.CookiesPerHour.push(SingleHourcookies);
            this.totalCookiesPerDay = this.totalCookiesPerDay + this.CookiesPerHour;
        }
    },
}

var Lima = {
    MinCustPerHour: 2,
    MaxCustPerHour: 16,
    AvgCookiesPerHour: 4.6,
    CostomersPerHour : [],
    CookiesPerHour : [],
    totalCookiesPerDay: 0,

    getCusAndCookiesPerHour: function(){

        for (var i = 0; i < hours.length; i++){

            var SingleHourCust = randomint(this.MinCustPerHour, this.MaxCustPerHour);
            this.CostomersPerHour.push(SingleHourCust);
            var SingleHourcookies = Math.floor(this.CostomersPerHour[i] * this.AvgCookiesPerHour);
            this.CookiesPerHour.push(SingleHourcookies);
            this.totalCookiesPerDay = this.totalCookiesPerDay + this.CookiesPerHour;
        }
    },
}

