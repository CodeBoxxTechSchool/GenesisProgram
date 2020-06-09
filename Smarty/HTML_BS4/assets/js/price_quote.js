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
             installationFee = elevatorPrice * (Standard*0.10; Premium*0.13; Excelium*0.16)
             totalPrice = costOfElevators + installationFee
******************************************************************* **/








/** ************* For commercial buildings computation ****************** **
  Compuration: costOfElevators = numberOfElevators * radio button selection
             installationFee = elevatorPrice * (Standard*0.10; Premium*0.13; Excelium*0.16)
             totalPrice = costOfElevators + installationFee
************************************************************************* **/

var commercialForm = document.getElementById('comForm');

commercialForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  
  
  var typeOfServiceValue = getTypeOfServiceValue('optradio2');
  var percentageOfService = getPercentageOfService(typeOfServiceValue);
  
  
  var installationFee = typeOfServiceValue * percentageOfService;
  var totalPrice = typeOfServiceValue + installationFee;
  
  var costOfElevatorsField = document.getElementById('cost-per-elevator-commercial');
  costOfElevatorsField.value = typeOfServiceValue ;
  
  var costOfInstallationField = document.getElementById('cost-of-installation-commercial');
  costOfInstallationField.value = installationFee;
  
  var totalPriceField = document.getElementById('total-price-commercial');
  totalPriceField.value = totalPrice;
})

function getTypeOfServiceValue(radioName) {
  var typeOfServices = document.getElementsByName(radioName);
  for(var i = 0;i<typeOfServices.length;i++){
    var radioInput = typeOfServices[i];
    if(radioInput.checked) return parseInt(radioInput.value);
  }
}

function getPercentageOfService(typeOfServiceValue) {
  if (typeOfServiceValue === 7565) {
    return 0.10;
  } else if(typeOfServiceValue === 12345) {
    return 0.13;
  } else {
    return 0.16;
  }
}  


/** ********** For corporate buildings computation ************** **
  Variables: totalNumFloors = numFloors + numBasements
             avgOccupants = maxOccupants * totalNumFloors
             totalElevators = avgOccupants / 1000
             costOfElevators = radio button selection * totalElevators
             installationFee = elevatorPrice * (Standard*0.10; Premium*0.13; Excelium*0.16)
             totalPrice = costOfElevators + installationFee
****************************************************************** **/

var corporateForm = document.getElementById('corForm');

corporateForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  
  var numFloorsCor = parseInt(document.getElementById('cornof').value);
  var numBasementsCor = parseInt(document.getElementById('cornob').value);
  var maxOccupantsCor = parseInt(document.getElementById('cormax').value);
  
  

  var totalNumFloorsCor = numFloorsCor + numBasementsCor;
  var avgOccupantsCor = maxOccupantsCor * totalNumFloorsCor;   
  var numberOfElevatorsCor = avgOccupantsCor / 1000;

  var typeOfServiceValueCor = getTypeOfServiceValueCor('optradio3');
  var percentageOfServiceCor = getPercentageOfServiceCor(typeOfServiceValueCor);
  
  var installationFeeCor = typeOfServiceValueCor * percentageOfServiceCor;
  var totalPriceCor = typeOfServiceValueCor + installationFeeCor;

  
  
  var numberOfElevatorsFieldCor = document.getElementById('required-elevator-corporate');
  numberOfElevatorsFieldCor.value = numberOfElevatorsCor;
  
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

function getPercentageOfServiceCor(typeOfServiceValueCor) {
  if (typeOfServiceValueCor === 7565) {
    return 0.10;
  } else if(typeOfServiceValueCor === 12345) {
    return 0.13;
  } else {
    return 0.16;
  }
}  




/** ********** For hybrid buildings computation ************** **
  Variables: totalNumFloors = numFloors + numBasements
             avgOccupants = maxOccupants * totalNumFloors
             totalElevators = avgOccupants / 1000
             costOfElevators = radio button selection * totalElevators
             installationFee = elevatorPrice * radio button selection
             totalPrice = costOfElevators + installationFee
************************************************************** **/

var hybridForm = document.getElementById('hyForm');

hybridForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  
  var numFloorsHy = parseInt(document.getElementById('hynof').value);
  var numBasementsHy = parseInt(document.getElementById('hynoba').value);
  var maxOccupantsHy = parseInt(document.getElementById('hymax').value);
  
  

  var totalNumFloorsHy = numFloorsHy + numBasementsHy;
  var avgOccupantsHy = maxOccupantsHy * totalNumFloorsHy;   
  var requiredElevator = avgOccupantsHy / 1000;

  var typeOfServiceValueHy = getTypeOfServiceValueHy('optradio4');
  var percentageOfServiceHy = getPercentageOfServiceHy(typeOfServiceValueHy);
  
  var installationFeeHy = typeOfServiceValueHy * percentageOfServiceHy;
  var totalPriceHy = typeOfServiceValueHy + installationFeeHy;

  
  
  var requiredElevatorField = document.getElementById('required-elevator-hybrid');
  requiredElevatorField.value = requiredElevator;
  
  var costOfElevatorsFieldHy = document.getElementById('cost-per-elevator-hybrid');
  costOfElevatorsFieldHy.value = typeOfServiceValueHy;
  
  var costOfInstallationFieldHy = document.getElementById('cost-of-installation-hybrid');
  costOfInstallationFieldHy.value = installationFeeHy;
  
  var totalPriceFieldHy = document.getElementById('total-price-hybrid');
  totalPriceFieldHy.value = totalPriceHy;
})

function getTypeOfServiceValueHy(radioName) {
  var typeOfServicesHy = document.getElementsByName(radioName);
  for(var i = 0;i<typeOfServicesHy.length;i++){
    var radioInput = typeOfServicesHy[i];
    if(radioInput.checked) return parseInt(radioInput.value);
  }
}

function getPercentageOfServiceHy(typeOfServiceValueHy) {
  if (typeOfServiceValueHy === 7565) {
    return 0.10;
  } else if(typeOfServiceValueHy === 12345) {
    return 0.13;
  } else {
    return 0.16;
  }
} 