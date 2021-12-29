
      var firebaseConfig = {
        apiKey: "AIzaSyCw0Gic2NWZTg7J93mgqVqTXohRMQc4_ys",
        authDomain: "todoapp-8cf2f.firebaseapp.com",
        databaseURL: "https://todoapp-8cf2f-default-rtdb.firebaseio.com",
        projectId: "todoapp-8cf2f",
        storageBucket: "todoapp-8cf2f.appspot.com",
        messagingSenderId: "504704258530",
        appId: "1:504704258530:web:d71bc84d744b3616a8e9bb",
      };
    
      var app = firebase.initializeApp(firebaseConfig);

      var database = app.database();


    var listBox = document.getElementById("listBox")

 function addText(){
        var input = document.getElementById("input")

        if(input.value.length > 3){

          var key = database.ref("/").push().key
           
           var todoObj = {
              key : key,
              todo : input.value
            }

         database.ref("todos").child(key).set(todoObj)

         input.value = "";
         
         }

         else{
             alert("Please Enter Text Your Input Is Empty ...")
         }

        }
     
      database.ref("todos").on("child_added" , function(data){


        var li = document.createElement("li")
        var text = document.createTextNode(data.val().todo)
        li.appendChild(text)

      listBox.appendChild(li)
     
      var editBtn = document.createElement("button")
      editBtn.className="far fa-edit btn btn-primary editBtn"
      editBtn.setAttribute("onclick","editList(this)")
      editBtn.setAttribute("id" , data.val().key)
 
      var delBtn = document.createElement("button")
      delBtn.className="fas fa-trash btn btn-primary delBtn"
      delBtn.setAttribute("onclick","delList(this)")
      delBtn.setAttribute("id" , data.val().key)
      
      var towBtn = document.createElement("div")
       towBtn.className="towBtn"
      towBtn.appendChild(editBtn)
      towBtn.appendChild(delBtn)
 
       li.appendChild(towBtn)

      })

  
function clearList(){
     listBox.innerHTML = ""
     database.ref("/todos").remove()
}

function editList(e){
  var liTxt = e.parentNode.parentNode.firstChild.nodeValue
  var proText = prompt("Please Edit Your Text",liTxt)
   e.parentNode.parentNode.firstChild.nodeValue = proText
   

   database.ref("todos").child(e.id).update({
     todo : proText
   })

}

function delList(e){
    e.parentNode.parentNode.remove()

    database.ref("todos").child(e.id).remove()
}   