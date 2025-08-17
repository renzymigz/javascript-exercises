const removeFromArray = function(array) {
    for(let i = 0; i < arguments.length; i++) {
        const item = arguments[i];
        if (Array.isArray(array)) {
            const index = array.indexOf(item);
            if (index !== -1) {
                array.splice(index, 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
