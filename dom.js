let form = document.getElementById("addForm");
let listItem = document.getElementById("items");//ul
let search = document.getElementById("filter");//searchbox
let searchBtn = document.getElementById("search-btn");

form.addEventListener("submit",addItem)

function addItem(e)
{
    e.preventDefault() 
    //console.log("test")
    let newItem = document.getElementById("item").value;//textfield of form
    if(newItem == "")
    {
        alert("Write something");
        return;
    }
    let li = document.createElement("li");
    //console.log(li)
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem));
    //listItem.appendChild(document.createTextNode(newItem));
    listItem.appendChild(li);

    let btn = document.createElement("button");
    //console.log(btn)
    btn.className="btn btn-danger btn-sm float-right delete";
    btn.appendChild(document.createTextNode("X"));
    li.appendChild(btn);

    //making text field null after submit click
    document.getElementById("item").value = ""
}

listItem.addEventListener("click",deleteItem)

function deleteItem(e)
{
    //console.log(confirm("abc"))
    //console.log("abc",e.target.classList.contains("delete"));
    if(e.target.classList.contains("delete"))
    {
        let li = e.target.parentElement;
        listItem.removeChild(li);

        //when you want to make popup
       /* if(confirm("Are You Sure ?"))
        {
            let li = e.target.parentElement;
            listItem.removeChild(li);
        }
        else
            console.log("bye");*/
    }

}

search.addEventListener("keyup",searchItem)

function searchItem(e)
{
    //searchBtn.style.display = "block";
    document.getElementById("search-btn").style.display = "block"
    // let text = e.target.value.toLowerCase();
    // let items = listItem.getElementsByTagName("li");
    // itemArray = Array.from(items)
    // //console.log(itemArray);
    // itemArray.forEach(function (arrayElement)
    // {
    //     let elementValue = arrayElement.firstChild.textContent;
    //     //console.log(elementValue.toLowerCase().indexOf(text));
    //     if(elementValue.toLowerCase().indexOf(text) != -1)
    //         //console.log(arrayElement);
    //         arrayElement.style.display = "block";
    //     else
    //         arrayElement.style.display = "none";
    // });

    // same working but with arrow functions
    //itemArray.forEach(arrayElement => console.log(arrayElement));
    
}

searchBtn.addEventListener("click",searchItem1)

function searchItem1(e)
{    
    
    
    let filterItem = document.getElementById("filter").value.toLowerCase();
    let items = listItem.getElementsByTagName("li");
    itemArray = Array.from(items);
    itemArray.forEach(function (arrayElement)
    {
        let elementValue = arrayElement.firstChild.textContent;
        if(elementValue.toLowerCase().indexOf(filterItem) != -1)
            arrayElement.style.display = "block";
        else
            arrayElement.style.display = "none";
    });
}


// ask validation (decoraive)