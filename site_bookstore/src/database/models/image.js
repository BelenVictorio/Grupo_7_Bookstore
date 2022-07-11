module.exports=(sequelize, DataTypes) => {
    let alias ="image";
    
    let cols ={
       id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           allowNull:false,
           autoIncrement:true
       },
       name:{
           type:DataTypes.STRING(100),
           allowNull:false
       }
    }

    let config ={
        tableName:"images",
        timestamps:false,
        underscored: true
    }
    const Image = sequelize.define(alias, cols, config)

    Image.associate = function(models){
        Image.belongsTo(models.Product, {
            as: "products",
            foreignKey: "images_id"
        })
    }
    return  Image;


}