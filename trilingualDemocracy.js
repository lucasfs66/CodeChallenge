// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set
function trilingualDemocracy(group) {
    let scoreD = 0;
    let scoreF = 0;
    let scoreI = 0;
    let scoreK = 0;

  for(var i = 0; i < group.length(); i++){
    if(group[i] === 'D'){
        scoreD += 1;
    }else if(group[i] === 'F'){
        scoreF += 1;
    }else if(group[i] === 'I'){
        scoreI += 1;
    }else if(group[i] === 'K'){
        scoreK += 1;
    }

  }

  if(scoreD >= 2){
    return 'D';
  }else if(scoreF >= 2){
    return 'F'
  }else if(scoreI >= 2){
    return 'I'
  }else if(scoreK >= 2){
    return 'K'
  }else if(scoreD === 0){
    return 'D';
  }else if(scoreF === 2){
    return 'F'
  }else if(scoreI === 2){
    return 'I'
  }else if(scoreK === 2){
    return 'K'
  }

  }
  
    // implement the rules...
    return "?";
}