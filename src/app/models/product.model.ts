export interface Taxi {
    //el mismo que del backend
    _id: string,
    telefono_usuario:number,
    direccion:string,
    barrio:string,
    observacion:string,
    movil_taxi:string,
    placa_taxi:string,
    llego:boolean
    recepcionado:Date,
    asignado:Date,
    recogido:Date,
    // // _id: string,
    // description: string,
    // stock: number,
    // price: number

}
