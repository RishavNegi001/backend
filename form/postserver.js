const http=require("http");
const queryString=require("queryString")

const port=3000;

const server=http.createServer((req,res)=>{
    if(req.url=="/login" && req.method=="post"){
        let data ="";
        req.on("data",(chunk)=>{
            data+=chunk.toString();
        });
        req.on("end",()=>{
            console.log("raw data in form urlencoded"+data)
            let parseData =queryString.parse(data)
            console.log("pased raw to js object",parseData)
            let jsonString=JSON.stringify(parseData);
            console.log("js object to json string"+jsonString)

            let final=JSON.parse(jsonString);
            console.log("jsonstring to json data",final);
            res.writeHead(200,{"context-type":"application/json"});
            res.end({msg:"data received",jsonString});
        });
        return;
    }
    res.end("server is running");
});