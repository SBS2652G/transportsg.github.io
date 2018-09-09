EDSTemplateSet['SBST'] = {
    standardService: [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: '$serviceFont',
            format: '<serviceNumber,,0>',
            spaceWidth: 1,
            align: 'right'
        },
        { // Render DEST via ROAD [SVC]
            variables: {
                currentRoad: '$scrolls[]text',
                currentRoadFont: '$scrolls[]font',
                destination: '$destination.text',
                destinationFont: '$destination.font',
                arrow: '> ',
            },
            font: '$scrolls[]font',
            format: ['<currentRoad,currentRoadFont,9>','<arrow,destinationFont,0><destination,destinationFont,0>'],
            yPositions: [9, 0],
            spaceWidth: 1,
            align: 'left'
        }
    ],
    'int-loopSvc': [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: '$serviceFont',
            format: '<serviceNumber,,0>',
            spaceWidth: 1,
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
            format: ['<currentRoad,currentRoadFont,9>','<destination,destinationFont,0>'],
            yPositions: [9, 0],
            spaceWidth: 1,
            align: 'left'
        }
    ],
    expSvc: [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: '$serviceFont',
            format: '<serviceNumber,,0>',
            spaceWidth: 1,
            align: 'right'
        },
        {
            variables: {
            },
            font: 'thick',
            format: '',
            spaceWidth: 1,
            align: 'left',
            images: [
                {
                    name: 'express',
                    x: 0
                }
            ]
        }
    ],
    full: [
        {
            variables: {
                text: '$text'
            },
            font: 'full',
            format: '<text,,0>',
            spaceWidth: 1,
            align: 'centre'
        }
    ],
    image: [
        {
            variables: {
                text: ''
            },
            font: 'thick',
            format: '<text,,>',
            spaceWidth: 0,
            align: 'centre',
            images: [
                {
                    name: '$image',
                    x: '$x'
                }
            ]
        }
    ]
}

