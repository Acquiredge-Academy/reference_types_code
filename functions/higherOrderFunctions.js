let callback = function() {
    console.log("Callback!");
};

function higherOrderFunction(n, callback) {
    for(let i = 0; i < n; i++){
        callback();
    }
}

// higherOrderFunction(3, callback);

function createMultiplier(factor){
    return function(x) {
        return x * factor;
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));