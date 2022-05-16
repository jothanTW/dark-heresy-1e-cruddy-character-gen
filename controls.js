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
    let params = new URL(window.location.href);
    if (useId) {
        params.searchParams.set("id", document.getElementById("idField").value);
    } else {
        params.searchParams.delete("id");
    }
    window.location.href = params.href;
}

function isValidInput(inp) {
    return inp !== null &&
        /^[0-9]{8}$/.test(inp) &&
        inp >= minSeed &&
        inp <= maxSeed;
}
