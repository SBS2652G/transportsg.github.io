EDSTemplateSet['TTSG'] = {
    standardService: [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber',
                serviceFont: 'tts-svc'
            },
            font: 'tts-svc',
            format: '<serviceNumber,serviceFont,0>',
            spaceWidth: 2,
            align: 'right'
        },
        { // Render DEST via ROAD [SVC]
            variables: {
                currentRoad: '$scrolls[]text',
                currentRoadFont: '$scrolls[]font',
                destination: '$destination.text',
                destinationFont: '$destination.font',
            },
            font: '$scrolls[]font',
            active: '$!scrolls[]extraMsg{false}',
            format: ['<destination,destinationFont,7>', '<currentRoad,currentRoadFont,0>'],
            spaceWidth: 1,
            align: 'centre-width[0]'
        },
        { // Render TTS Extra messages
            variables: {
                fullDestination: '$scrolls[]text',
                image: '$scrolls[]image',
                yPosTop: '$scrolls[]yPosTop',
                yPosBelow: '$scrolls[]yPosBelow'
            },
            font: '$scrolls[]font',
            active: '$scrolls[]extraMsg{false}',
            format: {
                '$scrolls[]text(array?)': ['<fullDestination[0],,yPosTop>', '<fullDestination[1],,yPosBelow>'], // Render multiline dest
                '$!scrolls[]text(array?)': ['<fullDestination,,yPosBelow>'] // Render singleline dest
            },
            spaceWidth: 1,
            align: 'centre-width[0]+image(0)',
            images: [
                {
                    name: '$scrolls[]image',
                    x: 0
                }
            ]
        }
    ],
    full: [,
        {
            variables: {
                text: '$text',
                font: 'large'
            },
            font: 'large',
            format: '<text,font,0>',
            spaceWidth: 3,
            align: 'centre'
        }
    ]
}

