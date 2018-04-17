let width = 144, height = 16;
let ledCache = [];

let currentEDSCode = 5, currentEDSScroll = 0;

function generateLEDCssCode() {
    let pixelSize = Math.ceil(window.innerWidth * 0.005);

    let cssData =
`
    .led {
        width: ${pixelSize}px;
        height: ${pixelSize}px;
    }

    #led-container {
        width: ${width * Math.ceil(window.innerWidth * 0.0055)}px;
        grid-template-columns: repeat(${width}, ${Math.ceil(window.innerWidth * 0.0055)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.001)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.0055)}px;
    }
`;

    document.getElementById('led-style').textContent = cssData;
}

window.addEventListener('resize', () => {
    generateLEDCssCode();
})

window.addEventListener('load', () => {
    generateLEDCssCode();
    for (let x = 0; x < width; x++) {
        ledCache.push([]);
        for (let y = 0; y < height; y++) {
            ledCache[x].push([]);
        }
    }

    let ledContainer = document.getElementById('led-container');
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let ledSegment = document.createElement('div');
            ledSegment.id = 'led-' + x + '-' + y;
            ledSegment.className = 'led-segment';

            let led = document.createElement('div');
            led.className = 'led led-off';

            ledSegment.appendChild(led);

            ledCache[x][y] = led;

            ledContainer.appendChild(ledSegment);
        }
    }

    setInterval(edsHeartbeat, 4000);
    edsHeartbeat();
});

function getTextWidth(chars, font, spaceWidth) {
    return chars.map(char => !!fonts[font][char] ? fonts[font][char][0].length + spaceWidth : spaceWidth + 4).reduce((a, b) => a + b, 0) - spaceWidth;
}

function showService(serviceNumber) {
    let textWidth = getTextWidth([...serviceNumber], 'full', 2);
    let startX = width - textWidth;
    drawText(serviceNumber, 'full', 2, startX, 0);
}

function drawText(text, font, spaceWidth, xPos, yPos) {
    let chars = [...text];

    font = font || 'thick';
    spaceWidth = spaceWidth || 1;
    xPos = xPos || 0;
    yPos = yPos || 0;

    chars.forEach(char => {
        xPos += showChar(char, font, xPos, yPos) + spaceWidth;
    });
}

function showChar(char, type, dx, dy) {
    if (!(type in fonts)) return;

    let charData = fonts[type][char];
    if (!charData) {
        charData = fonts['unknown-char'];
    }

    let charWidth = charData[0].length;
    let charHeight = charData.length;

    for (let y = 0; y < charHeight; y++) {
        for (let x = 0; x < charWidth; x++) {
            setLED(x + dx, y - (dy || 0) + (height - charHeight), charData[y][x]);
        }
    }
    return charWidth;
}

function setLED(x, y, state) {
    if (!ledCache[x]) return;
    let led = ledCache[x][y];

    if (!led) return;

    var state = 'led-' + (state ? 'on' : 'off');
    led.className = 'led ' + state;
}

function clearLEDs() {
    clearRect(0, 0, width, height);
}

function clearRect(sx, sy, ex, ey) {
    for (let y = sy; y < ey; y++) {
        for (let x = sx; x < ex; x++) {
            setLED(x, height - y - 1, false);
        }
    }
}

function parseRule(rule) {
    let specialChars = ['[', ']', '.', '!', '{', '}', '(', ')'];
    let opening = ['[', '(', '{'];
    let closing = [']', ')', '}'];
    let tokens = [];
    let currentToken = '';
    let parseDepth = 0;

    [...rule].forEach(char => {
        if (!specialChars.includes(char)) currentToken += char;
        else {
            if (opening.includes(char)) {
                parseDepth++;

                if (currentToken !== '')
                    tokens.push(currentToken);
                if (parseDepth == 1) currentToken = '';
                currentToken += char;
            } else if (closing.includes(char)) {
                parseDepth--;
                if (parseDepth == 0) {
                    currentToken += char;
                    tokens.push(currentToken);
                    currentToken = '';
                }
            } else {
                if (currentToken !== '')
                    tokens.push(currentToken);
                tokens.push(char);
                currentToken = '';
            }
        }
    });

    if (currentToken !== '') tokens.push(currentToken);

    return tokens.filter(Boolean);
}

