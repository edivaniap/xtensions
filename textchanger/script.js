document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#change").addEventListener("click", function () {
        var text = document.querySelector("#origintext").value;
        var op = document.querySelector("#sel").selectedIndex;

        var textFinal = "";

        switch (op) {
            case 0:
                textFinal = upper(text);
                break;
            case 1:
                textFinal = lower(text);
        }

        document.querySelector("#result").value = textFinal;
    })

    function upper(text) {
        return text.toUpperCase();
    }

    function lower(text) {
        return text.toLowerCase();
    }

})