EDSDataSet['TTSG'] = {
    1111: {
        renderType: 'full',
        text: 'Off Service'
    },
    661: {
        renderType: 'standardService',
        serviceNumber: '66',
        destination: {
            text: 'JURONG EAST',
            font: 'fat'
        },
        scrolls: [
            {
                text: ['Have a pleasant', 'journey!'],
                font: 'tts-message',
                yPosTop: 9,
                yPosBelow: 1,
                extraMsg: true,
                image: 'logo'
            },
            {
                text: 'JURONG EAST',
                font: 'fat',
                yPosTop: 0,
                yPosBelow: 3,
                extraMsg: true,
                image: 'mrt'
            },
            {
                text: 'BEDOK RESERVOIR RD',
                font: 'narrow'
            }
        ]
    },
    662: {
        renderType: 'standardService',
        serviceNumber: '66',
        destination: {
            text: 'BEDOK',
            font: 'fat'
        },
        scrolls: [
            {
                text: ['Have a pleasant', 'journey!'],
                font: 'tts-message',
                yPosTop: 9,
                yPosBelow: 1,
                extraMsg: true,
                image: 'logo'
            },
            {
                text: 'BEDOK',
                font: 'fat',
                yPosTop: 0,
                yPosBelow: 3,
                extraMsg: true,
                image: 'mrt'
            },
            {
                text: 'BUKIT BATOK CENTRAL',
                font: 'narrow'
            },
            {
                text: 'DUNEARN RD',
                font: 'narrow'
            },
            {
                text: 'LITTLE INDIA',
                font: 'narrow'
            },
            {
                text: 'MACPHERSON RD / EST',
                font: 'narrow'
            },
            {
                text: 'BEDOK RESERVOIR RD',
                font: 'narrow'
            }
        ]
    },
    771: {
        renderType: 'standardService',
        serviceNumber: '77',
        destination: {
            text: 'BUKIT BATOK',
            font: 'fat'
        },
        scrolls: [
            {
                text: ['Have a pleasant', 'journey!'],
                font: 'tts-message',
                yPosTop: 9,
                yPosBelow: 1,
                extraMsg: true,
                image: 'logo'
            },
            {
                text: 'BUKIT BATOK',
                font: 'fat',
                yPosTop: 0,
                yPosBelow: 3,
                extraMsg: true,
                image: 'mrt'
            },
            {
                "text": "STAMFORD RD",
                "font": "narrow"
            },
            {
                "text": "ORCHARD BOULEVARD",
                "font": "narrow"
            },
            {
                "text": "HOLLAND RD / VILLAGE",
                "font": "narrow"
            },
            {
                "text": "SIXTH AVE",
                "font": "narrow"
            },
            {
               "text": "TOH TUCK RD",
               "font": "narrow"
            }
        ]
    },
    772: {
        renderType: 'standardService',
        serviceNumber: '77',
        destination: {
            text: 'MARINA CENTRE',
            font: 'fat'
        },
        scrolls: [
            {
                text: ['Have a pleasant', 'journey!'],
                font: 'tts-message',
                yPosTop: 9,
                yPosBelow: 1,
                extraMsg: true,
                image: 'logo'
            },
            {
                text: 'MARINA CENTRE',
                font: 'fat',
                yPosTop: 0,
                yPosBelow: 3,
                extraMsg: true,
                image: 'blank'
            },
            {
                "text": "TOH TUCK RD",
                "font": "narrow"
            },
            {
                "text": "SIXTH AVE",
                "font": "narrow"
            },
            {
                "text": "HOLLAND RD / VILLAGE",
                "font": "narrow"
            },
            {
                "text": "ORCHARD RD",
                "font": "narrow"
            }
        ]
    },
    1061: {
        renderType: 'standardService',
        serviceNumber: '106',
        destination: {
            text: 'BUKIT BATOK',
            font: 'fat'
        },
        scrolls: [
            {
                text: ['Have a pleasant', 'journey!'],
                font: 'tts-message',
                yPosTop: 9,
                yPosBelow: 1,
                extraMsg: true,
                image: 'logo'
            },
            {
                text: 'BUKIT BATOK',
                font: 'fat',
                yPosTop: 0,
                yPosBelow: 3,
                extraMsg: true,
                image: 'mrt'
            },
            {
                text: 'BAYFRONT AVE / MBS',
                font: 'narrow'
            },
            {
                text: 'ORCHARD BOULEVARD',
                font: 'narrow'
            },
            {
                text: 'HOLLAND RD / VILLAGE',
                font: 'narrow'
            },
            {
                text: 'C\'WEALTH AVE WEST',
                font: 'narrow'
            },
            {
                text: 'TOH TUCK AVE',
                font: 'narrow'
            }
        ]
    },
    1062: {
        renderType: 'standardService',
        serviceNumber: '106',
        destination: {
            text: 'SHENTON WAY',
            font: 'fat'
        },
        scrolls: [
            {
                text: ['Have a pleasant', 'journey!'],
                font: 'tts-message',
                yPosTop: 9,
                yPosBelow: 1,
                extraMsg: true,
                image: 'logo'
            },
            {
                text: 'SHENTON WAY',
                font: 'fat',
                yPosTop: 0,
                yPosBelow: 3,
                extraMsg: true,
                image: 'blank'
            },
            {
                text: 'C\'WEALTH RD WEST',
                font: 'narrow'
            },
            {
                text: 'HOLLAND RD / VILLAGE',
                font: 'narrow'
            },
            {
                text: 'ORCHARD RD',
                font: 'narrow'
            },
            {
                text: 'SUNTEC CITY',
                font: 'narrow'
            },
            {
                text: 'BAYFRONT AVE / MBS',
                font: 'narrow'
            }
        ]
    },
    1431: {
        renderType: 'standardService',
        serviceNumber: '143',
        destination: {
            text: 'JURONG EAST',
            font: 'fat'
        },
        scrolls: [
            {
                text: ['Have a pleasant', 'journey!'],
                font: 'tts-message',
                yPosTop: 9,
                yPosBelow: 1,
                extraMsg: true,
                image: 'logo'
            },
            {
                text: 'JURONG EAST',
                font: 'fat',
                yPosTop: 0,
                yPosBelow: 3,
                extraMsg: true,
                image: 'mrt'
            },
            {
                text: 'THOMSON RD',
                font: 'narrow'
            },
            {
                text: 'ORCHARD RD',
                font: 'narrow'
            },
            {
                text: 'NEW BRIDGE RD',
                font: 'narrow'
            },
            {
                text: 'KAMPONG BAHRU RD',
                font: 'narrow'
            },
            {
                text: 'PASIR PANJANG RD',
                font: 'narrow'
            },
            {
                text: 'WEST COAST RD',
                font: 'narrow'
            },
            {
                text: 'JURONG TOWN HALL RD',
                font: 'narrow'
            }
        ]
    },
    1432: {
        renderType: 'standardService',
        serviceNumber: '143',
        destination: {
            text: 'TOA PAYOH',
            font: 'fat'
        },
        scrolls: [
            {
                text: ['Have a pleasant', 'journey!'],
                font: 'tts-message',
                yPosTop: 9,
                yPosBelow: 1,
                extraMsg: true,
                image: 'logo'
            },
            {
                text: 'TOA PAYOH',
                font: 'fat',
                yPosTop: 0,
                yPosBelow: 3,
                extraMsg: true,
                image: 'mrt'
            },
            {
                text: 'HARBOURFRONT',
                font: 'narrow'
            }
        ]
    },
    1731: {
        renderType: 'standardService',
        serviceNumber: '173',
        destination: {
            text: 'CLEMENTI',
            font: 'fat'
        },
        scrolls: [
            {
                text: ['Have a pleasant', 'journey!'],
                font: 'tts-message',
                yPosTop: 9,
                yPosBelow: 1,
                extraMsg: true,
                image: 'logo'
            },
            {
                text: 'CLEMEMTI',
                font: 'fat',
                yPosTop: 0,
                yPosBelow: 3,
                extraMsg: true,
                image: 'mrt'
            },
            {
                text: 'BT BATOK EAST AVE 4',
                font: 'narrow'
            },
            {
                text: 'HILLVIEW AVE',
                font: 'narrow'
            },
            {
                text: 'HUME AVE',
                font: 'narrow'
            },
            {
                text: 'BEAUTY WORLD MRT',
                font: 'narrow'
            },
            {
                text: 'TOH TUCK RD / TERRACE',
                font: 'narrow'
            }
        ]
    },
    1891: {
        renderType: 'standardService',
        serviceNumber: '189',
        destination: {
            text: 'CLEMENTI AVE 1',
            font: 'fat'
        },
        scrolls: [
            {
                text: ['Have a pleasant', 'journey!'],
                font: 'tts-message',
                yPosTop: 9,
                yPosBelow: 1,
                extraMsg: true,
                image: 'logo'
            },
            {
                text: 'CLEMENTI AVE 1',
                font: 'fat',
                yPosTop: 0,
                yPosBelow: 3,
                extraMsg: true,
                image: 'mrt'
            },
            {
                text: 'BT BATOK EAST AVE 6',
                font: 'narrow'
            }
        ]
    },
    1: {
        renderType: 'standardService',
        serviceNumber: '',
        destination: {
            text: 'MESSAGE SCROLL',
            font: 'fat'
        },
        scrolls: [
            {
                text: ['Have a pleasant', 'journey!'],
                yPosTop: 9,
                yPosBelow: 1,
                font: 'tts-message',
                extraMsg: true,
                image: 'logo'
            },
            {
                text: 'BUKIT BATOK',
                font: 'fat',
                yPosTop: 0,
                yPosBelow: 3,
                extraMsg: true,
                image: 'mrt'
            },
            {
                text: ['Merry Christmas &', 'Happy New Year !'],
                font: 'tts-message',
                yPosTop: 9,
                yPosBelow: 1,
                extraMsg: true,
                image: 'christmas'
            },
            {
                text: 'GHXC',
                font: 'tts-chinese',
                yPosTop: 1,
                yPosBelow: 1,
                extraMsg: true,
                image: 'cny'
            },
            {
                text: 'Happy Deepavali !',
                font: 'thin',
                yPosTop: 1,
                yPosBelow: 4,
                extraMsg: true,
                image: 'candle'
            },
            {
                text: '',
                yPosTop: 1,
                yPosBelow: 1,
                font: 'tts-message',
                extraMsg: true,
                image: 'gas'
            },
        ]
    }
}

EDSImageSet['TTSG'] = {
    christmas: [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    ],
    cny: [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    logo: [
    	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    	[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    	[0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    	[0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
    	[0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0],
    	[1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
    	[1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1],
    	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    	[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    	[0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    	[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    mrt: [
    	[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    	[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    	[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    	[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    	[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    	[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
    	[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    	[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    	[0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    	[1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
    	[1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
    	[1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1],
    	[1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
    	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    candle: [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    ],
    gas: [
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
        [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
        [1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0]
    ],
    blank: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
}
