Qualtrics.SurveyEngine.addOnload(function ()
{
document.getElementById("QID8").style.display="none";

this.questionclick = function(event,element)
{
    console.log(event, element);
    if (element.type == 'radio')
    {
        var choiceNum = element.id.split('~')[2];

        var x = document.getElementById("QID2") //Question ID of the textbox Q
    x.style.display="none"

    this.questionclick = function(event, element) {
        var selectedChoice = this.getSelectedChoices()

        console.log(selectedChoice) //use this to get the value of the choice when you want the textbox to appear
        if (selectedChoice == "1") {
            x.style.display="block"
        }
        else {
            x.style.display="none"
        }
    }
}
});