import images from '../images/images';

function _randomItem(arr){
  let choice = Math.floor(Math.random()*arr.length);
  while(!arr[choice]){choice = Math.floor(Math.random()*arr.length);}
  return (arr[choice]);
}

export default function _generateImages(arr, props){
  let mLongSleeveHeavy = _randomItem([images.subzerojacket, images.jacket]),
    mLongSleeveLite =  _randomItem([images.cardigan, images.jacket, images.hoodie]),
    mShortSleeveLite =  _randomItem([images.tee, images.polo, images.tank]),
    mPants = _randomItem([images.jeans, images.pants]);

  let wLongSleeveHeavy = _randomItem([images.womensubzerojacket, images.womenjacket, images.womenblazer]),
    wLongSleeveLite =  _randomItem([images.womencardigan, images.womenjacket]),
    wShortSleeveLite =  _randomItem([images.womentee, images.polo, images.womentank, images.blouse]),
    wShorts = _randomItem([images.womenshorts, images.skirt, images.leggings]),
    wLitePants = _randomItem([images.womenjeans, images.womenpants, images.leggings, images.womenslacks]),
    wHeavyPants = _randomItem([images.womenjeans, images.womenpants, images.womenslacks]);

  let m0And1 = [images.subzerojacket, mPants],
    m2 = [mLongSleeveHeavy, mPants],
    m3 = [mLongSleeveLite, mPants],
    m4 = [mShortSleeveLite, mPants],
    m5 = [mShortSleeveLite, images.shorts],
    m6 = [images.tank, images.shorts],
    w0And1 = [images.womensubzero, wHeavyPants],
    w2 = [wLongSleeveHeavy, wHeavyPants],
    w3 = [wLongSleeveLite, wLitePants],
    w4 = [wShortSleeveLite, wLitePants],
    w5 = [wShortSleeveLite, wShorts],
    w6 = [images.womentank, wShorts];


  let imgArr;
  if(props.gender === 0){
    switch (arr.level){
      case 0:
        imgArr = m0And1;
        break;
      case 1:
        imgArr = m0And1;
        break;
      case 2:
        imgArr = m2;
        break;
      case 3:
        imgArr = m3;
        break;
      case 4:
        imgArr = m4;
        break;
      case 5:
        imgArr = m5;
        break;
      case 6:
        imgArr = m6;
        break;
      default:
        break;
    }
    if(arr.rain){
      imgArr[0] = images.slickjacket;
    }
    if(arr.snow){
      imgArr[0] = images.subzerojacket;
    }
    if(parseInt(arr.wind,10)>=12 && !(arr.snow || arr.rain)){
      imgArr[0] = images.windbreaker;
    }

  }else if (props.gender === 1) {
    switch (arr.level){
      case 0:
        imgArr = w0And1;
        break;
      case 1:
        imgArr = w0And1;
        break;
      case 2:
        imgArr = w2;
        break;
      case 3:
        imgArr = w3;
        break;
      case 4:
        imgArr = w4;
        break;
      case 5:
        imgArr = w5;
        break;
      case 6:
        imgArr = w6;
        break;
      default:
        break;
    }
    if(arr.rain){
      imgArr[0] = images.slickjacket;
    }
    if(arr.snow){
      imgArr[0] = images.womensubzero;
    }
    if(parseInt(arr.wind,10)>=18 && !(arr.snow || arr.rain)){
      imgArr[0] = images.windbreaker;
    }

  }
  return imgArr;
}
