export const openAISupportDropdown = event => {
    let dropdown = document.querySelector(".dropdown1");
    const spaceBelow = window.innerHeight - event.clientY;
    let topPos = event.clientY;
    if (spaceBelow < 400) {
        topPos -= (400 - spaceBelow);
    }
    dropdown.style.top = topPos + "px";
    dropdown.style.left = event.clientX + "px";
}

export const getTextSelected = () => {
    return window.getSelection().toString();
}

export const formatData = str => {
    return str.replace(/\r\n|\n/g, "<BR>");
}


let x = 0;
let y = 0;
let isExpanded = false;
export const handleMouseDown = (e) => {
    if (isExpanded) {
        return;
    }

    x = e.clientX;
    y = e.clientY;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
};

const handleMouseMove = (e) => {


    const modelbox = document.querySelector(".modelbox");
    const deltaX = e.clientX - x;
    const deltaY = e.clientY - y;
    const newLeft = modelbox.offsetLeft + deltaX;
    const newTop = modelbox.offsetTop + deltaY;
    const maxLeft = document.documentElement.scrollWidth - modelbox.offsetWidth;
    const maxTop = document.documentElement.scrollHeight - modelbox.offsetHeight;

    // Check if the new position is within the limits of the document
    const limitedLeft = Math.min(Math.max(newLeft, 0), maxLeft);
    const limitedTop = Math.min(Math.max(newTop, 45), maxTop);
    modelbox.style.left = limitedLeft + "px";
    modelbox.style.top = limitedTop + "px";

    x = e.clientX;
    y = e.clientY;
};

const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
};