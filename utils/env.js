import dotenv from 'dotenv';
dotenv.config();

//agar cahe toh yaha validation laga sakty h function bana k 
// function requireenv(variable,name){
//     if(!variable){
//         throw new Error(`${name} is missing in .env file`);
//     }
//     return variable;
// }
export const ENV={
    BASE_URL:process.env.BASE_URL,
    USERNAME:process.env.USERNAME,
    PASSWORD:process.env.PASSWORD
};