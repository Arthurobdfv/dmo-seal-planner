import data from '../../data/seals/sealList.json'  assert { type: 'json' };

var sealNameInput = document.getElementsByClassName('seal-name-input')[0];
var listItem = document.getElementsByClassName('item')[0];
var sealList = document.getElementsByClassName('seal-list')[0];

console.log('Loaded');
$(document).ready(function() {
    sealNameInput.addEventListener("input", (event) => {
        console.log(event);
        
        var listItems = $('[class*=seal-list-item-]').each(function(){
            if($(this).innerHTML != sealNameInput.innerHTML){
                $(this).hide();
            } 
            else{
                $(this).show();
            }

        });   
        listItems.forEach(element => {
        });
        console.log(listItems);
    })

})
    
function initList(){
    data.sealList.forEach(element => {
        createListItemForData(element);
    });
}

function createListItemForData(data){
    var listItem = document.createElement('li');
    listItem.className = 'seal-list-item-' + data.name;
    listItem.textContent = data.name;
    sealList.appendChild(listItem);
}
console.log(data);

initList();
