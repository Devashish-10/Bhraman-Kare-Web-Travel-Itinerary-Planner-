const SummarizationTable=document.getElementById('PackagingList');
const summary=document.getElementById('summary');
summary.addEventListener('click',SaveList);
function SaveList(){
    const name=document.getElementById('item_name').value;
    const qty=document.getElementById('qty').value;
    const available=document.getElementById('availability').value;
    const Cost=parseFloat(document.getElementById('cost').value);
    const newRow=PackagingList.insertRow();
    newRow.insertCell().textContent=name;
    newRow.insertCell().textContent=qty;
    newRow.insertCell().textContent=available;
    newRow.insertCell().textContent=Cost;
    document.getElementById('item_name').value='';
    document.getElementById('qty').value='';
    document.getElementById('availability').value='';
    document.getElementById('cost').value='';
}