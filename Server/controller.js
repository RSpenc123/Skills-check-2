module.exports = {
    getItem: (req,res) =>{
        const db = req.app.get('db')
        db.get_Item()
        .then(dbResponse => res.status(200).send(dbResponse))
        .catch(err => {
            res.status(500).send({errormessage:`shit's fucked`})
        })
    },
    addItem: (req,res) =>{
        const db = req.app.get('db')
        const{name,price,image}=req.body
        db.add_Item([name,price,image])
        .then(db => res.status(200).send(db))
    },
    editItem: (req,res) => {
        const db = req.app.get('db')
        const{id}=req.params
        const{name,price,image}=req.body
        db.edit_Item([id,name,price,image])
        .then(db=> res.status(200).send(db))
    },
    deleteItem: (req,res)=>{
        const db = req.app.get('db')
        const{id}=req.params
        db.delete_Item([id])
        .then(db=> res.status(200).send(db))
    }
}