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

    get maxFrequency() {
        let max = 0;
        for (const value in this.data) {
            if (Number(value) > max) {
                max = Number(value)
            }
        }
        return max;
    }

    get maxValue() {
        let max = 0;
        for (const value in this.data) {
            if (this.data[value] > max) {
                max = this.data[value]
            }
        }
        return max;
    }
}

export default FrequencyMap;