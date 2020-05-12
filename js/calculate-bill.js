//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const phoneBill = document.querySelector(".billTotal");
//get a reference to the billString
const bill = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
function totalPhoneBill(billString){
//  * this function should read the string value entered - split it on a comma.
   var callLog = billString.split(', ')
   var billTotal = 0;
//  * loop over all the entries in the the resulting list
 for(var i=0; i < callLog.length; i++){
   var callAction = callLog[i].trim();
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
       if (callAction === 'call'){
       billTotal += 2.75;
    } else if (callAction === 'sms'){
    billTotal += 0.75;
  } 
 } var roundedPhoneBill= billTotal.toFixed(2);
  return billTotal.toFixed(2);
}

function alertColorChange(roundedPhoneBill){
if (parseFloat(roundedPhoneBill >= 20 && roundedPhoneBill < 30)) {
    phoneBill.className = "warning";
}
else if (parseFloat (roundedPhoneBill >= 30)) {
    phoneBill.className = "danger";
}
   }

function calculateBtnClicked(){
    var billString = bill.value;
    const roundedPhoneBill = totalPhoneBill(billString);
    phoneBill.innerHTML = roundedPhoneBill;
}
  
//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', calculateBtnClicked);
