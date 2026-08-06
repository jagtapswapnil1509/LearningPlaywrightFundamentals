import {test , expect} from '@playwright/test';

// const userData = require('./293_Users.json');
import userdata from './293_users.json' with { type: 'json' };
import TestData from './292_TestData.json' with { type: 'json' };
// const fs = require("fs");

test('DDT',async ({page})=>{
    console.log(userdata.username);
    console.log(userdata.password);   

});

test('DDT2',async ({page})=>{
    console.log(TestData[0].name); 

});


    // const fileData = fs.readFileSync("293_Users.json", "utf-8");
    // const user = JSON.parse(fileData);
