import gsap from "gsap";

export const animation = (svg: Element | null ,svgItems: NodeListOf<Element>) => {
    svgItems.forEach((item, index) => {
        item.id = `path_${index}`;
    });

    svgItems.forEach((item) => {
        item.addEventListener('pointerenter', () => {
            const randomValue = Math.floor(Math.random() * (10 - 3 + 3)) + 3;
            const colors = ['#971A7F', '#20B6DA', '#9B59CE']
            const randomColor = Math.floor(Math.random() * (3 - 0 + 0) + 0)
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            const circleId = `${Date.now()}`;
            circle.id = circleId;
            circle.setAttribute("cx", "0");
            circle.setAttribute("cy", "0");
            circle.setAttribute("r", "1");
            circle.setAttribute("fill", "none");
            circle.setAttribute("stroke", `${colors[randomColor]}`);
            circle.setAttribute("stroke-width", "2");
            circle.setAttribute("filter", "drop-shadow(0px 0px 4px #fff) blur(2px)");

            const animateMotion = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
            animateMotion.setAttribute("repeatCount", "indefinite");
            animateMotion.setAttribute("dur", `${randomValue}`);

            const mpath = document.createElementNS("http://www.w3.org/2000/svg", "mpath");
            mpath.setAttribute("href", `#${item.id}`);
            animateMotion.appendChild(mpath);

            const animateFill = document.createElementNS("http://www.w3.org/2000/svg", "animate");
            animateFill.setAttribute("attributeName", "r");
            animateFill.setAttribute("values", "1;3;1");
            animateFill.setAttribute("dur", `.3s`);
            animateFill.setAttribute("repeatCount", "indefinite");


            circle.appendChild(animateMotion);
            circle.appendChild(animateFill);
            svg?.appendChild(circle);
            setTimeout(() => {
                svg?.removeChild(circle)
            }, 4000)
        })
    });
}
export const removeAllEventListeners = (svgItems: NodeListOf<Element>) => {
    svgItems.forEach((item) => {
        const clonedItem = item.cloneNode(true); // Клонируем элемент, включая слушателей
        item.parentNode?.replaceChild(clonedItem, item); // Заменяем оригинальный элемент клоном
    });
};
