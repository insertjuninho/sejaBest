const db = require('../database/db');

exports.create = async (req, res) => {
    try {
       
        const payload = {
            "nome": req.body.nome,
            "endereco": req.body.endereco,
            "bairro": req.body.bairro,
            "cep": req.body.cep,
            "cidade": req.body.cidade,
            "estado":req.body.estado,
            "telefone":req.body.telefone
        };
        const userDb = db.collection('client').doc().set(payload);
        return await userDb
        // const insert = userDb.doc('sejaBest1');
        // return await insert.set(payload);
    } catch (error) {
        res.send(error)
    }
    
}

 exports.full = async (req, res) => {
    const result = await db.collection('client').doc(req.params.id).get();
         if (result.length == 0) {
             return res.send({ message: 'Não possui nenhum dado cadastrado' })
         }
        return res.send(result);
 }

  exports.update = async (req, res) => {
     const { nome, endereco, bairro, cep, cidade, estado, telefone } = req.body;

     try {
           const update =  await db.collection('client').doc(req.params.id).update( 
                {
                    "nome":nome, 
                    "endereco":endereco, 
                    "bairro":bairro, 
                    "cep":cep, 
                    "cidade":cidade, 
                    "estado":estado, 
                    "telefone":telefone
                }
                );
           res.status(200).json(update);
       } catch (error) {
          return res.send({
                 message: 'Não foi possível realizar as alterações'
          })      
       }
 }

 exports.delete = async (req, res) => {
    try {
         await db.collection('client').doc(req.params.id).delete();
         res.status(200).send('EXCLUIU COM SUCESSO');
    } catch (error) {
       return res.send(({
           message: 'Não foi possível excluir a carta solicitada'
       }))
    }
 }
