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