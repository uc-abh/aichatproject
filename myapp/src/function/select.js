export function selectText() {
    let unselected_button = document.querySelector(".unselected_button");
    unselected_button.addEventListener("click", function() {
        let dropdown = document.querySelector(".dropdown1");
        // let position = window.getSelection().getRangeAt(0).getBoundingClientRect();
        dropdown.style.display = "block";
        dropdown.style.top = event.clientY + "px";
        dropdown.style.left = event.clientX + "px";
    })
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