const{Users} = require("../models");
const bcrypt = require("bcrypt");

var jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
    try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({
        name,
        email,
        password:hashPassword
    })
    

    return res.status(201).json({ data: newUser });
    } catch (error) {
       console.log(error);
    }
}

const signIn = async (req, res) => {
    try {
        const {email, password} = req.body
        const users = await Users.findOne({
            where: {
                email
              },
        })

            
    if (!users) {
        return res.status(404).json({ message: 'Invalid Credential' });
      }
      const isPasswordMatch = await bcrypt.compare(password, users.password);
      if (!isPasswordMatch) {
        return res.status(404).json({ message: 'Invalid Credential' });
      }
      const token = jwt.sign(
        { id: users.id, name: users.name,  },
        process.env.JWT_SECRETKEY
      );
      return res.status(201).json({
        accessToken: token,
        dataUser: {
          id: users.id,
          name: users.name,
          email: users.email
        },
      });
    


    } catch (error) {
     console.log(error);
     }
}



module.exports = {
    signUp,
    signIn
}