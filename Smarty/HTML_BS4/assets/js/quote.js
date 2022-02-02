
$(document).ready(function() {
    hideAllFields();
    $("#building-type").on("change", function() {
        
        refreshFields()
        
    })
})

// Show appropriate fields based on building type
function refreshFields() {
    // Hide all fields
    hideAllFields()

    let buildingType = $("#building-type").val()
    // Show appropriate fields

    if(buildingType == BUILDING_TYPE_RESIDENTIAL) {
        $("#number-of-apartments, #number-of-floors, #number-of-basements").show();
        //$("#number-of-basements :input").val();
    } else if(buildingType == BUILDING_TYPE_COMMERCIAL) {
        $("#number-of-floors, #number-of-basements, #number-of-companies, #number-of-parking-spots, #number-of-elevators").show();
    } else if(buildingType == BUILDING_TYPE_CORPORATE) {
        $("#number-of-floors, #number-of-basements, #number-of-parking-spots, #number-of-corporations, #maximum-occupancy").show();
    } else if(buildingType == BUILDING_TYPE_HYBRID) {
        $("#number-of-floors, #number-of-basements, #number-of-companies, #number-of-parking-spots, #maximum-occupancy, #business-hours").show();
    }


}

function hideAllFields() {
    $("#number-of-apartments, #number-of-floors, #number-of-basements, #number-of-elevators, #number-of-companies, #number-of-parking-spots, #number-of-corporations, #maximum-occupancy, #business-hours").hide();
}

var theForm = document.forms ["elevatorform"];

var BUILDING_TYPE_RESIDENTIAL = "residential";
var BUILDING_TYPE_COMMERCIAL = "commercial";
var BUILDING_TYPE_CORPORATE = "corporate";
var BUILDING_TYPE_HYBRID = "hybrid";

var installationPrices = new Array ();
installationPrices["Standard"]=20;
installationPrices["Premium"]=25;
installationPrices["Excelium"]=35;

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