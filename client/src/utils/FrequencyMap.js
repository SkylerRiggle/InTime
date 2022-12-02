class FrequencyMap {
    constructor() {
        this.data = {};
    }

    get getData() {
        return this.data;
    }

    addData(value) {
        if (this.data[value.toString()]) {
        this.data[value.toString()] += 1
        } else {
        this.data[value.toString()] = 1
        }
    }

    removeData(value) {
        if (this.data[value.toString()]) {
        this.data[value.toString()] -= 1
        }
    }
}

module.exports = FrequencyMap;