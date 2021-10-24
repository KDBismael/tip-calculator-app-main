function Tip5(){
    let bill=document.getElementById('input1').value;
    let numberOfPeople=document.getElementById('input2').value;
    let tipAmount=(bill*(5/100)/numberOfPeople).toFixed(2);
    let total=(bill/numberOfPeople).toFixed(2);
    document.getElementById('TIP').innerHTML=tipAmount;
    document.getElementById('TOTAL').innerHTML=total;
    if(bill!=null){
        document.getElementById('RESET').style.opacity='1'; 
    }
    
}

function Tip10(){
    let bill=document.getElementById('input1').value;
    let numberOfPeople=document.getElementById('input2').value;
    let tipAmount=(bill*(10/100)/numberOfPeople).toFixed(2);
    let total=(bill/numberOfPeople).toFixed(2);
    document.getElementById('TIP').innerHTML=tipAmount;
    document.getElementById('TOTAL').innerHTML=total;
}

function Tip15(){
    let bill=document.getElementById('input1').value;
    let numberOfPeople=document.getElementById('input2').value;
    let tipAmount=(bill*(15/100)/numberOfPeople).toFixed(2);
    let total=(bill/numberOfPeople).toFixed(2);
    document.getElementById('TIP').innerHTML=tipAmount;
    document.getElementById('TOTAL').innerHTML=total;
}

function Tip25(){
    let bill=document.getElementById('input1').value;
    let numberOfPeople=document.getElementById('input2').value;
    let tipAmount=(bill*(25/100)/numberOfPeople).toFixed(2);
    let total=(bill/numberOfPeople).toFixed(2);
    document.getElementById('TIP').innerHTML=tipAmount;
    document.getElementById('TOTAL').innerHTML=total;
}

function Tip50(){
    let bill=document.getElementById('input1').value;
    let numberOfPeople=document.getElementById('input2').value;
    let tipAmount=(bill*(50/100)/numberOfPeople).toFixed(2);
    let total=(bill/numberOfPeople).toFixed(2);
    document.getElementById('TIP').innerHTML=tipAmount;
    document.getElementById('TOTAL').innerHTML=total;
}

function custom(){
    let bill=document.getElementById('input1').value;
    let tip=document.getElementById('CUSTOM').value;
    let numberOfPeople=document.getElementById('input2').value;
    let tipAmount=(bill*(tip/100)/numberOfPeople).toFixed(2);
    let total=(bill/numberOfPeople).toFixed(2);
    document.getElementById('TIP').innerHTML=tipAmount;
    document.getElementById('TOTAL').innerHTML=total;
}

//pour le reset
let bill=document.getElementById('input1').value;


