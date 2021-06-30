//Con get asigno un nuevo valor o devuelvo el valor original
//Con set recibo un valor que puedo alterar el valor oriignal

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
  
  console.log(menu.courses)
  
  
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
  
  console.log(menu.courses)

  console.log(meal)