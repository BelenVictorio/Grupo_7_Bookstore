
module.exports=(sequelize, DataTypes) => {
    let alias ="author";
    
    let cols ={
       id:{
           type:DataTypes.INTEGER(),
           primaryKey: true,
           autoIncrement:true,
           allowNull:false
        },
        name: {
            type: DataTypes.VARCHAR(100),
            allowNull:false
        }
    }

    let config ={
        tableName:"authors",
        timestamps:false,
    }
    const Author = sequelize.define(alias, cols, config)
    Author.associate = function(models){
        
    }
    return Author;


}