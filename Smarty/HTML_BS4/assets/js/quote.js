

var theForm = document.forms ["elevatorform"];

var BUILDING_TYPE_RESIDENTIAL = "residential";
var BUILDING_TYPE_COMMERCIAL = "commercial";
var BUILDING_TYPE_CORPORATE = "corporate";
var BUILDING_TYPE_HYBRID = "hybrid";

var installationPrices = new Array ();
Installation["Standard"]=20;
Installation["Premium"]=25;
Installation["Excelium"]=35;

function getInstallationPrice()
{
    var installationPrice=0;
    var theForm = document.forms["elevatorform"];
    var selectedInstallation = theForm.elements["selectedInstallation"];
    for (var i = 0; i < selectedInstallation.lenght; i++)
    {
        if(selectedInstallation[i].checked)
        {
        installationPrice = installationPrices[selectedInstallation[i].value];
        break;
    }
 }    
 return installationPrice
}

function getTotal()
{
    var installationPrice = installationPrice;

    //display the result
    document.getElementById('installationPrice').innerHTML =
                                      "Total Price For Installation $"+installationPrice;

}




























// function residentialBuilding(number_of_apartments, number_of_floors, number_of_basements) 
// {
// }
// function commercialBuilding(number_of_floors, number_of_basements, number_of_companies, number_of_parking_spots, number_of_elevators) 
// {
// }
// function corporateBuilding(number_of_floors, numbers_of_basements, number_of_parking_spots, number_of_corporations, maximum_occupancy)
// {    
// }
// function hybridBuilding(number_of_floors, numbers_of_basements, number_of_companies, number_of_parking_spots, maximum_occupancy, business_hours)
// {    
// }

// //noms de variables, faire les 4 fonctions, fonction qui handle le show-hide (toggle), fonction de peser sur le bouton (laquelle est caller).