var strMealCost = 45.67;
var strServiceChargePercent = 12.5;

var strTotalBill = strMealCost * (strServiceChargePercent/100);

document.write("Your total bill, including the service charge, is £"+strTotalBill);

alert ("Your total bill, rounded to two decimal points, is £"+strTotalBill.toFixed(2));