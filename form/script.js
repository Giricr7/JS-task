
function collect_details(){

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
        
        let tabl = document.getElementById('data_table')

        let total_cells = details.length;
        let newrow = tabl.insertRow();

        let cells = details.map((element) => {
            let new_cell = newrow.insertCell()
            new_cell.textContent = element;
        })


        tabl.appendChild(newrow)

        document.forms['form_details'].reset();
        }



}


