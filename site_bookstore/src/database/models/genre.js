module.exports=(sequelize, DataTypes) => {
    let alias ="genre";
    
    let cols ={
       
    }

    let config ={
        tableName:"genres",
        timestamps:false,
    }
    const Genre = sequelize.define(alias, cols, config)
    Genre.associate = function(models){
        
    }
    return Genre;


}