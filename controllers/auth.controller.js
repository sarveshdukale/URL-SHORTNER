const User = require("../models/user.model");

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

    res.status(201).json({
        Success: "User Registerd Succesfully",
        user
    })
}

async function handleLoginUser(req, res) {
  const body = req.body;

  if (!body) {
    return res.status(401).json({
      error: "Plese enter email and password",
    });
  }

  const user = await User.findOne({
    email: body.email,
    password: body.password,
  });
    
    if (!user) {
        return res.status(404).json({
            err:"User not found"
        })
    }

    
  res.status(201).json({
    Success: "User Succesfully loged in",
    user,
  });
}

module.exports = {
    handleRegisterUser,
}