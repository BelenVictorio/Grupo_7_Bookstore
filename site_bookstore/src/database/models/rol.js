module.exports=(sequelize, DataTypes) => {
    let alias ="Rol";
    
    let cols ={
       id:{
           type:DataTypes.INTEGER.UNSIGNED,
           primaryKey:true,
           allowNull:false,
           autoIncrement:true
       },
       name:{
           type:DataTypes.STRING(45),
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
            foreignKey: "roles_id"
        })
    }
    return Rol;


}