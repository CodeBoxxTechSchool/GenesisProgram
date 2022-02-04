$(document).ready(function () {
    hideAllFields();
    $("#building-type").on("change", function () {
        refreshFields()
    })

    $(".inputfield input").on("input", function () {
        calculateTotal();
    })

    $("input[type='radio'][name='product-type']").on("input", function () {
        calculateTotal();
    })
})

// Show appropriate fields based on building type
function refreshFields() {
    // Hide all fields
    hideAllFields()

    let buildingType = $("#building-type").val()
    // Show appropriate fields

    if (buildingType == BUILDING_TYPE_RESIDENTIAL) {
        $("#number-of-apartments, #number-of-floors, #number-of-basements").show();
    } else if (buildingType == BUILDING_TYPE_COMMERCIAL) {
        $("#number-of-floors, #number-of-basements, #number-of-companies, #number-of-parking-spots, #number-of-elevators").show();
    } else if (buildingType == BUILDING_TYPE_CORPORATE) {
        $("#number-of-floors, #number-of-basements, #number-of-parking-spots, #number-of-corporations, #maximum-occupancy").show();
    } else if (buildingType == BUILDING_TYPE_HYBRID) {
        $("#number-of-floors, #number-of-basements, #number-of-companies, #number-of-parking-spots, #maximum-occupancy, #business-hours").show();
    }
    calculateTotal()

}

function hideAllFields() {
    $("#number-of-apartments, #number-of-floors, #number-of-basements, #number-of-elevators, #number-of-companies, #number-of-parking-spots, #number-of-corporations, #maximum-occupancy, #business-hours").hide();
}

var BUILDING_TYPE_RESIDENTIAL = "residential";
var BUILDING_TYPE_COMMERCIAL = "commercial";
var BUILDING_TYPE_CORPORATE = "corporate";
var BUILDING_TYPE_HYBRID = "hybrid";

var installationPrices = new Array();
installationPrices["Standard"] = 20;
installationPrices["Premium"] = 25;
installationPrices["Excelium"] = 35;

function getTotal() {
    var installationPrice = installationPrice;

    //display the result
    document.getElementById('installationPrice').innerHTML =
        "Total Price For Installation $" + installationPrice;
}
//oninput calculateTotal
function calculateTotal() {
    let buildingType = $("#building-type").val()

    var quote = {
        amountOfElevators: 0,
        unitPriceOfElevators: 0,
        totalPriceOfElevators: 0,
        installationFee: 0,
        finalPrice: 0
    }

    if (buildingType == BUILDING_TYPE_RESIDENTIAL) {
        quote.amountOfElevators = getResidentialAmountOfElevators();
    } else if (buildingType == BUILDING_TYPE_COMMERCIAL) {
        quote.amountOfElevators = $("#number-of-elevators input").val();
    } else if (buildingType == BUILDING_TYPE_CORPORATE || buildingType == BUILDING_TYPE_HYBRID) {
        quote.amountOfElevators = getHybridOrCorporateAmountofElevators();
    }
    //find unit price
    quote.unitPriceOfElevators = unitPrice()
    quote.totalPriceOfElevators = quote.amountOfElevators * quote.unitPriceOfElevators;
    // find installation fee
    quote.installationFee = quote.totalPriceOfElevators * calcInstallationFee()
    // calculate total
    quote.finalPrice = parseFloat(quote.totalPriceOfElevators) + parseFloat(quote.installationFee)
    // display results
    $("#final-price input").val(formatPriceString(quote.finalPrice))
    $("#installation-fee input").val(formatPriceString(quote.installationFee))
    $("#total-price-of-elevators input").val(formatPriceString(quote.totalPriceOfElevators))
    $("#price-per-elevator input").val(formatPriceString(quote.unitPriceOfElevators))
    $("#amount-of-elevators input").val(isNaN(quote.amountOfElevators) ? 0: quote.amountOfElevators)

}

function formatPriceString(inputString){
    // return inputString.toLocaleString(undefined, {minimumFractionDigits:2}) + "$"
    return (isNaN(inputString)? 0 : inputString.toLocaleString(undefined, {minimumFractionDigits:2})) + "$"
}

// Returns unit price based on product type
function unitPrice() {
    let productType = $("input[name='product-type']:checked").val();
    if (productType == "standard") {
        return 7565;
    } else if (productType == "premium") {
        return 12345;
    } else if (productType == "excelium") {
        return 15400;
    }
}
// Returns installation fee based on product type
function calcInstallationFee() {
    let productType = $("input[name='product-type']:checked").val();
    if (productType == "standard") {
        return 0.1;
    } else if (productType == "premium") {
        return 0.13;
    } else if (productType == "excelium") {
        return 0.16;
    }
}

function getResidentialAmountOfElevators() {
    // Retrieve needed values
    let numberOfApartments = $("#number-of-apartments input").val();
    let numberOfFloors = $("#number-of-floors input").val();

    // Do calculations and return number of elevators required
    let avgApartmentsPerFloor = Math.ceil(numberOfApartments / numberOfFloors);
    let elevatorsRequired = Math.ceil(avgApartmentsPerFloor / 6);
    let nbColumnsRequired = Math.ceil(numberOfFloors / 20);
    return elevatorsRequired * nbColumnsRequired;
}
function getHybridOrCorporateAmountofElevators() {
    let occupantsPerFloor = $("#maximum-occupancy input").val();
    let numberOfFloors = $("#number-of-floors input").val();

    let totalNumberOfOccupants = occupantsPerFloor * numberOfFloors;
    let elevatorsRequired = Math.ceil(totalNumberOfOccupants / 1000)
    return elevatorsRequired
}


// function elvAmountResidentialBuilding(number_of_apartments, number_of_floors, number_of_basements) {
//     var amountOfElevators = (number_of_basements * number_of_floors)
//     return amountOfElevators
// }
// function elvAmountCorporateBuilding(number_of_floors, numbers_of_basements, number_of_parking_spots, number_of_corporations, maximum_occupancy) {
//     var amountOfElevators = 0
//     return amountOfElevators;
// }
// function elvAmountHybridBuilding(number_of_floors, numbers_of_basements, number_of_companies, number_of_parking_spots, maximum_occupancy, business_hours) {
//     var amountOfElevators = 0
//     return quoteResults;
// }