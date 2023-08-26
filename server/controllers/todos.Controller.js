const { where } = require('sequelize')
const { Todos } = require('../models')


const CreateTodos = async(req, res) => {
    try {
        const {name, status} = req.body
        const usersId = req.userId
        const newTodos = await Todos.create({
            users_id: usersId,
            name,
            status
        })
        return res.status(201).json({
            succes: true,
            message: "Create Todos Succes",
            data: newTodos
        })
    } catch (error) {
       console.log(error);
    }
}


const updateTodos = async (req, res) => {
    try {
        const id = req.params.id
        const {name, status} = req.body

        const putTodos = await Todos.findByPk(id);

        if (!putTodos) {
        return res.status(404).json({
        success: false,
        messagge: 'Data Todos Not Found',
      });
    }


    await Todos.update({
        name,
        status
    }, {
        where: {
            id: id,
          },
    })

    return res.status(200).json({
        success: true,
        message: "Updated Todos Successfully",
      });

    } catch (error) {
       console.log(error);
    }
}

const getAllTodos = async (req, res) =>{
    try {
        const userId = req.userId
        const getTodosAll = await Todos.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']},
        }, {
            where: {
                users_id: userId,
              },
        })

        if(!getAllTodos) {
            return res.status(404).json({
                message: "Data Not Found"
            })
        }

        return res.status(200).json({
            data: getTodosAll,
   
        })
    } catch (error) {
        console.log(error);
    }
}

const getIdTodos = async (req, res) =>{
    try {
        const userId = req.userId
        const id = req.params.id
        const getIdTodosAll = await Todos.findByPk(id, {
            attributes: {
                exclude: ['createdAt', 'updatedAt']},
            }, 
        {
                where: {
                        users_id: userId,
                      },
                })
                if (!getIdTodos) {
                    return res.status(404).json({
                      succes: false,
                      message: 'Data Todos Not Found',
                    });
                  }
                console.log(getIdTodosAll);
        return res.status(200).json({
            data: getIdTodosAll,
   
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteTodos = async (req, res) => {
    try {
      const id = req.params.id;
      const userId = req.userId
  
      const destroyTodos = await Todos.findByPk(id, {
        where: {
            users_id: userId,
          },
      });
      
  
      if (!destroyTodos) {
        return res.status(404).json({
          succes: false,
          message: 'Data Todos Not Found',
        });
      }
      await Todos.destroy({
        where: { id: id },
      });

      return res.status(200).json({
        succes: true,
        message: 'Deleted Todos Successfully',
      });
    } catch (error) {
      console.log(error);
    }
  };

module.exports = {
    CreateTodos,
    updateTodos,
    deleteTodos,
    getAllTodos,
    getIdTodos
}