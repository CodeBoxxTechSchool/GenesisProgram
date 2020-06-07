/** ********************************************** **
	@Author			Herbert Magramo
	@Website		info.codebox.biz
	@Last Update	Thursay, February 22, 2018

	NOTE! 	Price quotation for Rocket Elevators
*************************************************** **/



/** ********** For residential buildings computation ************** **
  Variables: avgFloors = number of apartments / number of floors
             (Note: if the number of floors > 20 add 1 column)
             totalElevators = avgFloors /6
             costOfElevators = radio button selection * totalElevators
             installationFee = elevatorPrice * radio button selection
             totalPrice = costOfElevators + installationFee
******************************************************************* **/


function get





/** ************* For commercial buildings computation ****************** **
  Compuration: costOfElevators = numberOfElevators * radio button selection
             installationFee = elevatorPrice * radio button selection
             totalPrice = costOfElevators + installationFee
************************************************************************* **/

var type_of_services = new Array();
    type_of_services ["comtosStan"] = 7565;
    type_of_services ["comtosPre"] = 12345;
    type_of_services ["comtosExce"] = 15400;

function getTypeOfService () {
    var typeOfService = 0;
    var theForm = document.forms["commercialform"]
    var selectedService = theForm.elements["selectedservice"];
    for (var i = 0; i < selectedService.length; i++) {
        if (selectedService[i].checked) {
            typeOfService = type_of_services[selectedServices[i].value];
            break;
        }
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

