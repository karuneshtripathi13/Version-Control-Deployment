const { request } = require("express");
const { fileLoader } = require("ejs");
const express = require("express");
const router = express.Router();
const FileData = require("../models/file");
const app = express();
const fileUpload = require("express-fileupload");
app.use(fileUpload());
const fs = require("fs");

function change(arg) {
  let date = new Date();
  if (arg < 10) return "0" + arg;
  else return arg;
}

router.get("/:id", async (req, res) => {
try {
  console.log(req.params.id)
    const file = await FileData.findOne({id:req.params.id});
    console.log(file.data)
    res.json(file.data)
} catch (error) {
    res.json({"content":"error: "+error})
}
});
router.get("/:id/:val", async (req, res) => {
  try {
    const file = await FileData.findOne({id:req.params.id});
    index=-1
    for(let i=0;i<file.data.length;i++)
    {
    if(file.data[i].name.localeCompare(req.params.val)===0){
    index=i
    break
    }
  }
  console.log(file.data)
    if(index>=0){
    const readData = fs.readFileSync(file.data[index].path, 'utf8');
    data={"content":readData}
    data["fileDetails"]=file.data[index]
    data["msg"]=file.data[index].msg
    res.json(data)
    }
    else
    res.json({"content":"Data not found"})
  } catch (err) {
    res.json({"content":"error: "+err})
  }
});
router.get("/path/:id/:val", async (req, res) => {
  try {
    path=`${__dirname}/../client/public/uploads/${req.params.id}/${req.params.val}`
    console.log(path)
    const readData = fs.readFileSync(path, 'utf8');
    console.log("data read is: "+readData)
    if(readData.length!=0)
    data={"content":readData}
    else
    data={"content":"No Previous Versions available"}
    console.log("Successful")
    res.json(data)
  } catch (err) {
    console.log("Unsuccessful"+err)
    res.json({"content":"error: "+error})
  }
});
router.post("/up/:id", async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  FileData.findOne({id:req.params.id}, async (err, data) => {
    if(data!=null){
    flag=false;
    for(i=0;i<data.data.length;i++)
    {
      if(data.data[i].name.localeCompare(file.name)==0)
      {
        flag=true;
        break;
      }
    }
    if (flag) {
      res.json({ msg: "File Already Exists. Please go to Edit file option." });
    } else {
      if (!fs.existsSync(`${__dirname}/../client/public/uploads/${req.params.id}`)){
        fs.mkdirSync(`${__dirname}/../client/public/uploads/${req.params.id}`);
    }
      file.mv(
        `${__dirname}/../client/public/uploads/${req.params.id}/${file.name}`,
        async (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({msg:'Failed to save!'+err});
          } else {
            console.log({
              fileName: file.name,
              filePath: `/uploads/${file.name}`,
            });
            let obj = new Date();
            const database = {
              name: file.name,
              time:
                change(obj.getHours()) +
                ":" +
                change(obj.getMinutes()) +
                ":" +
                change(obj.getSeconds()),
              date:
                change(obj.getDate()) +
                "/" +
                change(obj.getMonth() + 1) +
                "/" +
                obj.getFullYear(),
              type: file.mimetype,
              path: `${__dirname}/../client/public/uploads/${req.params.id}/${file.name}`,
              msg:req.body.msg
            }
            try {
              console.log("id="+req.params.id)
              const db = await FileData.findOne({id:req.params.id});
              console.log(db)
              await db.data.push(database)
              const f1 = await db.save();
              console.log("Saved Successfully!");
              res.json({msg:'File Uploaded Successfully!.'})
            } catch (err) {
              console.log("Error: " + err);
              res.json({msg:'Failed to save!'})
            }
          }
        }
      );
    }
   }//else
  // res.json({msg:"Please Logout and Login"})
  });
});
router.post('/reg',async(req,res)=>{
  try{
    console.log(req.body.name)
    const file = await FileData.findOne({id:req.body.id});
    console.log(file)
    if(file!==null)
    res.json({msg:'User Already exists'});
    else
    {
    const database = new FileData({
      pname: req.body.name,
      id: req.body.id,
      password:req.body.password,
    });
    try {
      const f1 = await database.save();
      console.log("Saved Successfully!");
    } catch (err) {
      console.log("Error: " + err);
    }
    res.json({msg:"Registeration successful"});
  }
  }catch (err) {
    res.json({msg: "Failed to Register: " + err});
  }
})
router.post('/login',async(req,res)=>{
  try{
    console.log(req.body.id)
    const file = await FileData.findOne({id:req.body.id,password:req.body.password});
    console.log(file.length)
    if(file.length!==0)
    res.json({msg:true,proj:file.pname});
    else
    res.json({msg: false});
  }catch (err) {
    res.json({msg: false});
  }
})
router.patch("/:id", async (req, res) => {
  try {
    console.log(req.params.id)
    const file = await FileData.findOne({id:req.body.id});
    index=-1
    for(let i=0;i<file.data.length;i++)
    {
    if(file.data[i].name.localeCompare(req.params.id)===0){
    index=i
    break
    }
  }
  console.log(file.data[index])
    var msg=file.data[index].msg
    file.data[index].msg=req.body.msg;
    console.log(file.data[index].prev)
    let dat="default";
    dat=fs.readFileSync(file.data[index].path, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
    })
    fs.writeFileSync(`${__dirname}/../client/public/uploads/${req.body.id}/${file.data[index].name} (Version ${file.data[index].prev.length + 1})`, dat, (err) => {
      if (err)
        console.log('File Update Failed ' + err);
    });
    fs.writeFileSync(file.data[index].path,req.body.content,(err)=>{
      if(err)
      console.log('File Update Failed '+err)
      })
     await file.data[index].prev.push({
        name:`${file.data[index].name} (Version ${file.data[index].prev.length+1})`,
        msg:msg,
        time:"Time: "+file.data[index].time+"   "+"Date: "+file.data[index].date
        })
        let obj = new Date();
    file.data[index].time=change(obj.getHours()) +":" +change(obj.getMinutes()) +":" +change(obj.getSeconds())
    file.data[index].date=change(obj.getDate()) +"/" +change(obj.getMonth() + 1) +"/" +obj.getFullYear()
    const f1 = await file.save();
    console.log(f1)
    res.json({msg:'File Successfully Updated'});
  } catch (err) {
    res.json({msg: "File Update Failed: " + err});
  }
});
router.delete("/:idd/:id", async (req, res) => {
  try {
    const f1 = await FileData.findOne({id:req.params.idd});
    index=-1
    for(let i=0;i<f1.data.length;i++)
    {
    if(f1.data[i].name.localeCompare(req.params.id)===0){
    index=i
    break
    }
  }
  if(index>=0){
    try {
      fs.unlinkSync(f1.data[index].path)
      //file removed
    } catch(err) {
      console.error(err)
    }
    for(var i=0;i<f1.data[index].prev.length;i++)
    {
      try {
        fs.unlinkSync(`${__dirname}/../client/public/uploads/${req.params.idd}/`+f1.data[index].prev[i].name)
        //file removed
      } catch(err) {
        console.error(err)
      }
    }
    // try {
    //   fs.rmdirSync(`D:/JAVA/version-ctrl/client/public/uploads/${req.params.idd}`)
    //   //directory removed
    // } catch(err) {
    //   console.error(err)
    // }
    f1.data.splice(index,1)
    const f2 = await f1.save();
    console.log(f2)
    res.json({msg:'File Successfully Deleted'});
  }
  // else
  // res.json({msg:'No Such file exists'});
  } catch (err) {
    res.send("Error: " + err);
  }
});

module.exports = router;
