const form = document.querySelector("form");
const tableBody = document.querySelector("#table-body")





const action = (event) => {
    event.preventDefault();
    if (form[0].value !== '' && form[1].value !== ''){
        // alert('working');
    
        const task = () =>{
             // prevent the default empty field from submitting
        
            const name = document.querySelector('#name').value;
            const address = document.querySelector('#address').value;
        
            // for the s/n. create a variable and assign it to 0 then have an increment on it
        
            const row = tableBody.insertRow();
            const serialCell = row.insertCell(0);
            const nameCell = row.insertCell(1);
            const addressCell = row.insertCell(2);
            const table = tableBody.rows.length;
            
            nameCell.innerHTML  = name;
            addressCell.innerHTML  = address;
            serialCell.innerHTML = table - 1;
        
            // clear the form field
            document.querySelector('#name').value = '';
            document.querySelector('#address').value = '';
            
        };
        task();
         
    } else {
        console.error('enter fields to submit');
        alert('error!');
    }  
  
}


form.addEventListener('submit', action);

// how to stop the a page from reloading in javascript after listening to an event?