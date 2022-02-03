
$(document).ready(function () {
    hideAllFields();
    $("#building-type").on("change", function () {

        refreshFields()

    })
    $(".inputfield input").on("input", calculateTotal)
})

// Show appropriate fields based on building type
function refreshFields() {
    // Hide all fields
    hideAllFields()

    let buildingType = $("#building-type").val()
    // Show appropriate fields

    if (buildingType == BUILDING_TYPE_RESIDENTIAL) {
        $("#number-of-apartments, #number-of-floors, #number-of-basements").show();
        //$("#number-of-basements :input").val();
    } else if (buildingType == BUILDING_TYPE_COMMERCIAL) {
        $("#number-of-floors, #number-of-basements, #number-of-companies, #number-of-parking-spots, #number-of-elevators").show();
    } else if (buildingType == BUILDING_TYPE_CORPORATE) {
        $("#number-of-floors, #number-of-basements, #number-of-parking-spots, #number-of-corporations, #maximum-occupancy").show();
    } else if (buildingType == BUILDING_TYPE_HYBRID) {
        $("#number-of-floors, #number-of-basements, #number-of-companies, #number-of-parking-spots, #maximum-occupancy, #business-hours").show();
    }


}

function hideAllFields() {
    $("#number-of-apartments, #number-of-floors, #number-of-basements, #number-of-elevators, #number-of-companies, #number-of-parking-spots, #number-of-corporations, #maximum-occupancy, #business-hours").hide();
}

var theForm = document.forms["elevatorform"];

var BUILDING_TYPE_RESIDENTIAL = "residential";
var BUILDING_TYPE_COMMERCIAL = "commercial";
var BUILDING_TYPE_CORPORATE = "corporate";
var BUILDING_TYPE_HYBRID = "hybrid";

var installationPrices = new Array();
installationPrices["Standard"] = 20;
installationPrices["Premium"] = 25;
installationPrices["Excelium"] = 35;

function getInstallationPrice() {
    var installationPrice = 0;
    var theForm = document.forms["elevatorform"];
    var selectedInstallation = theForm.elements["selectedInstallation"];
    for (var i = 0; i < selectedInstallation.lenght; i++) {
        if (selectedInstallation[i].checked) {
            installationPrice = installationPrices[selectedInstallation[i].value];
            break;
        }
    }
    return installationPrice
}

function getTotal() {
    var installationPrice = installationPrice;

    //display the result
    document.getElementById('installationPrice').innerHTML =
        "Total Price For Installation $" + installationPrice;

}

var whatever = elvAmountResidentialBuilding(4, 5, 3).finalPrice

//oninput calculateTotal
function calculateTotal() {
    let buildingType = $("#building-type").val()
    // Show appropriate fields

    var quote = {
        amountOfElevators: 0,
        unitPriceOfElevators: 0,
        totalPriceOfElevators: 0,
        installationFee: 0,
        finalPrice: 0
    }

    if (buildingType == BUILDING_TYPE_RESIDENTIAL) {
        quote.amountOfElevators = elvAmountResidentialBuilding(
            $("#number-of-apartments input").val(),
            $("#number-of-floors input").val(),
            $("#number-of-basements input").val())
    } else if (buildingType == BUILDING_TYPE_COMMERCIAL) {
        quote.amountOfElevators = $("#number-of-elevators input").val()
    } else if (buildingType == BUILDING_TYPE_CORPORATE) {
        $("#number-of-floors, #number-of-basements, #number-of-parking-spots, #number-of-corporations, #maximum-occupancy").show();
    } else if (buildingType == BUILDING_TYPE_HYBRID) {
        $("#number-of-floors, #number-of-basements, #number-of-companies, #number-of-parking-spots, #maximum-occupancy, #business-hours").show();
    }

    //find unit price
    quote.unitPriceOfElevators = unitprice()
    quote.totalPriceOfElevators= quote.amountOfElevators * quote.unitPriceOfElevators
    //find installation fee
    quote.installationFee = quote.totalPriceOfElevators * calcInstallationFee()
    //calculate total
    quote.finalPrice = quote.totalPriceOfElevators + quote.installationFee
    //display results
    $("#final-price input").val(quote.finalPrice)
    $("#installation-fee input").val(quote.installationFee)
    $("#total-price-of-elevators input").val(quote.totalPriceOfElevators)
    $("#price-per-elevator input").val(quote.unitPriceOfElevators)
    $("#amount-of-elevators input").val(quote.amountOfElevators)

}
// if statement pour retourner la value
function unitprice() {
    return 6
}

function calcInstallationFee() {
    return 0.1
}

function elvAmountResidentialBuilding(number_of_apartments, number_of_floors, number_of_basements) {
    var amountOfElevators = (number_of_basements * number_of_floors)
    return amountOfElevators
}
function elvAmountCorporateBuilding(number_of_floors, numbers_of_basements, number_of_parking_spots, number_of_corporations, maximum_occupancy) {
    var amountOfElevators = 0
    return amountOfElevators;
}
function elvAmountHybridBuilding(number_of_floors, numbers_of_basements, number_of_companies, number_of_parking_spots, maximum_occupancy, business_hours) {
    var amountOfElevators = 0
    return quoteResults;
}

// //noms de variables, faire les 4 fonctions, fonction qui handle le show-hide (toggle), fonction de peser sur le bouton (laquelle est caller).