module.exports=(sequelize, DataTypes) => {
    let alias ="category";
    
    let cols ={
       
    }

    let config ={
        tableName:"categories",
        timestamps:false,
    }
    const Category = sequelize.define(alias, cols, config)
    Category.associate = function(models){
        
    }
    return Category;


}