EDSDataSet['SBST'] = {
    41: {
        renderType: 'int-loopSvc',
        serviceNumber: '4',
        serviceFont: 'full',
        destination: {
            text: 'TAMPINES INT-CHANGI NTH WAY',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "TAMPINES AVE 7",
                "font": "narrow"
            },
            {
                "text": "FLORA RD",
                "font": "narrow"
            },
            {
                "text": "CHANGI NORTH WAY",
                "font": "narrow"
            },
            {
                "text": "FLORA RD",
                "font": "narrow"
            },
            {
                "text": "TAMPINES AVE 7",
                "font": "narrow"
            }
        ]
    },
    111: {
        renderType: 'int-loopSvc',
        serviceNumber: '11',
        serviceFont: 'full',
        destination: {
            text: 'LOR 1 GEYLANG TER-RHU CROSS',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "SIMS WAY",
                "font": "narrow"
            },
            {
                "text": "STADIUM CRESCENT",
                "font": "narrow"
            },
            {
                "text": "RHU CROSS",
                "font": "narrow"
            },
            {
                "text": "STADIUM WALK",
                "font": "narrow"
            },
            {
                "text": "SIMS WAY",
                "font": "narrow"
            }
        ]
    },
    108: {
        renderType: 'expSvc',
        serviceNumber: '10e',
        serviceFont: 'full',
        text: 'EXPRESS 10e'
    },
    109: {
        renderType: 'expSvc',
        serviceNumber: '10e',
        serviceFont: 'full',
        text: 'EXPRESS 10e'
    },
    148: {
        renderType: 'expSvc',
        serviceNumber: '14e',
        serviceFont: 'full',
        text: 'EXPRESS 14e'
    },
    149: {
        renderType: 'expSvc',
        serviceNumber: '14e',
        serviceFont: 'full',
        text: 'EXPRESS 14e'
    },
    561: {
        renderType: 'int-loopSvc',
        serviceNumber: '56',
        serviceFont: 'full',
        destination: {
            text: 'BISHAN INT-MARINA CTR TER',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "BISHAN ST 13",
                "font": "narrow"
            },
            {
                "text": "LOR 6 TOA PAYOH",
                "font": "narrow"
            },
            {
                "text": "THOMSON RD",
                "font": "narrow"
            },
            {
                "text": "BUKIT TIMAH RD",
                "font": "narrow"
            },
            {
                "text": "MIDDLE RD",
                "font": "narrow"
            }
        ]
    },
    711: {
        renderType: 'int-loopSvc',
        serviceNumber: '71',
        serviceFont: 'full',
        destination: {
            text: 'YCK INT-BISHAN ST 11',
            font: 'narrow'
        },
        scrolls: [
            {
                "text": "ANG MO KIO AVE 4",
                "font": "narrow"
            },
            {
                "text": "ANG MO KIO AVE 1",
                "font": "narrow"
            },
            {
                "text": "BISHAN RD",
                "font": "narrow"
            },
            {
                "text": "BRADDELL RD",
                "font": "narrow"
            },
            {
                "text": "BISHAN RD",
                "font": "narrow"
            },
            {
                "text": "ANG MO KIO AVE 1",
                "font": "narrow"
            },
            {
                "text": "ANG MO KIO AVE 4",
                "font": "narrow"
            }
        ]
    },
    761: {
        renderType: 'standardService',
        serviceNumber: '76',
        serviceFont: 'full',
        destination: {
            text: 'EUNOS INT',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "ANG MO KIO AVE 4",
                "font": "narrow"
            },
            {
                "text": "ANG MO KIO AVE 3",
                "font": "narrow"
            },
            {
                "text": "YIO CHU KANG RD",
                "font": "narrow"
            },
            {
                "text": "UPPER PAYA LEBAR RD",
                "font": "narrow"
            },
            {
                "text": "PAYA LEBAR RD",
                "font": "narrow"
            }
        ]
    },
    762: {
        renderType: 'standardService',
        serviceNumber: '76',
        serviceFont: 'full',
        destination: {
            text: 'YIO CHU KANG INT',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "PAYA LEBAR RD",
                "font": "narrow"
            },
            {
                "text": "UPPER PAYA LEBAR RD",
                "font": "narrow"
            },
            {
                "text": "YIO CHU KANG RD",
                "font": "narrow"
            },
            {
                "text": "ANG MO KIO AVE 3",
                "font": "narrow"
            },
            {
                "text": "ANG MO KIO AVE 4",
                "font": "narrow"
            }
        ]
    },
    1071: {
        renderType: 'standardService',
        serviceNumber: '107',
        serviceFont: 'full',
        destination: {
            text: 'SHENTON WAY TER',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "HOUGANG AVE 10",
                "font": "narrow"
            },
            {
                "text": "UPPER SERANGOON RD",
                "font": "narrow"
            },
            {
                "text": "KALLANG BAHRU",
                "font": "narrow"
            },
            {
                "text": "LAVENDER ST",
                "font": "narrow"
            },
            {
                "text": "BEACH RD",
                "font": "narrow"
            }
        ]
    },
    911: {
        renderType: 'int-loopSvc',
        serviceNumber: '91',
        serviceFont: 'full',
        destination: {
            text: 'BUONA V TER-AYER RAJAH CRES',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "C'WEALTH AVE",
                "font": "narrow"
            },
            {
                "text": "NTH BUONA VISTA RD",
                "font": "narrow"
            },
            {
                "text": "AYER RAJAH AVE",
                "font": "narrow"
            },
            {
                "text": "AYER RAJAH CRES",
                "font": "narrow"
            },
            {
                "text": "AYER RAJAH AVE",
                "font": "narrow"
            },
            {
                "text": "NTH BUONA VISTA RD",
                "font": "narrow"
            },
            {
                "text": "C'WEALTH AVE",
                "font": "narrow"
            }
        ]
    },
    1072: {
        renderType: 'standardService',
        serviceNumber: '107',
        serviceFont: 'full',
        destination: {
            text: 'HOUGANG CTRL INT',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "BEACH RD",
                "font": "narrow"
            },
            {
                "text": "LAVENDER ST",
                "font": "narrow"
            },
            {
                "text": "KALLANG BAHRU",
                "font": "narrow"
            },
            {
                "text": "UPPER SERANGOON RD",
                "font": "narrow"
            },
            {
                "text": "HOUGANG AVE 10",
                "font": "narrow"
            }
        ]
    },
    1111: {
        renderType: 'full',
        text: 'OFF SERVICE'
    },
    1201: {
        renderType: 'int-loopSvc',
        serviceNumber: '120',
        serviceFont: 'full',
        destination: {
            text: 'KG.BAHRU TER-TK.BLANGAH',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "JALAN BUKIT MERAH",
                "font": "narrow"
            },
            {
                "text": "TELOK BLANGAH HTS",
                "font": "narrow"
            },
            {
                "text": "TELOK BLANGAH RD",
                "font": "narrow"
            },
            {
                "text": "ALEXANDRA RD",
                "font": "narrow"
            },
            {
                "text": "TIONG BAHRU RD",
                "font": "narrow"
            }
        ]
    },
    1231: {
        renderType: 'standardService',
        serviceNumber: '123',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT MERAH INT',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "BUKIT PURMEI AVE",
                "font": "narrow"
            },
            {
                "text": "LOWER DELTA RD",
                "font": "narrow"
            },
            {
                "text": "TIONG BAHRU RD",
                "font": "narrow"
            },
            {
                "text": "HAVELOCK RD",
                "font": "narrow"
            },
            {
                "text": "ORCHARD BLVD",
                "font": "narrow"
            },
            {
                "text": "HOLLAND RD",
                "font": "narrow"
            },
            {
                "text": "QUEENSWAY",
                "font": "narrow"
            }
        ]
    },
    1232: {
        renderType: 'standardService',
        serviceNumber: '123',
        serviceFont: 'full',
        destination: {
            text: 'SENTOSA',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "QUEENSWAY",
                "font": "narrow"
            },
            {
                "text": "HOLLAND RD",
                "font": "narrow"
            },
            {
                "text": "ORCHARD RD",
                "font": "narrow"
            },
            {
                "text": "HAVELOCK RD",
                "font": "narrow"
            },
            {
                "text": "TIONG BAHRU RD",
                "font": "narrow"
            },
            {
                "text": "LOWER DELTA RD",
                "font": "narrow"
            },
            {
                "text": "BUKIT PURMEI AVE",
                "font": "narrow"
            }
        ]
    },
    1233: {
        renderType: 'int-loopSvc',
        serviceNumber: '123M',
        serviceFont: 'full',
        destination: {
            text: 'HBF INT-TIONG BAHRU RD',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "BUKIT PURMEI AVE",
                "font": "narrow"
            },
            {
                "text": "LOWER DELTA RD",
                "font": "narrow"
            },
            {
                "text": "TIONG BAHRU RD",
                "font": "narrow"
            },
            {
                "text": "LOWER DELTA RD",
                "font": "narrow"
            }
        ]
    },
    1241: {
        renderType: 'standardService',
        serviceNumber: '124',
        serviceFont: 'full',
        destination: {
            text: "ST MICHAEL'S TER",
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "NEW BRIDGE RD",
                "font": "narrow"
            },
            {
                "text": "KAMPONG BAHRU RD",
                "font": "narrow"
            },
            {
                "text": "TELOK BLANGAH HTS",
                "font": "narrow"
            },
            {
                "text": "MOULMEIN RD",
                "font": "narrow"
            },
            {
                "text": "ORCHARD RD",
                "font": "narrow"
            }
        ]
    },
    1242: {
        renderType: 'standardService',
        serviceNumber: '124',
        serviceFont: 'full',
        destination: {
            text: 'HARBOURFRONT INT',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "TELOK BLANGAH HTS",
                "font": "narrow"
            },
            {
                "text": "TELOK BLANGAH WAY",
                "font": "narrow"
            },
            {
                "text": "EU TONG SEN ST",
                "font": "narrow"
            },
            {
                "text": "ORCHARD TURN",
                "font": "narrow"
            },
            {
                "text": "MOULMEIN RD",
                "font": "narrow"
            }
        ]
    },
    1291: {
        renderType: 'standardService',
        serviceNumber: '129',
        serviceFont: 'full',
        destination: {
            text: "ST MICHAEL'S TER",
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "TAMPINES AVE 1",
                "font": "narrow"
            },
            {
                "text": "BRADDELL RD",
                "font": "narrow"
            },
            {
                "text": "LOR 1 TOA PAYOH",
                "font": "narrow"
            },
            {
                "text": "BALESTIER RD",
                "font": "narrow"
            }
        ]
    },
    1292: {
        renderType: 'standardService',
        serviceNumber: '129',
        serviceFont: 'full',
        destination: {
            text: 'TAMP CONCOURSE INT',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "BALESTIER RD",
                "font": "narrow"
            },
            {
                "text": "LOR 1 TOA PAYOH",
                "font": "narrow"
            },
            {
                "text": "BRADDELL RD",
                "font": "narrow"
            },
            {
                "text": "TAMPINES AVE 1",
                "font": "narrow"
            }
        ]
    },
    1351: {
        renderType: 'standardService',
        serviceNumber: '135',
        serviceFont: 'full',
        destination: {
            text: 'SIGLAP RD',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "ANG MO KIO AVE 8",
                "font": "narrow"
            },
            {
                "text": "SERANGOON AVE 2",
                "font": "narrow"
            },
            {
                "text": "UPP ALJUNIED RD",
                "font": "narrow"
            },
            {
                "text": "TANJONG KATONG RD",
                "font": "narrow"
            },
            {
                "text": "MARINE PARADE RD",
                "font": "narrow"
            }
        ]
    },
    1352: {
        renderType: 'standardService',
        serviceNumber: '135',
        serviceFont: 'full',
        destination: {
            text: 'ANG MO KIO INT',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "MARINE PARADE RD",
                "font": "narrow"
            },
            {
                "text": "TANJONG KATONG RD",
                "font": "narrow"
            },
            {
                "text": "UPP ALJUNIED RD",
                "font": "narrow"
            },
            {
                "text": "SERANGOON AVE 2",
                "font": "narrow"
            },
            {
                "text": "ANG MO KIO AVE 8",
                "font": "narrow"
            }
        ]
    },
    1511: {
        renderType: 'standardService',
        serviceNumber: '151',
        serviceFont: 'full',
        destination: {
            text: 'KENT RIDGE TER',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "HOUGANG AVE 3",
                "font": "narrow"
            },
            {
                "text": "MACPHERSON RD",
                "font": "narrow"
            },
            {
                "text": "JALAN TOA PAYOH",
                "font": "narrow"
            },
            {
                "text": "BUKIT TIMAH RD",
                "font": "narrow"
            },
            {
                "text": "CLEMENTI RD",
                "font": "narrow"
            },
            {
                "text": "KENT RIDGE CRES",
                "font": "narrow"
            }
        ]
    },
    1512: {
        renderType: 'standardService',
        serviceNumber: '151',
        serviceFont: 'full',
        destination: {
            text: 'HOUGANG CTRL INT',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "KENT RIDGE CRES",
                "font": "narrow"
            },
            {
                "text": "CLEMENTI RD",
                "font": "narrow"
            },
            {
                "text": "DUNEARN RD",
                "font": "narrow"
            },
            {
                "text": "JALAN TOA PAYOH",
                "font": "narrow"
            },
            {
                "text": "MACPHERSON RD",
                "font": "narrow"
            },
            {
                "text": "HOUGANG AVE 3",
                "font": "narrow"
            }
        ]
    },
    1518: {
        renderType: 'expSvc',
        serviceNumber: '151e',
        serviceFont: 'full',
        text: 'EXPRESS 151e'
    },
    1519: {
        renderType: 'expSvc',
        serviceNumber: '151e',
        serviceFont: 'full',
        text: 'EXPRESS 151e'
    },

    1621: {
        renderType: 'standardService',
        serviceNumber: '162',
        serviceFont: 'full',
        destination: {
            text: 'SHENTON WAY TER',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "ANG MO KIO AVE 6",
                "font": "narrow"
            },
            {
                "text": "ANG MO KIO AVE 8",
                "font": "narrow"
            },
            {
                "text": "BISHAN ST 22",
                "font": "narrow"
            },
            {
                "text": "SIN MING AVE",
                "font": "narrow"
            },
            {
                "text": "UPPER THOMSON RD",
                "font": "narrow"
            },
            {
                "text": "THOMSON RD",
                "font": "narrow"
            },
            {
                "text": "ORCHARD RD",
                "font": "narrow"
            },
            {
                "text": "BRAS BASAH RD",
                "font": "narrow"
            }
        ]
    },

    1622: {
        renderType: 'standardService',
        serviceNumber: '162',
        serviceFont: 'full',
        destination: {
            text: 'YIO CHU KANG INT',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "STAMFORD RD",
                "font": "narrow"
            },
            {
                "text": "ORCHARD TURN",
                "font": "narrow"
            },
            {
                "text": "THOMSON RD",
                "font": "narrow"
            },
            {
                "text": "UPPER THOMSON RD",
                "font": "narrow"
            },
            {
                "text": "SIN MING AVE",
                "font": "narrow"
            },
            {
                "text": "BISHAN ST 22",
                "font": "narrow"
            },
            {
                "text": "ANG MO KIO AVE 8",
                "font": "narrow"
            },

            {
                "text": "ANG MO KIO AVE 6",
                "font": "narrow"
            }
        ]
    },
    1661: {
        renderType: 'standardService',
        serviceNumber: '166',
        serviceFont: 'full',
        destination: {
            text: 'CLEMENTI INT',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "ANG MO KIO AVE 3",
                "font": "narrow"
            },
            {
                "text": "UPP THOMSON RD",
                "font": "narrow"
            },
            {
                "text": "THOMSON RD",
                "font": "narrow"
            },
            {
                "text": "NEW BRIDGE RD",
                "font": "narrow"
            },
            {
                "text": "KAMPONG BAHRU RD",
                "font": "narrow"
            },
            {
                "text": "TELOK BLANGAH RD",
                "font": "narrow"
            },
            {
                "text": "ALEXANDRA RD",
                "font": "narrow"
            },
            {
                "text": "C'WEALTH AVE WEST",
                "font": "narrow"
            }
        ]
    },
    1662: {
        renderType: 'standardService',
        serviceNumber: '166',
        serviceFont: 'full',
        destination: {
            text: 'ANG MO KIO INT',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "C'WEALTH AVE WEST",
                "font": "narrow"
            },
            {
                "text": "ALEXANDRA RD",
                "font": "narrow"
            },
            {
                "text": "TELOK BLANGAH RD",
                "font": "narrow"
            },
            {
                "text": "KAMPONG BAHRU RD",
                "font": "narrow"
            },
            {
                "text": "EU TONG SEN ST",
                "font": "narrow"
            },
            {
                "text": "THOMSON RD",
                "font": "narrow"
            },
            {
                "text": "UPP THOMSON RD",
                "font": "narrow"
            },
            {
                "text": "ANG MO KIO AVE 3",
                "font": "narrow"
            }
        ]
    },
    1741: {
        renderType: 'standardService',
        serviceNumber: '174',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "EU TONG SEN ST",
                "font": "narrow"
            },
            {
                "text": "ORCHARD BOULEVARD",
                "font": "narrow"
            },
            {
                "text": "HOLLAND RD",
                "font": "narrow"
            },
            {
                "text": "FARRER RD",
                "font": "narrow"
            },
            {
                "text": "BUKIT TIMAH RD",
                "font": "narrow"
            },
            {
                "text": "JALAN JURONG KECHIL",
                "font": "narrow"
            },
            {
                "text": "BT BATOK EAST AVE 6&3",
                "font": "narrow"
            }
        ]
    },
    1742: {
        renderType: 'standardService',
        serviceNumber: '174',
        serviceFont: 'full',
        destination: {
            text: 'KAMPONG BAHRU TER',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'JURONG ROAD',
                font: 'narrow'
            },
            {
                "text": "BT BATOK EAST AVE 3&6",
                "font": "narrow"
            },
            {
                "text": "JALAN JURONG KECHIL",
                "font": "narrow"
            },
            {
                "text": "DUNEARN RD",
                "font": "narrow"
            },
            {
                "text": "FARRER RD",
                "font": "narrow"
            },
            {
                "text": "HOLLAND RD",
                "font": "narrow"
            },
            {
                "text": "ORCHARD RD",
                "font": "narrow"
            },
            {
                "text": "NORTH&SOUTH BRIDGE RD",
                "font": "narrow"
            }
        ]
    },
    1748: {
        renderType: 'expSvc',
        serviceNumber: '174e',
        serviceFont: 'full',
        text: 'EXPRESS 174'
    },
    1749: {
        renderType: 'expSvc',
        serviceNumber: '174e',
        serviceFont: 'full',
        text: 'EXPRESS 174'
    },
    2222: {
        renderType: 'image',
        text: 'SBS TRANSIT',
        image: 'logo',
        x: 'centre'
    },
    2401: { //likely incomplete go check!
        renderType: 'standardService',
        serviceNumber: '240',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'JALAN AHMAD IBRAHIM',
                font: 'narrow'
            },
            {
                text: 'KANG CHING RD',
                font: 'narrow'
            },
            {
                text: 'YUAN CHING RD',
                font: 'narrow'
            },
            {
                text: 'BOON LAY PLACE',
                font: 'narrow'
            },
            {
                text: 'BOON LAY WAY',
                font: 'narrow'
            },
        ]
    },
    2411: {
        renderType: 'standardService',
        serviceNumber: '241',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'JURONG WEST ST 63',
                font: 'narrow'
            },
            {
                text: 'PIONEER RD NTH',
                font: 'narrow'
            },
            {
                text: 'JURONG WEST ST 91',
                font: 'narrow'
            },
        ]
    },
    2421: {
        renderType: 'standardService',
        serviceNumber: '242',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'JURONG WEST CTRL 1',
                font: 'narrow'
            },
            {
                text: 'JALAN BOON LAY',
                font: 'narrow'
            },
            {
                text: 'JURONG WEST AVE 4',
                font: 'narrow'
            },
            {
                text: 'JURONG WEST ST 72',
                font: 'narrow'
            },
            {
                text: 'JURONG WEST AVE 5',
                font: 'narrow'
            },
            {
                text: 'JURONG WEST AVE 4',
                font: 'narrow'
            },
            {
                text: 'JALAN BOON LAY',
                font: 'narrow'
            }
        ]
    },
    2431: {
        renderType: 'standardService',
        serviceNumber: '243W',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: '',
                font: 'narrow'
            },
            {
                text: '',
                font: 'narrow'
            },
            {
                text: '',
                font: 'narrow'
            },
            {
                text: '',
                font: 'narrow'
            },
        ]
    },
    2432: {
        renderType: 'standardService',
        serviceNumber: '243G',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'JURONG WEST ST 64',
                font: 'narrow'
            },
            {
                text: 'JURONG WEST ST 75',
                font: 'narrow'
            },
            {
                text: 'JURONG WEST 81',
                font: 'narrow'
            },
            {
                text: 'JURONG WEST AVE 5',
                font: 'narrow'
            },
            {
                text: 'JURONG WEST AVE 4',
                font: 'narrow'
            },
            {
                text: 'JURONG WEST ST 62',
                font: 'narrow'
            }
        ]
    },
    2471: {
        renderType: 'int-loopSvc',
        serviceNumber: '247',
        serviceFont: 'full',
        destination: {
            text: 'TUAS TER-TUAS BAY LINK',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "TUAS AVE 7",
                "font": "narrow"
            },
            {
                "text": "TUAS CRES",
                "font": "narrow"
            },
            {
                "text": "TUAS STH AVE 5&4&7",
                "font": "narrow"
            },
            {
                "text": "TUAS STH AVE 3&9&8",
                "font": "narrow"
            },
            {
                "text": "TUAS LINK 4",
                "font": "narrow"
            }
        ]
    },
    2481: {
        renderType: 'int-loopSvc',
        serviceNumber: '248',
        serviceFont: 'full',
        destination: {
            text: 'TUAS TER-TUAS STH AVE 14',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "PIONEER RD",
                "font": "narrow"
            },
            {
                "text": "TUAS AVE 20",
                "font": "narrow"
            },
            {
                "text": "TUAS STH AVE 5",
                "font": "narrow"
            },
            {
                "text": "TUAS STH AVE 9",
                "font": "narrow"
            },
            {
                "text": "TUAS STH AVE 10",
                "font": "narrow"
            }
        ]
    },
    2581: {
        renderType: 'int-loopSvc',
        serviceNumber: '258',
        serviceFont: 'full',
        destination: {
            text: 'JOO KOON INT-JUR W. ST 64',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "PIONEER RD NTH",
                "font": "narrow"
            },
            {
                "text": "JURONG W. ST 61&81&75",
                "font": "narrow"
            },
            {
                "text": "JALAN AHMAD IBRAHIM",
                "font": "narrow"
            }
        ]
    },
    2611: {
        renderType: 'standardService',
        serviceNumber: '261',
        serviceFont: 'full',
        destination: {
            text: 'ANG MO KIO INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'ANG MO KIO AVE 3',
                font: 'narrow'
            },
            {
                text: 'ANG MO KIO AVE 10',
                font: 'narrow'
            },
            {
                text: 'ANG MO KIO IND PK 1',
                font: 'narrow'
            },
            {
                text: 'ANG MO KIO AVE 10',
                font: 'narrow'
            },
            {
                text: 'ANG MO KIO AVE 3',
                font: 'narrow'
            }
        ]
    },
    3333: {
        renderType: 'full',
        text: 'FREE SHUTTLE'
    },
    4444: {
        renderType: 'full',
        text: 'ON TEST'
    },
    5021: {
        renderType: 'expSvc',
        serviceNumber: '502',
        serviceFont: 'full',
        text: 'EXPRESS 502'
    },
    5061: {
        renderType: 'expSvc',
        serviceNumber: '506',
        serviceFont: 'full',
        text: 'EXPRESS 506'
    },
    5131: {
        renderType: 'expSvc',
        serviceNumber: '513',
        serviceFont: 'full',
        text: 'EXPRESS 513'
    },
    5555: {
        renderType: 'full',
        text: 'TRAINING BUS'
    },
    7777: {
        renderType: 'full',
        text: 'FREE BRIDGING BUS'
    },
    8001: {
        renderType: 'int-loopSvc',
        serviceNumber: '800',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT-SEMBAWANG RD',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "YISHUN AVE 7",
                'font': 'narrow'
            },
            {
                "text": "SEMBAWANG RD",
                'font': 'narrow'
            },
            {
                "text": "YISHUN ST 71",
                'font': 'narrow'
            },
            {
                "text": "YISHUN RING RD",
                'font': 'narrow'
            }
        ]
    },
    8041: {
        renderType: 'int-loopSvc',
        serviceNumber: '804',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT-YISHUN AVE 11',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "YISHUN AVE 2",
                'font': 'narrow'
            },
            {
                "text": "YISHUN RING RD",
                'font': 'narrow'
            },
            {
                "text": "YISHUN ST 41",
                'font': 'narrow'
            },
            {
                "text": "YISHUN AVE 1",
                'font': 'narrow'
            },
            {
                "text": "YISHUN AVE 11",
                'font': 'narrow'
            },
            {
                "text": "YISHUN RING RD",
                'font': 'narrow'
            }
        ]
    },
    8051: {
        renderType: 'int-loopSvc',
        serviceNumber: '805',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT-YISHUN AVE 1',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "YISHUN AVE 2",
                'font': 'narrow'
            },
            {
                "text": "YISHUN AVE 4",
                'font': 'narrow'
            },
            {
                "text": "YISHUN AVE 1",
                'font': 'narrow'
            },
            {
                "text": "YISHUN RING RD",
                'font': 'narrow'
            }
        ]
    },
    8111: {
        renderType: 'standardService',
        serviceNumber: '811',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN AVE 5 & 1',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "YISHUN AVE 9,6&7",
                "font": "tall"
            },
            {
                "text": "SEMBAWANG RD",
                "font": "narrow"
            },
            {
                "text": "YISHUN AVE 5&2",
                "font": "narrow"
            },
            {
                "text": "YISHUN RING RD",
                "font": "narrow"
            },
            {
                "text": "YISHUN AVE 2",
                "font": "narrow"
            }
        ]
    },
    8519: {
        renderType: 'expSvc',
        serviceNumber: '851e',
        serviceFont: 'full',
        text: 'EXPRESS 851e'
    },
    8518: {
        renderType: 'expSvc',
        serviceNumber: '851e',
        serviceFont: 'full',
        text: 'EXPRESS 851e'
    },
    8601: {
        renderType: 'standardService',
        serviceNumber: '860',
        serviceFont: 'full',
        destination: {
            text: 'YIO CHU KANG INT',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "YISHUN RING RD",
                "font": "narrow"
            },
            {
                "text": "YISHUN AVE 3",
                "font": "narrow"
            },
            {
                "text": "SEMBAWANG RD",
                "font": "narrow"
            },
            {
                "text": "UPPER THOMSON RD",
                "font": "narrow"
            },
            {
                "text": "ANG MO KIO AVE 5",
                "font": "narrow"
            }
        ]
    },

    8602: {
        renderType: 'standardService',
        serviceNumber: '860',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thin2'
        },
        scrolls: [
            {
                "text": "ANG MO KIO AVE 5",
                "font": "narrow"
            },
            {
                "text": "UPPER THOMSON RD",
                "font": "narrow"
            },
            {
                "text": "SEMBAWANG RD",
                "font": "narrow"
            },
            {
                "text": "YISHUN AVE 3",
                "font": "narrow"
            },
            {
                "text": "YISHUN RING RD",
                "font": "narrow"
            }
        ]
    }
}

EDSImageSet['SBST'] = {
    ffw: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    ],
    express: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    logo: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}
