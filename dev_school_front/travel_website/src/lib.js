export const request  = async function(url, options){
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : ""
    
    const response = await fetch(url, {
        headers:{
            "content-type":"application/json",
            "authorization":token
        },
        //destructureaza obiectul, face spread, adauga toate cheile obiectului options in headers
        ...options
    })
    if(!response.ok){
        const message = "not ok!";
        throw new Error(message);
    }else{
        return response.json;
    }
}