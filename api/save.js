export default function handler(req, res){
  if(req.method === "POST"){
    let data = req.body; // cliente, efeito, fotoBase64
    const fs = require("fs");
    const file = "history.json";

    // Ler JSON existente ou criar vazio
    let history = [];
    if(fs.existsSync(file)){
      history = JSON.parse(fs.readFileSync(file));
    }

    history.push(data);

    fs.writeFileSync(file, JSON.stringify(history, null, 2));
    res.status(200).json({message:"Salvo com sucesso"});
  }else{
    res.status(405).json({message:"Método não permitido"});
  }
}
