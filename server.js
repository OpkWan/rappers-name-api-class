const express = require("express")
const app = express()

const PORT = 8000

const rapper = {
    "21 savage": {
        "age": 29,
    "birthName": "Sheyaa Bin Abraham-Joseph",
    "birthLocation": "London, England"
    },
    "chance the rapper": {
        "age": 29,
    "birthName": "Chancelor Bennett",
    "birthLocation": "Chicago, Illinois"
    },
    "unknown": {
        "age": 0,
    "birthName": "unknown",
    "birthLocation": "unknown"
    }
}


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/api/:rapperName", (req,res)=>{
    const rappersName = req.params.rapperName.toLocaleLowerCase()
    if(rapper[rappersName]){
        res.json(rapper[rappersName])
    }else{
        res.json(rapper["unknown"])
    }
    // console.log(rapper[rappersName]);
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})