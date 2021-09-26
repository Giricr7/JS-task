if (localStorage.length === 0) {
    localStorage.setItem('rows', '')
    
}




function collect_details() {
    
// fetching values
var firstname = document.getElementById('fname').value;
var lastname = document.getElementById('lname').value;
var name=`${firstname} ${lastname}`

var address = document.getElementById('address').value;
var pin = document.getElementById('pincode').value;
address = `${address},${pin}`

var gender;
if(document.getElementById('male').checked == true)
{
    gender='Male'
}
else
{
    gender='Female'
}


var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
var food=[]
for (let i = 0; i < checkboxes.length;i++){
    food.push(checkboxes[i].value)
}
food=food.join(',')


var state = document.getElementById('state').value;
var country = document.getElementById('country').value;

// collecting all values inside an array
var details = [name, address, gender, food, state, country]

//validation
if(firstname=='' || lastname=='' || address=='' || pin=='' || state==''|| country=='')
{
    Swal.fire({
        icon: 'error',
        title: 'please fill the required fields'
      })
}
else if(checkboxes.length <2)
    {
        Swal.fire({
            icon: 'error',
            title: 'select atleast two foods'
       
          })
} else {
    
  

    var tabl = document.getElementById('data_table');
    var newrow = tabl.insertRow();
    
//inserting all elements to the new row
        details.map((element) => {
        let new_cell = newrow.insertCell()
        new_cell.textContent = element;
    })

//appending new row

    tabl.appendChild(newrow)
//storing the data in local storage
    if (localStorage.getItem('rows') == '') {
        var arr = []
    } else {
        arr = JSON.parse(localStorage.getItem('rows'));
    }
    
    arr.push(details);
    localStorage['rows'] = JSON.stringify(arr);
   

//clearing the input fields
    document.forms['form_details'].reset();

    
//pop-up for successfull data insertion to table
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Data added to table',
        showConfirmButton: false,
        timer: 2500
      })
    }



   
   
}


if (location.reload && localStorage.getItem('rows') !== '') {
    

//re-inserting all elements to the new row
    let stored_values = JSON.parse(localStorage.getItem('rows'));

    let table = document.getElementById('data_table');
   
    
//re-inserting all elements to the table
    for (let i = 0; i < stored_values.length; i++){
        let newrow = table.insertRow();
        stored_values[i].map((element) => {
            let new_cell = newrow.insertCell()
            new_cell.textContent = element;
           
        })
        table.appendChild(newrow); table.appendChild(newrow)
    }
        

    
}



//clears the locally stored values
function delete_data(){
  
    localStorage.clear();
    location.reload()
   
   

}
