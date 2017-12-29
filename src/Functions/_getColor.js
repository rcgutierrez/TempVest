export default function getColor(obj){
  let level = parseInt(obj.level, 10);
  let color;
  if(level===0){
    color = '#A09ABC';
  }else if(level===1){
    color = '#A3CEF1';
  }else if(level===2){
    color = '#6096BA';
  }else if(level===3){
    color = '#307C82';
  }else if(level===4){
    color = '#7CEA9C';
  }else if(level===5){
    color = '#F4E04D';
  }else if(level===6){
    color = '#EF626C';
  }
  return color;
}
