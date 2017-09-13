function init() {
    var mousePosition;
    var div;
    var isDown = false;
    div = document.getElementById("view");

    div.addEventListener('mousedown', function (e) {
        isDown = true;
    }, true);
    document.addEventListener('mouseup', function () {
        isDown = false;
    }, true);
    document.addEventListener('mousemove', function (event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = { x: event.clientX, y: event.clientY };
            // div.style.clip = "rect(" + (mousePosition.y - 150) + "px, " + (mousePosition.x + 230) + "px, " + (mousePosition.y + 150) + "px, " + (mousePosition.x - 230) + "px )";
            // circle(10% at 50% 50%);
            div.style.clip = "circle(10% at " + (mousePosition.x - 150) + "% " + (mousePosition.y - 150) +"% )";
    }
    }, true);

    alert('hello');

}