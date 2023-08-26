const {Users} = require("../models")

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
      console.log("Entering checkDuplicateUsernameOrEmail");
      const users = await Users.findOne({
        where:{
            name: req.body.name,
        }
      })
      
      if (users) {
        
        return res.status(404).json({message: "name & email already in use"});
      }

      const email = await Users.findOne({
        where: {
          email: req.body.email,
        }
      })

      
      if (email) {
        return res.status(404).json({message: "name & email already in use"});
      }
      console.log("No duplicates found, proceeding to next middleware");     
      next();

    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    checkDuplicateUsernameOrEmail
}