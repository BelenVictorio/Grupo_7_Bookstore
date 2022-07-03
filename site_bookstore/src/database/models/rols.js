module.exports=(sequelize, DataTypes) => {
    let alias ="rol";
    
    let cols ={
       
    }

    let config ={
        tableName:"rols",
        timestamps:false,
    }
    const Rol = sequelize.define(alias, cols, config)
    Rol.associate = function(models){
        
    }
    return Rol;


}