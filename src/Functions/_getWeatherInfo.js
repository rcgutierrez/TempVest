export default function _getWeatherInfo(arr){
  let temp = parseInt(arr[1],10);
  let rain = arr[5].match(/(rain|sleet|mist)/i);
  let snow = arr[5].match(/(snow)/i);
  let level;

  if(temp<=0){
    level = 0;
  }else if(0<temp && temp<=32){
    level = 1;
  }else if(32<temp && temp<=55){
    level = 2;
  }else if(55<temp && temp<=70){
    level = 3;
  }else if(70<temp && temp<=85){
    level = 4;
  }else if(85<temp && temp<=105){
    level = 5;
  }else if(105<temp){
    level = 6;
  }

  return {
    level: level,
    rain: rain,
    snow: snow,
    degrees: temp
  }
}
