class conta{ 
    constructor(
        public numero:number,
        public saldo:number,
        public nome:String
){}
    getSaldo():number{
        return this.saldo;
    }
}

class corrente extends conta  {
    constructor(
        nome:string,
        numero:number,  
        saldo:number,
        public limite:number)
{super(numero,saldo,nome)}

depositar(valor):void {
    this.saldo = this.saldo + valor
    return

}

sacar(valor:number):void {
    if(valor <= 0){
        console.log("valor invalido")
    }
    else if(valor > this.saldo + this.limite){
        console.log('saldo insuficiente ')
        return
    }else { 
        let v1 = valor - this.saldo - this.limite
        this.saldo -= valor
        this.limite= Math.abs(v1)
        return
    }
}

}
    
let c1 = new corrente('joao',1,100,200)
c1.depositar(300)
c1.sacar(400)
console.log(c1.getSaldo())

