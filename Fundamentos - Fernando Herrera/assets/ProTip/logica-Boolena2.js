
const SoyUndefined = undefined;
const SoyNull = null;
const SoyFalso = false;

const que_sale= true && 120;

//Aqui asigno una variable que va a tomar otro valor si es False, Null, Undefined
const a1 = SoyFalso || SoyNull || SoyUndefined || false || "Coge este valor, si eres false, null, undefined"

console.log(a1)