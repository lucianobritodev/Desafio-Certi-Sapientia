const extenso = require('extenso');

parser = function (num) {
    try {
        let numFloat = parseFloat(num)
        if (typeof(numFloat) === 'number') 
            return parseString(numFloat)
    } catch (err) {
        return next(err)
    }
}

parseString = function (num) {
    if (num > 0) {
        if (num > 1200) {
            let extArr = extenso(num, {locale: 'br'}).split(' ')
            let indexMil = extArr.indexOf('mil')
            extArr[indexMil] = 'mil e'
            return extArr.join(' ')
        } else {
            return extenso(num, {locale: 'br'})
        }
    } else {
        if (num < -1200) {
            let extArr = extenso(num, {negative: 'informal', locale: 'br'}).split(' ')
            let indexMil = extArr.indexOf('mil')
            extArr[indexMil] = 'mil e'
            return extArr.join(' ')
        } else {
            return extenso(num, {negative: 'informal', locale: 'br'}) 
        }
    }
}

module.exports = parser;