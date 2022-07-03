module.exports=(sequelize, DataTypes) => {
    let alias ="image";
    
    let cols ={
       
    }

    let config ={
        tableName:"images",
        timestamps:false,
    }
    const Image = sequelize.define(alias, cols, config)
    Image.associate = function(models){
        
    }
    return  Image;


}