import './navigation.js'
import {
    LitElement,
    html,
    css,
  } from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

class Header extends HTMLElement{
    constructor(){
        super();

        const _header = document.createElement('header');
        const _style = document.createElement('style');
        _style.innerHTML = 
        `h1{
            text-align: center;
            color:rgb(25, 4, 41);
        }`;
        _header.innerHTML = 
            `<navigation-element></navigation-element>
            <h1>Travel with us! </h1>`;

        this._shadowRoot = this.attachShadow({mode: "open"});
        this._shadowRoot.appendChild(_header);
        this._shadowRoot.appendChild(_style);
    }

    //SAPTAMANA 5 NOTITE:
    // connectedCallback(){
    //     super.connectedCallback();

    //     const iamyoda = new Promise((resolve,reject)=>{
    //         const person = "stormtrooper";
    //         if(person === "Yoda"){
    //             resolve("i am yoda");
    //         }else{
    //             reject(`i am ${person}`);
    //         }
    //     });
    //     const promise2 = new Promise((resolve,reject)=>{
    //         setTimeout(resolve, 500, 'ok')
    //     });
    //     const promise3 = new Promise((resolve,reject)=>{
    //         setTimeout(resolve, 1000, 'super ok')
    //     });
        
    //     //toate promise-urile simultan:
    //     Promise.all(iamyoda, promise2, promise3)
    //     .then(response=>console.log(response))
    //     .catch(error=>console.log(error));

    //     //exista si allSettled()

    //     iamyoda
    //     .then(response=>console.log(response))
    //     .catch(error=>console.log("error"))
    //     .finally(()=>console.log('in finally'));

    //     this.getPosts();
    // }
    // async getPosts2() {
    //     const axios = window.axios;
    //     try {
    //       const response = await axios.get(
    //         'https://jsonplaceholder.typicode.com/anaaremere'
    //       );
    //       console.log(response);
    //     } catch (error) {
    //       console.log(error);
    //     }
    
    //     console.log('la sfarsitul metodei');
    //   }

    // getPosts(){
    //     const axios = window.axios;

        // axios
        //     .get('https://jsonplaceholder.typicode.com/posts')
        //     .then(response=>{
        //         console.log(response);
        //     }).catch(err=>{console.log(err)});
        
        // axios.post('https://jsonplaceholder.typicode.com/posts', {
        //         title: 'foo',
        //         body: 'bar',
        //         userId: 1,
        //     },
        //     {
        //         headers:{
        //             'content-type':'multipart/form-data',
        //             Authorization: 'Bearer ceva-token',
        //         },
        //     }
        // ).then((response) => console.log(response));

         // axios.request({
    //   url: 'https://jsonplaceholder.typicode.com/posts',
    //   method: 'POST',
    //   data: {
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   },
    // });

    // const request = axios.create({
    //   baseURL: 'https://jsonplaceholder.typicode.com/',
    //   timeout: 10000,
    //   headers: {
    //     Authorization: 'Bearer  ceva-token',
    //   },
    // });

    // request.get('posts').then((response) => console.log(response));
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    // const body = {
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 1,
    // };

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'GET',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((response) => response.json())
    //   .then((response) => console.log(response));
  }

    
customElements.define('header-element', Header);