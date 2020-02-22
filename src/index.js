module.exports = function reverse(number) {
    let str = number.toString();
    let regexp = /\d/g;
    let strm = str.match(regexp).join('');
    let newstr = '';
    for (let i = strm.length - 1; i > -1; i--) {
        newstr = newstr + strm[i];
    }
    res = Number(newstr);
    return res;
}
