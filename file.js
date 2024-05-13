const fs=require('fs');

//  const result=fs.writeFileSync('test.txt',"hello world")
//  console.log(result)

const  res = fs.writeFile('test.txt','hello this world ',(err)=>{})
console.log(res);