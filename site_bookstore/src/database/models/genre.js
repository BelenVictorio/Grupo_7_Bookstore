module.exports=(sequelize, DataTypes) => {
    let alias ="Genre";
    
    let cols ={
       id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           allowNull: false,
           autoIncrement:true
       },
       name:{
           type:DataTypes.STRING(100),
           allowNull:false
       }
    }

    let config ={
        tableName:"genres",
        timestamps:false,
        underscored : true
    }
    const Genre = sequelize.define(alias, cols, config)
    Genre.associate = function(models){
            Genre.hasMany(models.Product, {
            as: "products",
            foreignKey: "genres_id"
        })
    }
    return Genre;


}