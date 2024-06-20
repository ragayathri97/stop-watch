$(document).ready(function() {
    let timer;
    let running = false;
    let startTime;
    let elapsedTime = 0;

    function updateDisplay() {
        const hours = Math.floor(elapsedTime / 3600000);
        const minutes = Math.floor((elapsedTime % 3600000) / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);

        $('#display').text(
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        );
    }

    $('#startPause').click(function() {
        if (!running) {
            startTime = Date.now() - elapsedTime;
            timer = setInterval(function() {
                elapsedTime = Date.now() - startTime;
                updateDisplay();
            }, 1000);
            running = true;
        } else {
            clearInterval(timer);
            running = false;
        }
    });

    $('#stopReset').click(function() {
        if (running) {
            clearInterval(timer);
            running = false;
        } else {
            elapsedTime = 0;
            updateDisplay();
        }
    });

    updateDisplay();
});
