class Eleitor{
    constructor(nome,idade,titulo){
        this.nome = nome
        this.idade = idade
        this.titulo = titulo
    }
    verificaVoto(){
        let idade = this.idade

        if(idade <16){
            return "abaixo da idade miníma"
            console.log("abaixo da idade miníma")

        }else if((idade >= 16)&&(idade <18)){
            return "o voto é facultativo"
            console.log("o voto é facultativo")
            
        }else if((idade >18) && (idade <=70)){
            return "o voto é obrigatório"
            console.log("o voto é obrigatório")

        }else if(idade >70){
            return "idade onde o voto é facultativo"
            console.log("voto facultativo")
        }

        
    }
}