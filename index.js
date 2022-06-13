// code your solution here

function superbowlWin(list){   //this functions searches for a superbowl win year, returns undefined of no win is found
    const findWin = list.find(greatYear => greatYear.result === "W");
    if(findWin !== undefined){
        return findWin.year;
    }
    else{
        return findWin;
    }
}