// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if(!letters.length) return false;
    
    let msgObj = {};
    let letObj = {};
    
    for(let char of message) {
        msgObj[char] = ++msgObj[char] || 1;
    };

    for(let char of letters) {
        letObj[char] = ++letObj[char] || 1;
    };

    for(let x in msgObj) {
       if(msgObj[x] > letObj[x]) return false;
    };
    
    return true;
};

module.exports = constructNote;
