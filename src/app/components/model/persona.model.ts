export class persona {
    id?:number;
    nombre:String;
    apellido:String;
    titulo: String;
    acercaDe:String;
    img:String;

    constructor(nombre:String,apellido:String,titulo:String,acercaDe:String,img:String){
        this.nombre=nombre;
        this.apellido=apellido;
        this.titulo=titulo;
        this.acercaDe=acercaDe;
        this.img=img;
    }
}