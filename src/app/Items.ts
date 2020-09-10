export class Items{
    no:number =0
    name:string ='name1'
    price:number = 0
    quantity:number =0
    constructor(no,name,price,quantity)
    {   
        this.no=no
        this.name = name
        this.price = price
        this.quantity = quantity
    }
}

export const dataAr:Items[]=[
    
]
export class Items2{
    get(){
        return 5
    }
}