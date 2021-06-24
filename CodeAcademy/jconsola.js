/*
Como comensal frecuente, le encanta probar nuevos restaurantes y experimentar con diferentes comidas. Sin embargo, tener que averiguar qué desea pedir puede ser una prueba que lleve mucho tiempo si el menú es grande y desea una manera más fácil de saber qué va a comer.

En este proyecto, usará JavaScript para crear aleatoriamente una comida de tres platos basada en lo que está disponible en un menú. ¡Seguiremos ejecutándolo hasta que estemos satisfechos con la comida generada!

Si se queda atascado durante este proyecto o le gustaría ver a un desarrollador experimentado trabajar en él, haga clic en " Desbloquear " para ver un video de la guía del proyecto .

*/

const menu = {
    _courses:{
        appetizers:[],
        mains:[],
        desserts:[]
    },
  
    get appetizers(){
      return this._courses.appetizers;
    },
  
    get mains(){
      return this._courses.mains;
    },
  
    get desserts(){
      return this._courses.desserts;
    },
  
    set appetizers(appetizers){
      this._courses.appetizers=appetizers;
    },
  
    set mains(mains){
      this._courses.mains=mains;
    },
  
    set desserts(desserts){
      this._courses.desserts=desserts;
    },
  
    get courses(){
      return{
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
  
  addDishToCourse(courseName,dishName,dishPrice){
    const dish={
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex];
  },
  
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice= appetizer.price + main.price + dessert.price;
  
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}, and the total pice is ${totalPrice}`;
  }
  };
  
  
  
  
  menu.addDishToCourse('appetizers',"comida 1.1",1);
  menu.addDishToCourse('appetizers',"comida 1.2",2);
  menu.addDishToCourse('appetizers',"comida 1.3",3);
  
  menu.addDishToCourse('mains',"comida 2.1",4);
  menu.addDishToCourse('mains',"comida 2.2",5);
  menu.addDishToCourse('mains',"comida 2.3",6);
  
  menu.addDishToCourse('desserts',"comida 3.1",7);
  menu.addDishToCourse('desserts',"comida 3.2",8);
  menu.addDishToCourse('desserts',"comida 3.3",9);
  
  const meal = menu.generateRandomMeal();
  
  console.log(meal)