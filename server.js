const express = require("express")
const app = express()
const PORT = 8000

const gsSquad = {
    "muslera":{
        "Age": 36,
        "Position": "GoalKeeper",
        "Nationality": "Uruguay"
    },
    "nelsson":{
        "Age": 24,
        "Position": "Defender",
        "Nationality": "Denmark"
    },
    "lucasttorreira":{
        "Age": 26,
        "Position": "Midfielder",
        "Nationality": "Uruguay"
    },
    "kerem":{
        "Age": 24,
        "Position": "Left Wing",
        "Nationality": "Turkey"
    },
    "no":{
        "Age": "no",
        "Position": "no",
        "Nationality": "no"
    }

}


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/api/:name", (req, res) => {
    const name = req.params.name.toLowerCase()
    if(gsSquad[name]){

        document.querySelector("button").addEventListener("click", gs)

        function gs(){
            document.querySelector(".Position").innerHTML = gsSquad[name].Nationality
        }



        res.json(gsSquad[name])
    }else{
        res.json(gsSquad["no"])
    }
})

app.listen(PORT, ()=>{
    console.log(`The Port is ${PORT}` )
})