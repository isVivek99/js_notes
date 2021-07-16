const getBtn = document.querySelector('#get-btn');
const postBtn = document.querySelector('#post-btn');


const sendHttpReq = (method, url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);//creare request,
        
        xhr.responseType = 'json';
        
        xhr.onload = () => {
            //const data = JSON.parse(xhr.response);
            //console.log(data);
            resolve(xhr.response)
        };

        xhr.send();
    });
};

const sendData = () => {

}

const getData = async ()=>{
    console.log("get");
    console.log();
    const data = await sendHttpReq('GET', 'https://reqres.in/api/users');
    console.log(data);
    sendHttpReq('GET', 'https://reqres.in/api/users').then((res)=>{console.log(res)})
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);