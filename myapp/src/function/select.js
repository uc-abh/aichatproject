export const openAISupportDropdown = event => {
    let dropdown = document.querySelector(".dropdown1");
    dropdown.style.top = event.clientY + "px";
    dropdown.style.left = event.clientX + "px";
}

export const getTextSelected = () => {
    return window.getSelection().toString();
}