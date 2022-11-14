class APIFeatures{
    constructor(query, queryStr){
    this.query=query;
    this.queryStr=queryStr
}
// Sistema de Busqueda para buscar por palabra clave
search(){
    const keyword= this.queryStr.keyword ? {
        nombre:{
            $regex:this.queryStr.keyword,
            $options:'i'
        }
    }:{}

    this.query= this.query.find({...keyword});
    return this
}
filter(){
    const queryCopy = { ...this.queryStr};
    //Eliminaremos los campos que vienen de otras consultas
    const removeFields= ["keyword", "limit", "page"]
    removeFields.forEach(el => delete queryCopy[el])

    //Filtro avanzado para filtrar por precio 
    let queryStr= JSON.stringify(queryCopy)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match =>
    `$${match}`)

    this.query= this.query.find(JSON.parse(queryStr))
    return this
}

pagination(resPerPage){
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage-1);

    this.query= this.query.limit(resPerPage).skip(skip)
    return this
}

}

module.exports = APIFeatures