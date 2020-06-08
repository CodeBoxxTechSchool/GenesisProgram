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
             installationFee = elevatorPrice * radio button selection
             totalPrice = costOfElevators + installationFee
******************************************************************* **/








/** ************* For commercial buildings computation ****************** **
  Compuration: costOfElevators = numberOfElevators * radio button selection
             installationFee = elevatorPrice * radio button selection
             totalPrice = costOfElevators + installationFee
************************************************************************* **/

var commercialForm = document.getElementById('comForm');

commercialForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  
  var numberOfElevators = parseInt(document.getElementById('comnoe').value);
  var typeOfServiceValue = getTypeOfServiceValue('optradio2');
  var costOfElevators = numberOfElevators * typeOfServiceValue;
  var installationFee = costOfElevators * typeOfServiceValue;
  var totalPrice = costOfElevators + installationFee;
  
  var costOfElevatorsField = document.getElementById('cost-per-elevator-commercial');
  costOfElevatorsField.value = costOfElevators;
  
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












/** ********** For corporate buildings computation ************** **
  Variables: totalNumFloors = numFloors + numBasements
             avgOccupants = maxOccupants + totalNumFloors
             totalElevators = avgOccupants / 1000
             costOfElevators = radio button selection * totalElevators
             installationFee = elevatorPrice * radio button selection
             totalPrice = costOfElevators + installationFee
****************************************************************** **/






/** ********** For hybrid buildings computation ************** **
  Variables: totalNumFloors = numFloors + numBasements
             avgOccupants = maxOccupants + totalNumFloors
             totalElevators = avgOccupants / 1000
             costOfElevators = radio button selection * totalElevators
             installationFee = elevatorPrice * radio button selection
             totalPrice = costOfElevators + installationFee
************************************************************** **/

