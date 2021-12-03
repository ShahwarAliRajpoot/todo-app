
    var listBox = document.getElementById("listBox")

 function addText(){
        var input = document.getElementById("input")

        if(input.value.length > 3){

            var li = document.createElement("li")
            var text = document.createTextNode(input.value)
            li.appendChild(text)

          listBox.appendChild(li)
         
          var editBtn = document.createElement("button")
          editBtn.className="far fa-edit btn btn-primary editBtn"
          editBtn.setAttribute("onclick","editList(this)")
     
          var delBtn = document.createElement("button")
          delBtn.className="fas fa-trash btn btn-primary delBtn"
          delBtn.setAttribute("onclick","delList(this)")
          
          var towBtn = document.createElement("div")
           towBtn.className="towBtn"
          towBtn.appendChild(editBtn)
          towBtn.appendChild(delBtn)
     
           li.appendChild(towBtn)
     
         input.value = "";
         
         }
         else{
             alert("Please Enter Text Your Input Is Empty ...")
         }

        }
    
function clearList(){
     listBox.innerHTML = "";
}

function editList(t){
  var proText = prompt("Please Edit Your Text",t.parentNode.parentNode.firstChild.nodeValue)
   t.parentNode.parentNode.firstChild.nodeValue = proText
}

function delList(e){
    e.parentNode.parentNode.remove()
}   






















