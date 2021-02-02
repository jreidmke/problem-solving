// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let obj = {}; 
    let idx = 0;
    for(let k of keys) {
        obj[k] = values[idx] || null;
        idx++;
    }
    return obj; 
};

module.exports = twoArrayObject; 
