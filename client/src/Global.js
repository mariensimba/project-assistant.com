export default class Global {
    getClassProperties(instanceOfClass) {
        const proto = Object.getPrototypeOf(instanceOfClass);
        const names = Object.getOwnPropertyNames(proto);
        return names.filter(name => name != 'constructor');
    }

    randomItem(items, criteria = null) {
        if(typeof(criteria) === "function") {
            var filtered = items.filter(criteria)
            return filtered[Math.floor(Math.random()*filtered.length)];    
        }
        return items[Math.floor(Math.random()*items.length)];
    }

    randomColor(palette, criteria = null) {
        return palette[this.randomItem(this.getClassProperties(palette), criteria)]
    }
}