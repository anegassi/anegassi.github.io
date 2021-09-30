
let libraryDB = [];


function add(){
    console.log("hello")
    let productNameInput = document.getElementById("itemname").value;
        //itemList.productName=productNameInput;
       //libraryDB.push(productNameInput);
    let categoryInput = document.getElementById("itemcategory").value;
       // itemList.category=categoryInput
       //libraryDB.push(categoryInput);
    let quantityInput = document.getElementById("quantity").value;
      //itemList.quantity=categoryInput
       //libraryDB.push(quantityInput);
    let ratingInput= document.getElementById("ratings").value;
       const itemList = {
           productName:productNameInput,
           category:categoryInput,
           quantity:quantityInput,
           ratings:ratingInput
       };
       libraryDB.push(itemList)
       console.log(libraryDB)
       
    buildTable()    

}


function buildTable(){
    var table = document.getElementById("myTable");
    var row
    for (var i = 0; i < libraryDB.length; i++){
        
        row = `<tr>                    
                        <td>${libraryDB[i].productName}</td>
                       <td>${libraryDB[i].category}</td>
                        <td>${libraryDB[i].quantity}</td>
                        <td>${libraryDB[i].ratings}</td>
                  </tr>`
        console.log(row)
             
    }
    table.innerHTML += row;   
}



// let libraryDB = [];

//       function add() {
//         let productNameInput = document.getElementById("itemname").value;
// alert(productName)
//         let categoryInput = document.getElementById("itemcategory").value;
// alert(categoryInput)
//         let quantityInput = document.getElementById("quantity").value;
//         alert(quantityInput)
//         let ratingInput = document.getElementById("ratings").value;
//         const itemList = {
//           productName: productNameInput,
//           cateory: categoryInput,
//           quantity: quantityInput,
//           rating: ratingInput,
//         };
//         alert("hello");
//         libraryDB.push(itemList);
//         console.log(libraryDB);
//         buildTable(libraryDB);
//       }

     
   
//       function buildTable(data) {
//         var table = document.getElementById("myTable");

//         var row = `<tr>
//                                   <td>${data[i].productName}</td>
//                                   <td>${data[i].cateory}</td>
//                                   <td>${data[i].quantity}</td>
//                             </tr>`;
//         table.innerHTML += row;
//       }



//     var myArray = [
//     {'name':'Michael', 'age':'30', 'birthdate':'11/10/1989'},
//     {'name':'Mila', 'age':'32', 'birthdate':'10/1/1989'},
//     {'name':'Paul', 'age':'29', 'birthdate':'10/14/1990'},
//     {'name':'Dennis', 'age':'25', 'birthdate':'11/29/1993'},
//     {'name':'Tim', 'age':'27', 'birthdate':'3/12/1991'},
//     {'name':'Erik', 'age':'24', 'birthdate':'10/31/1995'},
// ]

// buildTable(myArray)



// function buildTable(data){
//     var table = document.getElementById('myTable')

//     for (var i = 0; i < data.length; i++){
//         var row = `<tr>
//                         <td>${data[i].name}</td>
//                         <td>${data[i].age}</td>
//                         <td>${data[i].birthdate}</td>
//                   </tr>`
//         table.innerHTML += row


//     }
// }


    
