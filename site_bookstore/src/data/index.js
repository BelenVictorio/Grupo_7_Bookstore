const fs =require('fs');
const path =require('path');

module.exports = {
    
    getUsers: JSON.parse(fs.readFileSync(path.join(__dirname, '/usuarios.json'),"utf-8")),
    writeUsers: (data) => {
        fs.writeFileSync(path.join(__dirname, "/users.json"), JSON.stringify(data));
    }
}