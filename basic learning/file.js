const fs= require ("node:fs");
const fileContent = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContent);


fs.writeFile("./greet.txt","please help me",{flag: "a"},(error)=>{
if(error){
    console.log("error",error);
}
else{
    console.log("file written"); 
}
})