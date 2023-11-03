let myForm = document.querySelector("form")
let inp1 = document.getElementById("task")
let inp2 = document.getElementById("priority")
let tbody = document.querySelector("tbody")

let AllTask = []

myForm.addEventListener("submit" , function(e)
{
    e.preventDefault()

    let data = {}
    data.task = inp1.value 
    data.priority = inp2.value 
    AllTask.push(data)
    console.log(AllTask)
    tbody.innerText = null
    AllTask.map((ele)=>
    {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        td1.innerText = ele.task
        td2.innerText = ele.priority
        if(ele.priority === "High"){
            td2.style.backgroundColor= "red"
        }
        else{
            td2.style.backgroundColor = "green"
        }
        td3.innerText = "Favorite"
        td3.addEventListener("click",function(){
            td3.innerText = "Do Nothing , we will implement this tomorrow"
        })
        row.append(td1,td2,td3)
        tbody.append(row)
    })

})