var friends = require("./data/seedFriends");

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var m = 0;
var w = 0;
var photoM = [];
var photoW = [];

function rnum(x,y) {
    return Math.floor(Math.random()*(y-x)+x)
}

for (let i = 0; i<95; i++) {
    photoM.push(i);
    photoW.push(i);
}

photoM = shuffle(photoM);
photoW = shuffle(photoW);
let output = [];
for (let i = 0; i<50; i++) {
    output.push({
        name: friends.namesM[i],
        photo: friends.photoM[i],
        scores: [
            rnum(1,5),
            rnum(1,5),
            rnum(1,5),
            rnum(1,5),
            rnum(1,5)
        ]
    })
    output.push({
        name: friends.namesW[i],
        photo: friends.photoW[i],
        scores: [
            rnum(1,5),
            rnum(1,5),
            rnum(1,5),
            rnum(1,5),
            rnum(1,5)
        ]
    })
}

console.log(output)