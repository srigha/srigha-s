const {Books} = require('./schema');

module.exports.insertbook = async(req,res)=>{
    const bk = new Books({
    bid: Number(req.body.bid),
    bname: req.body.bname,
    pubname: req.body.pubname,
    category: req.body.category,
    price: Number(req.body.price),
    })
    const book = await Books.findOne({bid:Number(req.body.bid)});
    if(book)
         return res.send({msg:"bookss exist in db"});
    const savedbks = await bk.save();
    res.send(savedbks);
}

module.exports.getallbooks = async (req,res) => {
    const books = await Books.find({});
    if(books.length != 0)
        res.send(books)
    else 
        res.send({msg: "no books found!"})
}

module.exports.getbook = async (req,res) => {
    console.log("recieved")
    const book = await Books.findOne({bid:req.params.bid});
    if(book)
        res.send(book)
    else
        res.send({msg:"book not found!"});
}

module.exports.updatebook = async(req,res)=>{
    const book = await Books.findOneAndUpdate({bid:req.params.bid},{price:req.body.price});
        if(book)
          res.send("updated successfully");
        else
         res.send("not found");
} 

module.exports.deletebook = async(req,res)=>{
    const book = await Books.findOneAndDelete({bid:req.params.bid});
        if(book)
          res.send("deleted");
        else
         res.send("not found");
} 