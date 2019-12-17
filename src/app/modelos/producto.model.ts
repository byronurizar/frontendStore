export interface Producto {
    id?: String; //? Es opcional
    idCatalogo: number;
    nopagina?: number;
    idProveedor: number;
    idCategoria?: number;
    nombre:String;
    codigo:String,
    descripcion:String
    descripcionCorta?: String;
    precio:number,
    idEstado:number
}