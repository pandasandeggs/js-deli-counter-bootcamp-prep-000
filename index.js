var katzDeli = ["Ada", "Grace", "Bill", "Jane", "Ann"];


function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli){
  if (katzDeli.length){
    return `Currently serving ${katzDeli.shift()}.`;
  }else 
    return "There is nobody waiting to be served!";
}

function currentLine(katzDeli){
  if(katzDeli.length){
    var newLine = []
    for(var i = 0; i > katzDeli.length; i++){
      newLine.push( katzDeli[i])
    }
      return `The line is currently: ${i}. ${katzDeli[0]}`;
   }else;
      return "The line is currently empty.";
  }
