class User {
    constructor(name,id){
        this.name = name;
        this.id = id;
    }

    hasAccess(){
        return this.name === "vivek";
    }
}

class NullUser {
    constructor(){
        this.id=-1;
        this.name="guest";
    }
    hasAccess(){
        return false;
    }
}

const users = [ new User("vivek",1), new User("Satyam",2)]
console.log(users);

function getUser(id){
    let user = users.find(user=>user.id===id)
    if(user==null){
        return new NullUser();
    }else{
        return user;
    }
}

function printUser(id){

    const user = getUser(id);

    // let name = "guest";
    // if(user!=null && user.name!=null ) name = user.name;
    console.log("hello "+user.name+ " !");

    if(user.hasAccess()){
        console.log("welcome user");
    }  
    if(user.hasAccess()!==true){
        console.log("you donot have special access!");
    }

}
