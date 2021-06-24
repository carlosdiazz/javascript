const menu={
    _platos:{
        desayuno:[],
        comida:[],
        bebida:[]
    },

    //Aqui devuelvo una propiedad
    get desayuno(){
        return this._platos.desayuno
    },

    get comida(){
        return this._platos.comida
    },

    get bebida(){
        return this._platos.bebida
    },

    //Aqui cambio una propiuedad
    set desayuno(DesayunoNuevo){
        this._platos.desayuno=DesayunoNuevo
    },

    set comida(ComidaNuevo){
        this._platos.comida=ComidaNuevo
    },

    set bebida(bebidaNuevo){
        this._platos.bebida=bebidaNuevo
    },

    get plato(){
        return {
            desayuno:this.desayuno,
            comida:this.comida,
            bebida:this.bebida
        };
    },

    anadirplato(tipo,alimento,precio){
        const plato={
            alimento,
            precio
        };
        //Aqui depediendo el tipo de comida inserto un objecto dentro del arreglo
        return this._platos[tipo].push(plato);
    },

    platoaleatorio(tipo){

        const plato = this._platos[tipo];
        const random = Math.floor(Math.random()*plato.length);
        return plato[random];

    },

    menualeatorio(){
        const desayuno = this.platoaleatorio('desayuno');
        const comida = this.platoaleatorio('comida');
        const bebida = this.platoaleatorio('bebida');
        const total = desayuno.precio + comida.precio + bebida.precio;

        return `Tu desayuno es: ${comida.alimento}\n
                Tu Comida es: ${comida.alimento}\n
                Tu Bebida es: ${bebida.alimento}\n
                El total es: ${total}`
    }

};

menu.anadirplato('bebida','refesco',43)
menu.anadirplato('bebida','Soda',430)

menu.anadirplato('desayuno','Huevos',5)
menu.anadirplato('desayuno','Pan',10)

menu.anadirplato('comida','Arroz',12)
menu.anadirplato('comida','Carne',15)

const plato1 = menu.menualeatorio()

console.log(plato1)