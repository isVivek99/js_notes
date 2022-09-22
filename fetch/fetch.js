// import db from './data/db.json';
document.getElementById("getpost").addEventListener("submit", addPost)
document.getElementById("delete").addEventListener("click", deletePost)

function addPost(e){
    e.preventDefault();
    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;
    console.log(title,body);
    fetch("http://localhost:3000/blog", {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain */* ',
            'Content-type':"application/json"
        } , 
        body : JSON.stringify({title:title, body:body})
    }).then(res=>res.json())
    .then(data=>console.log(data))
}

function deletePost(e){
    e.preventDefault();
    fetch("http://localhost:3000/blog/6",{
        method:"DELETE",
    }).then(()=>console.log("deleted!"))
}