let sampleActivity = '-5';
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


function dateSample(sampleActivity) {
    if (typeof sampleActivity != "string"){
      return false
    }
    let x = Number(sampleActivity)
    if (isNaN(x)){
      return false
    }
    if(x > 15 || x <= 0){
        return false
    }   
    let res = Math.log(MODERN_ACTIVITY/x)/(0.693/HALF_LIFE_PERIOD)
    return Math.ceil(res)                
  }

  console.log(dateSample(sampleActivity))