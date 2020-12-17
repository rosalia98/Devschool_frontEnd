import {Router} from '@vaadin/router';
import "./main-component.js"
import "./destinations-component.js"
import "./main-wrapper"
import "./article-destination"

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
    {path: '/',
    component: 'main-wrapper',
        children:[
            {path: '/', component: 'main-component'},
            {path: '/destinations', component: 'article-destination'},
            {path: '/destinations/:id', component: 'destinations-component'},
        ]
    },
]);