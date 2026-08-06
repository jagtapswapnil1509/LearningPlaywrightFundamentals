import fs from 'node:fs';
import path from 'node:path';

const filepath = path.join(import.meta.dirname,'293_users.json');
console.log('File Path:',filepath);
const filedata = fs.readFileSync(filepath,'utf-8');

const userdata = JSON.parse(filedata);
console.log(userdata.username);

//writing data to json file

const user = {
    name:"Kiran",
    role:"Developer"
};

const jsondata = JSON.stringify(user,null,2);

fs.writeFileSync("293_users.json",jsondata);
console.log("Json file is created");