// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/

let form = document.querySelector("#submit-form");


// button.addEventListener = ("click", async e => {
//     // let name = name.value;
//     // let email = email.value;
//     // let password = password.value;
//     // let message = message.value;
//     // let checkbox = checkbox.value;
//    await fetchJSON(body = { name, email, password, message, checkbox})
// })

// const fetchJSON = async (body) => {
//      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//           "Content-type": "application/json; charset=UTF-8"
//         },
//         body: JSON.stringify(body)
       
//       });
//       return await response.json();

// };

// userId: 1

form.addEventListener("submit", async e => {
    e.preventDefault()
    
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let message = document.querySelector("#message");
    let checkbox = document.querySelector("#checkbox");
  
        // await fetchJSON(body)
     


     
                   
             const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    name : name.value,
                    password : password.value,
                    email : email.value,
                    message : message.value,
                    checkbox : checkbox.value,
                    userID: 1
                }),
                
            
              })
              
             let data = await response.json()
             console.log(data.userID)
              console.log(data);
            alert ("Thank you for submitting your details \n User ID:" + data.userID)
              //.then ( response => response.json())
              //.then ((data) => {console.log(data)});
        
    }
    )


// var payload = {
//     a: 1,
//     b: 2
// };

// var data = new FormData();
// data.append( "json", JSON.stringify( payload ) );

// fetch("/echo/json/",
// {
//     method: "POST",
//     body: data
// })
// .then(function(res){ return res.json(); })
// .then(function(data){ alert( JSON.stringify( data ) ) })



