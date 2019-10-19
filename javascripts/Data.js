class Data {

    /**
     * 
     * @param {!number} value Value in €
     * @param {!string} date  Date as yyyy-MM-dd
     * @param {?string} category Optional category
     * @param {?string} description Optional description
     */

    constructor(value, date, category = '', description = '') {

        this.value       = value
        this.date        = date
        this.category    = category
        this.description = description

    }

}