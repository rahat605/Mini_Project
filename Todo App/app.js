let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

// for mouse key 
btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    item.appendChild(delBtn);

    ul.appendChild(item);
    input.value="";
});

// For keyboard enter key 
input.addEventListener("keydown",function(e){
    if(e.key == "Enter"){
        let item = document.createElement("li");
        item.innerText = input.value;
        
        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        item.appendChild(delBtn);

        ul.appendChild(item);
        input.value="";
    }
});

// Not working for new entry Only for existing entries
// let delBtns = document.querySelectorAll("#delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }

ul.addEventListener("click", function(e){
    if(e.target.nodeName == "BUTTON"){
       let listItem = e.target.parentElement;
        listItem.remove();
    };
});
