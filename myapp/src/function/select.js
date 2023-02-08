export function selectText() {
    document.addEventListener("mouseup", function() {
        let selectedText = window.getSelection().toString();
        let dropdown = document.querySelector(".dropdown1");

        if (selectedText.length === 0) {
            dropdown.style.display = "none";

        } else {
            let position = window.getSelection().getRangeAt(0).getBoundingClientRect();
            dropdown.style.display = "block";
            dropdown.style.top = position.y + position.height + "px";
            dropdown.style.left = position.x + "px";
        }
    });
}