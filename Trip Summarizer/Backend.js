const SummarizationTable=document.getElementById('SummarizationTable');
const summary=document.getElementById('summary');
summary.addEventListener('click',SaveActivity);
function SaveActivity(){
    const Place=document.getElementById('Place').value;
    const Date=document.getElementById('Date').value;
    const Time=document.getElementById('Time').value;
    const Activity=document.getElementById('Activity').value;
    const Spending=parseFloat(document.getElementById('Spending').value);
    const newRow=SummarizationTable.insertRow();
    newRow.insertCell().textContent=Place;
    newRow.insertCell().textContent=Date;
    newRow.insertCell().textContent=Time;
    newRow.insertCell().textContent=Activity;
    newRow.insertCell().textContent=Spending;
    document.getElementById('Place').value='';
    document.getElementById('Date').value='';
    document.getElementById('Time').value='';
    document.getElementById('Activity').value='';
    document.getElementById('Spending').value='';
}