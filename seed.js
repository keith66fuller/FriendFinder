var F = require("./data/friends.js");

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var names = F.friendsArray;
var men = shuffle(F.menArray);
var women = shuffle(F.womenArray);



friendsArray.forEach(f => {
    let name = `${f.first} ${f.last}`
});