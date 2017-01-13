$(document).ready(function(){
var text = localStorage.getItem('projectDetailStringLocal');
var obj = JSON.parse(text);
console.log(obj);
//var myJSON = JSON.stringify(myObj);
//alert(obj);
$("#txtProjectName").append(obj.projectName);
$("#txtprojectCode").append(obj.projectCode);
$("#txtCurrency").append(obj.Currency);
$("#txtcustomer").append(obj.customer);
$("#type").append(obj.type);
$("#txtprojectManager").append(obj.manager);
$("#txtProjectStatus").append(obj.status);
$("#txtProjectStartDate").append(obj.startDate);
$("#txtProjectClosureDate").append(obj.endDate);
});