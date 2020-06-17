document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#change").addEventListener("click", function () {
        let text = document.querySelector("#origintext").value;
        let op = document.querySelector("#sel").selectedIndex;

        let textFinal = "";

        switch (op) {
            case 0:
                textFinal = upper(text);
                break;
            case 1:
                textFinal = lower(text);
        }

        document.querySelector("#result").value = textFinal;
    })

    document.querySelector("#copy").addEventListener("click", function () {
        document.querySelector("#result").select();
        document.execCommand("copy");
    })

    function upper(text) {
        return text.toUpperCase();
    }

    function lower(text) {
        return text.toLowerCase();
    }

})