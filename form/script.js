
function collect_details(){

    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var address = document.getElementById('address').value;
    var pin = document.getElementById('pincode').value;
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
    var gender;
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');


    if(document.getElementById('male').checked == true)
    {
        gender='Male'
    }
    else
    {
        gender='Female'
    }

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
        }




}
