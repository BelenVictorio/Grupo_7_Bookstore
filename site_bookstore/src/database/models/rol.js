module.exports=(sequelize, DataTypes) => {
    let alias ="rol";
    
    let cols ={
       id:{
           type:DataTypes.INTEGER.UNSIGNED,
           primarykey:true,
           allowNull:false,
           autoIncrement:true
       },
       name:{
           type:DataTypes.VARCHAR(45),
           allowNull:false
       }
    }

    let config ={
        tableName:"rols",
        timestamps:false,
    }
    const Rol = sequelize.define(alias, cols, config)
    Rol.associate = function(models){
        Rol.hasMany(models.User, {
            as: "users",
            foreignKey: "rol_id"
        })
    }
    return Rol;


}