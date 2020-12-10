const mongoose= require('mongoose');

var actorDataSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:[true],
        minlength:6,
       
        unique:true
    },
    password:{
        type:String,
        required:[true],
        minlength:6,
        maxlength:1024
    },

    firstName:{
        type:String,
        required:[true],
        minlength:3

    },
    lastName:{
        type:String,
        required:[true],
        minlength:3

    },
    actorHeight:{
        type:Number,
        minlength:3,
        required:[true]

    },
    actorWeight:{
        type:Number,
        minlength:2,
        required:[true]

    },
    actorBirthDate:{
        type:Date,
        minlength:3,
        required:[true]

    },
    actorEthinicity:{
        type:String,
        required:[true],
        minlength:3

    },
    
    actorEyeColor:{
        type:String,
        required:[true],
        minlength:3

    },
    actorSkills:{
        type:Array,
        maxlength:200

    },
    actorActingCredits:{
        type:Array,
        maxlength:200

    },
    actorOtherData:{
        type:Array
    }

});

var actorInstance= mongoose.model('ActorData',actorDataSchema);
module.exports={actorInstance}