function simpleParse(text) {
    let parserFunctions = [Number, (text) => text === 'true'];

    return parserFunctions.map(func => func(text)).filter(result => Boolean(result) || !isNaN(result))[0];
}

function parseVariables(variableRules, edsData, arrayPos) {
    let variablePool = {},
        variableNames = Object.keys(variableRules);

    variableNames.forEach(variableName => {
        let arrayPos_ = arrayPos.slice(0);
        let variableRule = variableRules[variableName];
        if (variableRule.startsWith('$')) { // grab data from eds data
            variableRule = parseRule(variableRule.slice(1));

            let specialChars = ['[', ']', '.', '!', '{', '}', '(', ')'];
            let currentState = 'assignment';
            let currentVariable = null;
            let skipNext = false;
            let negate = false;

            variableRule.forEach((token, i) => {
                if (skipNext) {
                    skipNext = false;
                    return;
                }
                if (!specialChars.includes(token.slice(0, 1))) { //variable name
                    let prevVariableName = variableRule[i - 1];
                    if (prevVariableName === '[]') {
                        currentVariable = currentVariable[token];
                    } else
                    currentVariable = edsData[token];
                } else {
                    if (token === '!') {
                        negate = !negate;
                    } else if (token === '[]') {
                        let prevVariableName = variableRule[i - 1];
                        currentVariable = edsData[prevVariableName][arrayPos_.shift()];
                    } else if (token === '.') {
                        let nextVariableName = variableRule[i + 1];
                        currentVariable = currentVariable[nextVariableName];
                        skipNext = true;
                    } else if (token.startsWith('{') && token.endsWith('}')) {
                        if (currentVariable === undefined) {
                            currentVariable = simpleParse(token.slice(1, -1));
                        }
                    } else if (token.startsWith('(') && token.endsWith(')')) {
                        let comparisonType = token.slice(1, -2);

                        let objectClass = Object.prototype.toString.call(currentVariable).slice(8, -1).toLowerCase();
                        currentVariable = (objectClass === comparisonType);
                    }
                }
            });

            if (currentState === 'assignment') {
                if (negate)
                    variablePool[variableName] = !currentVariable;
                else
                    variablePool[variableName] = currentVariable;
            }
        } else { // literal
            variablePool[variableName] = variableRule;
        }
    });
    return variablePool;
}

function parseFormat(format, variablePool) {
}

function renderEDS(currentEDSCode, currentEDSScroll) {
    let edsData = EDSData[currentEDSCode];
    let edsFormat = EDSTemplates[edsData.renderType];

    edsFormat.forEach(renderGuideline => {
        let guidelineActive = parseVariables({_: renderGuideline.active || 'true'}, edsData, [currentEDSScroll])._;
        if (!guidelineActive) return;

        let variablePool = parseVariables(renderGuideline.variables, edsData, [currentEDSScroll]);

        let mainFont = parseVariables({_: renderGuideline.font}, edsData, [currentEDSScroll])._;

        let format;

        if (Object.prototype.toString.call(renderGuideline.format).slice(8, -1) === 'Array') { // Multiline format
            format = parseFormat(renderGuideline.format, variablePool);
        } else if (Object.prototype.toString.call(renderGuideline.format).slice(8, -1) === 'Object') { // Choose format from condition
            let formatSelectionRules = Object.keys(renderGuideline.format).map(rule => {
                return parseVariables({_: rule}, edsData, [currentEDSScroll])._;
            });

            let firstTrue = formatSelectionRules.indexOf(true);
            if (firstTrue === -1) return; // Couldn't get format so inactivate render guideline

            format = parseFormat(renderGuideline.format[Object.keys(renderGuideline.format)[firstTrue]], variablePool);
        } else { // Singleline format
            format = parseFormat(renderGuideline.format, variablePool);
        }
    });
}

function edsHeartbeat() {
    let edsData = EDSData[currentEDSCode];

}

window.addEventListener('message', event => {
    let eventData = JSON.parse(event.data);

    if (event.origin == location.origin) {
        switch (eventData.mode) {
            case 'codeUpdated':
                currentEDSCode = eventData.code;
                break;
        }
    }
});
