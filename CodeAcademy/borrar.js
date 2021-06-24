// Write your code here:

const dogFactory = (name,breed,weight) => {
    obj={
      _name:name,
      _breed:breed,
      _weight:weight,
  
      get name(){
        return this._name;
      },
  
      get breed(){
        return this._breed;
      },
      get weight(){
        return this._weight;
      },
  
      set name(name){
        this._name=name;
      },
  
      set breed(breed){
        this._breed=breed;
      },
  
      set weight(weight){
        this._weight=weight;
      },
  
      bark() {
        return `ruff! ruff!`
      },
  
      eatTooManyTreats() {
        this._weight++
      }
  
    }
    return obj;
      };
  
  //let rubi=dogFactory('Rubi','Chihuhua',8)
  
//    rubi.breed='Chihuhuaa'
//    console.log(rubi.breed)


// Write function below
const subLength2 = (cadena,letra)=>{
    let cantidad = 0;
    let pos = [];
    for(le in cadena){
      if(cadena[le] === letra){
        cantidad++
        pos.push(Number(le))
      }
    };
    if(cantidad>2 || cantidad <=1){
      return 0
    }else if(cantidad === 2){
      if((pos[0] + 2) < pos[1]){
        return pos[1]
      }else{
        return 2
      }
    }
  };


// Write function below
const subLength = (str, char) => {
    let charCount = 0;
    let len = -1;
    
    for (let i=0; i<str.length; i++) {
      if (str[i] == char) {
        charCount++;
        if (charCount > 2) {
          return 0;
        }
        if (len == -1) {
          len = i;
        } else {
          len = i - len + 1
        }
      }
    }
    if (charCount < 2) {
      return 0;
    }
  
    return len;
  };

  //console.log(subLength('Saturday', 'a'));
  //console.log(subLength('summer', 'm'));
  //console.log(subLength('digitize', 'i'));
  //console.log(subLength('cheesecake', 'k'));

  // Write function below

const groceries = obj =>{

    if(obj.length === 1){
      return obj[0].item
    }else if (obj.length === 2){
      return `${obj[0].item} and ${obj[1].item}`
    }else{
      cadena=obj[0].item;
      let fin=obj.length-1;
      for(let i=1; i<fin ; i++){
        cadena=`${cadena}, ${obj[i].item}, `;
      };
      console.log(fin)
      return `${cadena} and ${obj[fin].item}`
    };
  };
  
  arreglo=[{item:'hola'},{item:"hola2"},{item:'hola3'}]
