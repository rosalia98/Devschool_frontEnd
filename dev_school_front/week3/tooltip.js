//selector css: [] - attr
// daca puneam 'button' - selecta PRIMUL buton
const tooltipElements = document.querySelectorAll('[data-tooltip]');
console.log(tooltipElements);

//event - semnal trimise de el din DOM (si nu numai)
//atasam handler pt a reactiona la event uri
tooltipElements.forEach(element => {
    element.addEventListener("mouseover", (event)=>{
        console.log(event);
        const tooltip = document.createElement("div");

        tooltip.textContent = element.dataset.tooltip;
        tooltip.id = "tooltip";
        tooltip.style.background = 'grey';
        tooltip.style.padding = '4px 8px';
        tooltip.style.color = 'white';
        tooltip.style.position = 'absolute';

        const elementBounds = element.getBoundingClientRect();
        console.log(elementBounds);

        document.body.appendChild(tooltip);
        //vrem deasupra elementului - scadem dimensiunea lui (offsetHeight)
        //elementcounds.top - offset e relativ la viewport (treb luata in considerare distanta scrollata)
        console.log(elementBounds.top - window.screenY - tooltip.offsetHeight);
        tooltip.style.top = elementBounds.top - tooltip.offsetHeight + 'px'; 
        tooltip.style.left = elementBounds.left - (tooltip.offsetWidth - elementBounds.width)/2+ 'px';

    });
    element.addEventListener("mouseout",(event)=>{
        const tooltip = document.getElementById("tooltip");
        tooltip.remove();
    });
});
