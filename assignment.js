// feetToMile is here--

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}

var result = feetToMile(5280);
console.log(result);




//woodCalculator is here--
function woodCalculator(chair, table, bed){
    var totalWoodForChair = chair * 1;
    var totalWoodForTable = table * 3;
    var totalWoodForBed = bed * 5;
    var totalWood = totalWoodForChair + totalWoodForTable + totalWoodForBed;
    return totalWood;
}

var result = woodCalculator(10, 5, 3);
console.log(result);





//brickCalculator is here--

function brickCalculator(n){
    var totalBrick = 0;
    for(var i = 0; i <= n; i++){
        var element = n[i];
        if(n<=10 && n>=1){
            var brick = n*15000;
            return brick;
        }
        else if(n<=20 && n>=11){
            var brick = ((12000*(n-10))+150000);
            return brick;
        }
        else{
            var brick = ((10000*(n-20)) + 270000);
            return brick;
        }
    }
}

console.log(brickCalculator(25));





//tinyFriend is here

function tinyFriend(names){
    var tiny = names[0];
    for( var i = 0; i<names.length; i++ ){
        var element = names[i];
        if(element.length<tiny.length){
            tiny = element;
        }
    }
    return tiny;
}

var result = tinyFriend(['riaz', 'ria', 'az', 'a']);
console.log(result);