const MarkModel = require("../../Model/Mark/MarkModel");
const CreateMarkService = require("../../Services/Mark/CreateMarkService");
const GetMarkService = require("../../Services/Mark/GetMarkService");
const UpdateMarkService = require("../../Services/Mark/UpdateMarkService");


exports.CreateMark = async(req,res)=>{
    let result = await CreateMarkService(req,MarkModel);
    res.status(200).json(result);
}
exports.GetMark = async(req,res)=>{
    let result = await GetMarkService(req,MarkModel);
    res.status(200).json(result);
}
exports.UpdateMark = async(req,res)=>{
    let result = await UpdateMarkService(req,AttendanceModel);
    res.status(200).json(result);
}