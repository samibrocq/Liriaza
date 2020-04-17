var page = document.querySelector("html");
var buttonnext = document.getElementById('next')
var buttonback = document.querySelector(".fa-chevron-left");

function nextpage(e){
    if (event.keyCode==13){
        buttonnext.click()
    }
   if (event.keyCode == 8){
        buttonback.click()
    }
};

page.onkeypress = nextpage;

 function separ_milliers(nbr) {
            var nombre = '' + nbr;
            var retour = '';
            var count = 0;
            for (var i = nombre.length - 1; i >= 0; i--) {
                if (count != 0 && count % 3 == 0) retour = nombre[i] + ' ' + retour;
                else retour = nombre[i] + retour;
                count++;
            };
            return retour;
        }

 function createTotalRow(name,value,unit) {
     let divTables = document.querySelector('#tables')
     let table = document.createElement('table')
     let row = document.createElement('tr')
     row.setAttribute('class','generalTotal')
     divTables.append(table) ; table.append(row) ;
     
     let nameCell = document.createElement('td')
     nameCell.setAttribute('class','col-1')
   //  if (divTables.classList.contains('investTable')) {nameCell.setAttribute('colspan',2)}
     row.append(nameCell)
     nameCell.textContent = name
               
     let valueCell = document.createElement('td')
     valueCell.setAttribute('class','col-2')
     row.append(valueCell)
     valueCell.textContent = value
               
     let unitCell = document.createElement('td')
     unitCell.setAttribute('class','col-3')
     row.append(unitCell)
     unitCell.textContent = unit
}


miStorage = window.localStorage;


//Saved simulations

let savesString = localStorage.getItem('savesString') || '[]'

let saves = JSON.parse(savesString)




    
     
 