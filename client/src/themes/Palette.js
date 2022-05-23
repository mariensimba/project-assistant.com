import Color from "./Color"

class LightGreen extends Color {
    constructor() {
        super(76, 175, 80)
    }
}

class Green extends Color {
    constructor() {
        super(46, 125, 50)
    }
}

class DarkGreen extends Color {
    constructor() {
        super(27, 94, 32)
    }
}

class LightBlue extends Color {
    constructor() {
        super(66, 165, 245)
    }
}


class Blue extends Color {
    constructor() {
        super(25, 118, 210)
    }
}

class DarkBlue extends Color {
    constructor() {
        super(21, 101, 192)
    }
}

class LightSkyBlue extends Color {
    constructor() {
        super(3, 169, 244)
    }
}


class SkyBlue extends Color {
    constructor() {
        super(2, 136, 209)
    }
}

class DarkSkyBlue extends Color {
    constructor() {
        super(1, 87, 155)
    }
}


class LightOrange extends Color {
    constructor() {
        super(255, 152, 0)
    }
}


class Orange extends Color {
    constructor() {
        super(237, 108, 2)
    }
}

class DarkOrange extends Color {
    constructor() {
        super(230, 81, 0)
    }
}

class LightPurple extends Color {
    constructor() {
        super(186, 104, 200)
    }
}

class Purple extends Color {
    constructor() {
        super(156, 39, 176)
    }
}

class DarkPurple extends Color {
    constructor() {
        super(123, 31, 162)
    }
}

class Salmon extends Color {
    constructor() {
        super(249, 230, 223)
    }
}

class HotPink extends Color {
    constructor() {
        super(255, 105, 180)
    }
}


class DarkHotPink extends Color {
    constructor() {
        super(255, 25, 140)
    }
}

class LightRed extends Color {
    constructor() {
        super(239, 83, 80)
    }
}

class Red extends Color {
    constructor() {
        super(211, 47, 47)
    }
}

class DarkRed extends Color {
    constructor() {
        super(198, 40, 40)
    }
}

class WhiteSmoke extends Color {
    constructor() {
        super(245, 245, 245)
    }
}


export default class Palette {
    get LightGreen() {
        return new LightGreen()
    }

    get Green() {
        return new Green()
    }

    get DarkGreen() {
        return new DarkGreen()
    }

    get LightSkyBlue() {
        return new LightSkyBlue()
    }

    get SkyBlue() {
        return new SkyBlue()
    }

    get DarkSkyBlue() {
        return new DarkSkyBlue()
    }

    get LightBlue() {
        return new LightBlue()
    }

    get Blue() {
        return new Blue()
    }

    get DarkBlue() {
        return new DarkBlue()
    }

    get LightOrange() {
        return new LightOrange()
    }

    get Orange() {
        return new Orange()
    }

    get DarkOrange() {
        return new DarkOrange()
    }

    get LightPurple () {
        return new LightPurple()
    }
    
    get Purple () {
        return new Purple()
    }
    
    get DarkPurple () {
        return new DarkPurple()
    }

    get Salmon() {
        return new Salmon()
    }

    get HotPink() {
        return new HotPink()
    }

    get DarkHotPink() {
        return new DarkHotPink()
    }

    get LightRed() {
        return new LightRed()
    }

    get Red() {
        return new Red()
    }

    get DarkRed() {
        return new DarkRed()
    }

    get WhiteSmoke() {
        return new WhiteSmoke()
    }

}


