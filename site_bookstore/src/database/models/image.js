module.exports=(sequelize, DataTypes) => {
    let alias ="image";
    
    let cols ={
       id:{
           type:DataTypes.INTEGER,
           primarykey:true,
           allowNull:false,
           autoIncrement:true
       },
       name:{
           type:DataTypes.VARCHAR(100),
           allowNull:false
       }
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