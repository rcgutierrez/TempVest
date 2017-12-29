import _getWeatherInfo from './_getWeatherInfo';

export default function _filterArr(arr){

  for(let i=1; i<arr.length;i++){
    let first = _getWeatherInfo(arr[i-1]);
    let second = _getWeatherInfo(arr[i]);

    const inTempRange = (first.level===second.level ||
                          ((first.degrees/(first.degrees+second.degrees))<=.53 &&
                          (first.degrees/(first.degrees+second.degrees))>=.47));
    const samePrecipitationCondition = (((first.rain===null && second.rain===null) || (first.rain!==null && second.rain!==null)) &&
                                        ((first.snow===null && second.snow===null) || (first.snow!==null && second.snow!==null)))

    if(inTempRange && samePrecipitationCondition){
      arr.splice(i,1);
      i--;
    }
  }
}
