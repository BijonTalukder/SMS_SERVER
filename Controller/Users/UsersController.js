const UsersModel = require("../../Model/Users/UsersModel");
const CreateUsersService = require("../../Services/Users/CreateUsersService");
const GetUserService = require("../../Services/Users/GetUserService");
const UpdateUserService = require("../../Services/Users/UpdateUserService");

exports.CreateUsers = async (req, res) => {
    let result = await CreateUsersService (req, UsersModel);
    res.status(200).json(result);
  };
exports.GetUser = async (req,res) =>{
  let result = await GetUserService (req,UsersModel);
  res.status(200).json(result);
}
exports.UpdateUser = async (req,res) =>{
  let result = await UpdateUserService (req,UsersModel);
  res.status(200).json(result);
}