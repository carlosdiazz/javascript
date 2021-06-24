const _ ={

    words(stri){
      return(stri.split(" "))
    },
    
      inRange(number,li,ls){
        if(ls===undefined){ls=li,li=0}
        if(li>ls){
          let mientras = ls;
          ls=li;
          li=mientras;
        }
        if(number>=li && number < ls){
          return true
        }else{
          return false
        }
      },
    
      clamp(number,lower,upper){
        let lowerClampedValue=Math.max(number,lower);
        let clampedValue=Math.min(lowerClampedValue,upper);
        return clampedValue
      }
    };
    
    //console.log(_.words("hola como estas"))
    //console.log(_.clamp(10,12,15))
    //console.log(_.inRange(10,11))
    
    
    
    // Do not write or modify code below this line.
    module.exports = _;