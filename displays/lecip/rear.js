let width = 40, height = 20;

let ledCache = {};

window.addEventListener('load', () => {
    let ledContainer = document.getElementById('led-container');
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let ledSegment = document.createElement('div');
            ledSegment.id = 'led-' + x + '-' + y;
            ledSegment.className = 'led-segment';

            let led = document.createElement('div');
            led.className = 'led led-off';

            ledSegment.appendChild(led);

            ledCache[x + '-' + y] = led;

            ledContainer.appendChild(ledSegment);
        }
    }

});

function setLEDState(x, y, state) {
    let led = ledCache[x + '-' + y];

    if (!led) return;

    var state = 'led-' + (state ? 'on' : 'off');
    led.className = 'led ' + state;
}

function showChar(char, type, dx) {
    if (!(type in charSet)) return;
    if (!(char in charSet[type])) return;

    let charData = charSet[type][char];

    let charWidth = charData[0].length;
    let charHeight = charData.length;

    for (let y = 0; y < charHeight; y++) {
        for (let x = 0; x < charWidth; x++) {
            setLEDState(x + dx, y + (height - charHeight), charData[y][x]);
        }
    }
    return charWidth;
}

function clearLEDs() {
    clearRect(0, 0, width, height);
}

function clearRect(sx, sy, ex, ey) {
    for (let y = sy; y < ey; y++) {
        for (let x = sx; x < ex; x++) {
            setLEDState(x, y, false);
        }
    }
}

window.addEventListener('message', event => {
    let eventData = JSON.parse(event.data);
    if (event.origin === location.origin) {
        switch (eventData.type) {
            case 'svc-update':
                handleSvcUpdate(eventData.svc);
                break;
        }
    }
});

function handleSvcUpdate(svc) {
    console.log('rear: change to ' + svc)

    clearLEDs();

    var numbers = [...svc.toString()];

    var curX = 3;

    let font = '';

    if (numbers.length < 4) font = 'medium'
    else font = 'thin';

    numbers.forEach(number => {
        curX += showChar(number, font, curX) + 2;
    });
}
