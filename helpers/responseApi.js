class ResponseApi {
    structure = {
        status  :'success',
        message :'',
        code    : '200',
        results : null,
    }
    constructor(){
    }
    setEstado = (codigo ,estado, mensaje) => {
        this.structure.code = codigo;
        this.structure.status = estado;
        this.structure.message = mensaje;
    }
    setResultado =(results)=>{
        this.structure.results = results;
    }

    toResponse = () =>{
         return{
            status  : this.structure.status,
            message : this.structure.message,
            code    : this.structure.code,
            results : this.structure.results,
         }
    }
}

module.exports = ResponseApi;