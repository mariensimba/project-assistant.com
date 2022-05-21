class Color {
    constructor(_r, _g, _b, _a = null) {
      this.r = _r
      this.g = _g
      this.b = _b
      
      if (_a && _a >= 0 && _a < 1) {
        this.a = _a    
      } 
     
    }

    get color() {
      if (this.a) {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`     
      } 
      return `rgb(${this.r}, ${this.g}, ${this.b})` 
    }

    set color(value) {
      this.color = value
    }

    addAlpha(value) {
      this.a = value
      return this.color
    }

}

export default Color


