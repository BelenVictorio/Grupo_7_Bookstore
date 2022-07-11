const fs =require('fs');
const path =require('path');

module.exports = {
    
    getUsers: JSON.parse(fs.readFileSync(path.join(__dirname, '/usersDataBase.json'),"utf-8")),
    writeUsers: (data) => {
        fs.writeFileSync(path.join(__dirname, "/usersDataBase.json"), JSON.stringify(data, null, 3));
    }
}