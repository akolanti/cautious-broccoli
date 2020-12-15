const mongoose= require('mongoose');
const rolesSchema = new mongoose.Schema({  
    name:{
        type:String,
        required:[true],
      
    },
    age:{
        type:String,
        required:[true],
       
    },
    gender:{
        type:String,
        required:[true],
      
    },
    description:{
        type:String,
        required:[true],
       
    },
    height:{
        type:String,
        required:[true],
      
    },
    color:{
        type:String,
        required:[true],
       
    },
    ethnicity:{
        type:String,
        required:[true],
       
    },
         }); 
var AuditionDataSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true],
      
    },
    location:{
        type:String,
        required:[true],
       
    },
    description:{
        type:String,
        required:[true],
       
    },
    type:{
        type:String,
        required:[true],
       

    },
    imageurl:{
        type:String,
        required:[true],
       

    },
    lastdate: {     type: Date,    'default': Date.now  },
    
 
    roles:[rolesSchema]
    
   
});

var auditionInstance= mongoose.model('Auditions',AuditionDataSchema);
module.exports={auditionInstance}