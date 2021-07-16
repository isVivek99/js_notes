const selectCategory = document.querySelector("#category");
selectCategory.addEventListener("click", (e)=>{
    console.dir(e.target);
    if(e.target.tagName == "P"){
        // window.location.href = "/" + e.target.id;
        console.log("here");
    }
        
    console.log(window.location.href);
})

document.querySelector("#form").addEventListener("keyup", (e)=>{
    console.log(e);
    if(e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
})

document.querySelector("#table").addEventListener("click", (e)=>{

    console.log(e.target.tagName);
    if(e.target.tagName !== "TD")return;

    let findprev  = document.querySelector(".highlight");
    console.log(findprev);
    if(findprev){
        findprev.classList.remove("highlight");
        console.log(findprev)
    }
    let selected = e.target;
    selected.classList.add("highlight");
    console.log(selected);

})

document.querySelector("#counter").addEventListener("click", (e)=>{
    if(e.target.dataset.counter !== undefined){
        e.target.value++;
    };
})

  document.addEventListener('click', function(event) {
      console.log(event.target.dataset.toggleId);
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);
    console.log(elem.hidden);
    elem.hidden = !elem.hidden;
    console.log(elem.hidden);

});