const COLOR_PALETTE: string [] = [
    'rgb(91,176,181)',
    'rgb(124,192,196)',
    'rgb(157,208,211)',
    'rgb(189,223,225)',
    'rgb(217,229,236)',
    'rgb(179,202,217)',
    'rgb(140,176,198)',
    'rgb(102,149,179)',
    'rgb(201,66,129)',
    'rgb(212,104,154)',
    'rgb(223,142,179)',
    'rgb(233,179,205)',
    'rgb(218,214,229)',
    'rgb(181,173,203)',
    'rgb(145,133,177)',
    'rgb(108,92,151)',
    'rgb(222,154,31)',
    'rgb(229,174,76)',
    'rgb(235,194,121)',
    'rgb(242,215,165)',
    'rgb(207,234,231)',
    'rgb(159,212,207)',
    'rgb(112,191,184)',
    'rgb(64,169,160)',
    'rgb(60,74,99)',
    'rgb(99,110,130)',
    'rgb(138,146,161)',
    'rgb(177,183,193)',
    'rgb(246,226,210)',
    'rgb(238,197,165)',
    'rgb(229,167,120)',
    'rgb(221,138,75)',
    'rgb(88,161,88)',
    'rgb(121,180,121)',
    'rgb(155,199,155)',
    'rgb(188,217,188)',
    'rgb(220,227,242)',
    'rgb(185,198,230)',
    'rgb(151,170,217)',
    'rgb(116,141,205)',
    'rgb(178,36,42)',
    'rgb(193,80,85)',
    'rgb(209,124,127)',
    'rgb(224,167,170)',
    'rgb(222,239,240)',
    'rgb(189,223,225)',
    'rgb(157,208,211)',
    'rgb(124,192,196)',
    'rgb(64,123,160)',
    'rgb(102,149,179)',
    'rgb(140,176,198)',
    'rgb(179,202,217)',
    'rgb(244,217,230)',
    'rgb(233,179,205)',
    'rgb(223,142,179)',
    'rgb(212,104,154)',
    'rgb(71,51,125)',
    'rgb(108,92,151)',
    'rgb(145,133,177)',
    'rgb(181,173,203)',
    'rgb(248,235,210)',
    'rgb(242,215,165)',
    'rgb(235,194,121)',
    'rgb(229,174,76)',
    'rgb(16,148,136)',
    'rgb(64,169,160)',
    'rgb(112,191,184)',
    'rgb(159,212,207)',
    'rgb(216,219,224)',
    'rgb(177,183,193)',
    'rgb(138,146,161)',
    'rgb(99,110,130)',
    'rgb(212,109,30)',
    'rgb(221,138,75)',
    'rgb(229,167,120)',
    'rgb(238,197,165)',
    'rgb(222,236,222)',
    'rgb(188,217,188)',
    'rgb(155,199,155)',
    'rgb(121,180,121)',
    'rgb(81,113,192)',
    'rgb(116,141,205)',
    'rgb(151,170,217)',
    'rgb(185,198,230)',
    'rgb(240,211,212)',
    'rgb(224,167,170)',
    'rgb(209,124,127)',
    'rgb(193,80,85)',
    'rgb(91,176,181)',
    'rgb(124,192,196)',
    'rgb(157,208,211)',
    'rgb(189,223,225)',
    'rgb(217,229,236)',
    'rgb(179,202,217)',
    'rgb(140,176,198)',
    'rgb(102,149,179)',
    'rgb(201,66,129)'
]

export default class ColorGradient {

    private originalColor : number
    private offset : number
    private index : number

    constructor(colorWheelStart: number) {
        this.originalColor = colorWheelStart * 10
        this.offset = colorWheelStart * 10
        this.index = 0
    }

    getOriginalColor(): string {
        return `${COLOR_PALETTE[this.originalColor]}`
    }

    getTextColor(): string {
        // dark, dark, light, light, light, light, light, light, dark, dark
        return this.index % 10 < 2 || this.index % 10 > 7 ? 'white' : 'black'
    }

    getColor(): string {
        let color:  string =  `${COLOR_PALETTE[this.offset +(this.index % COLOR_PALETTE.length)]}`
        this.index += 1
        return color
    }
}
