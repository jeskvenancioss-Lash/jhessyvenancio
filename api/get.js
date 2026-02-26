export default function handler(req,res){
  const fs = require("fs");
  const file = "history.json";

  if(fs.existsSync(file)){
    const history = JSON.parse(fs.readFileSync(file));
    res.status(200).json(history);
  }else{
    res.status(200).json([]);
  }
}
