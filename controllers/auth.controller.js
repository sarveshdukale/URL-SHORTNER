const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");
const {setUser,getUser} = require("../service/auth.service")

async function handleRegisterUser(req, res) {   
  const body = req.body;
  
    if (!body) {
        return res.status(401).json({
            error:"Plese enter name, email and password",
        })
    }

    const user = await User.create({
        name:body.name,
        email:body.email,
        password:body.password,
    })
  
    // res.status(201).json({
    //     Success: "User Registerd Succesfully",
    //     user
    // })
  return res.redirect("/")
}

async function handleLoginUser(req, res) {
  const body = req.body;

  const user = await User.findOne({
    email: body.email,
    password: body.password,
  });


  
  

  if (!user) {
    return res.json({
      message:"User not found plese register"
    })
    // return res.redirect("/signup");
  };

  const sessionId = uuidv4();
  setUser(sessionId, user);

  console.log(sessionId);
  console.log(user);
  
  

  res.cookie("uid",sessionId)
  return res.render("index")
 
  
}

module.exports = {
  handleRegisterUser,
  handleLoginUser,
}