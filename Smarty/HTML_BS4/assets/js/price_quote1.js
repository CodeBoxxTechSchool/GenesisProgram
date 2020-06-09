/** ********************************************** **
	@Author			Herbert Magramo
	@Website		info.codebox.biz
	@Last Update	Thursay, February 22, 2018

	NOTE! 	Price quotation for Rocket Elevators
*************************************************** **/



/** ********** For residential buildings computation ************** **
  Variables: avgFloors = number of apartments / number of floors
             (Note: if the number of floors > 20 add 1 column
              if added 20 more another 1column to be added)
             totalElevators = avgFloors /6
             costOfElevators = radio button selection * totalElevators
             installationFee = elevatorPrice * percentageOfServie (Standard*0.10; Premium*0.13; Excelium*0.16)
             totalPrice = costOfElevators + installationFee
******************************************************************* **/

var residentialForm = document.getElementById('resForm');

residentialForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var typeOfServiceValueRes = getTypeOfServiceValueRes('optradio1');
  var costOfElevatorsFieldRes = document.getElementById('cost-per-elevator-residential');
  costOfElevatorsFieldRes.value = typeOfServiceValueRes;
  
  var costOfInstallationFieldRes = document.getElementById('cost-of-installation-residential');
  costOfInstallationFieldRes.value = installationFeeRes;
  
  var totalPriceFieldRes = document.getElementById('total-price-residential');
  totalPriceFieldRes.value = totalPriceRes;


})

function getTypeOfServiceValue(radioName) {
  var typeOfServicesRes = document.getElementsByName(radioName);
  for(var i = 0;i<typeOfServicesRes.length;i++){
    var radioInput = typeOfServicesRes[i];
    if(radioInput.checked) return parseInt(radioInput.value);
  }
}







/** ************* For commercial buildings computation ****************** **
  Compuration: costOfElevators = radio button selection
               installationFee = elevatorPrice * percentageOfServie (Standard*0.10; Premium*0.13; Excelium*0.16)
               totalPrice = costOfElevators + installationFee
************************************************************************* **/

var commercialForm = document.getElementById('comForm');

commercialForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  
  
  var typeOfServiceValueCom = getTypeOfServiceValueCom('optradio2');

function getPercentageOfServiceCom () { 
  var percentageOfService = typeOfServiceValue;
  if (percentageOfService === 7565) {
    percentageOfService = 7565 * 0.10;
  }
  else{
    if (percentageOfService === 12345) {
      percentageOfService = 12345 * 0.13;
    }
    else {
      percentageOfService = 15400 * 0.16;
    }
  }
}  

  var installationFeeCom = costOfElevators * percentageOfService ;
  var totalPriceCom = costOfElevatorsCom + installationFeeCom;
  
  var costOfElevatorsFieldCom = document.getElementById('cost-per-elevator-commercial');
  costOfElevatorsFieldCom.value = typeOfServiceValueCom;
  
  var costOfInstallationFieldCom = document.getElementById('cost-of-installation-commercial');
  costOfInstallationFieldCom.value = installationFeeCom;
  
  var totalPriceFieldCom = document.getElementById('total-price-commercial');
  totalPriceFieldCom.value = totalPriceCom;
})

function getTypeOfServiceValue(radioName) {
  var typeOfServices = document.getElementsByName(radioName);
  for(var i = 0;i<typeOfServices.length;i++){
    var radioInput = typeOfServices[i];
    if(radioInput.checked) return parseInt(radioInput.value);
  }
}






/** ********** For corporate buildings computation ************** **
  Variables: totalNumFloors = numFloors + numBasements
             avgOccupants = maxOccupants + totalNumFloors
             totalElevators = avgOccupants / 1000
             costOfElevators = radio button selection
             installationFee = elevatorPrice * percentageOfServie (Standard*0.10; Premium*0.13; Excelium*0.16)
             totalPrice = costOfElevators + installationFee
****************************************************************** **/
var corporateForm = document.getElementById('corForm');

corporateForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var typeOfServiceValueCor = getTypeOfServiceValueCor('optradio3');
  
  
  var costOfElevatorsFieldCor = document.getElementById('cost-per-elevator-corporate');
  costOfElevatorsFieldCor.value = typeOfServiceValueCor;
  
  var costOfInstallationFieldCor = document.getElementById('cost-of-installation-corporate');
  costOfInstallationFieldCor.value = installationFeeCor;
  
  var totalPriceFieldCor = document.getElementById('total-price-corporate');
  totalPriceFieldCor.value = totalPriceCor;


})

function getTypeOfServiceValueCor(radioName) {
  var typeOfServicesCor = document.getElementsByName(radioName);
  for(var i = 0;i<typeOfServicesCor.length;i++){
    var radioInput = typeOfServicesCor[i];
    if(radioInput.checked) return parseInt(radioInput.value);
  }
}


/** ********** For hybrid buildings computation ************** **
  Variables: totalNumFloors = numFloors + numBasements
             avgOccupants = maxOccupants + totalNumFloors
             totalElevators = avgOccupants / 1000
             costOfElevators = radio button selection
             installationFee = elevatorPrice * percentageOfServie (Standard*0.10; Premium*0.13; Excelium*0.16)
             totalPrice = costOfElevators + installationFee
************************************************************** **/

var hybridForm = document.getElementById('hyForm');

hybridForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var typeOfServiceValueHy = getTypeOfServiceValueHy('optradio4');
  
  
  var costOfElevatorsFieldHy = document.getElementById('cost-per-elevator-hybrid');
  costOfElevatorsFieldHy.value = typeOfServiceValueHy;
  
  var costOfInstallationFieldHy = document.getElementById('cost-of-installation-hybrid');
  costOfInstallationFieldHy.value = installationFeeHy;
  
  var totalPriceFieldHy = document.getElementById('total-price-hybrid');
  totalPriceFieldHy.value = totalPriceHy;


})

function getTypeOfServiceValue(radioName) {
  var typeOfServices = document.getElementsByName(radioName);
  for(var i = 0;i<typeOfServices.length;i++){
    var radioInput = typeOfServices[i];
    if(radioInput.checked) return parseInt(radioInput.value);
  }
}