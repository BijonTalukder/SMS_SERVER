const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    roll:{type:Number},
    Attendance:[
       { 
        present:{type:String},
        absent:{type:String},
        Date:{type:Date,default:Date.now()}

        }
        ]
        },
{
    versionKey:false
})
const AttendanceModel = mongoose.model("attendances",DataSchema);
module.exports = AttendanceModel