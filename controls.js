let ele;
let button;

function setElement() {
    ele = document.getElementById("idField");
    button = document.getElementById("characterButton");
}

function onInputHandler() {
    ele.value = ele.value.replaceAll(new RegExp("[^0-9]+", "g"), "");
    button.disabled = !isValidInput(ele.value);
}

function refresh(useId) {
    let s = useId ? "?id=" + document.getElementById("idField").value : "";
    window.location.search = s; // firefox
    window.location.reload();
    if (window.chrome) {// chrome
        window.location.search = s; 
    }
}

function isValidInput(inp) {
    return inp !== null &&
        /^[0-9]{8}$/.test(inp) &&
        inp >= minSeed &&
        inp <= maxSeed;
}