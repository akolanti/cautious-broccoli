var mongoose = require('mongoose');
const ActorDataInstance= mongoose.model('ActorData');
const bcrypt=require('bcrypt');

const getActors= function(req,res,next){
    ActorDataInstance.find().exec(
        function(err,actorData){
            if(err){
                res
                .status(404)
                .json(err)
                return;
            }
            console.log(actorData);
            res.status(200).json(actorData);

        }
    );
};

const login =  function(req,res,next)
{
    
   
        ActorDataInstance.findOne({userName:req.body.userName})
    .exec(function(err, actorData) {
    if (!actorData) {
        res
        .status(404)
        .json({"message":"data not found"});
    return;
    } 
    else if (err) {
        res
        .status(404)
        .json(err);
        return;
        }
        res
        .status(200)
        .json(actorData);
    });
  
};

const newActor=function(req,res,next){
    const salt= bcrypt.genSalt(10);
    const hashed= bcrypt.hash(req.body.password,salt);

    ActorDataInstance.create({
        userName:req.body.userName,
        firstName:req.body.firstName,
        password:hashed,
        lastName:req.body.lastName,
        actorHeight:req.body.actorHeight,
        actorWeight:req.body.actorWeight,
        actorBirthDate:req.body.actorBirthDate,
        actorEthinicity:req.body.actorEthinicity,
        actorEyeColor:req.body.actorEyeColor,
        actorSkills:req.body.actorSkills,
        actorActingCredits:req.body.actorActingCredits,
        actorOtherData:req.body.actorOtherData
    },(err,actorData)=>{
        if(err){
        res.status(400).json(err);
        console.log(req);
        }
        else{
        res.status(200).json(actorData);
        }
    });

};

const getSingleActor = function(req,res){
    
    if (req.params && req.params.actorid) {
    ActorDataInstance.findById(req.params.actorid)
.exec(function(err, actorData) {
if (!actorData) {
    res
    .status(404)
    .json({"message":"data not found"});
return;
} 
else if (err) {
    res
    .status(404)
    .json(err);
    return;
    }
    res
    .status(200)
    .json(actorData);
});
}  else {
        res
        .status(404)
        .json({"message":"No actorID in request"});
       
    }
};


const updateActor= function(req,res,next){
console.log("in update Actor");
if(!req.params.actorid){
    res
    .status(404)
    .json({"message":"Not Found, id necessary"});
    return;

}

ActorDataInstance.findById(req.params.actorid)
   .exec((err,actorData)=>{
       if(!actorData){
           res
           .json(404)
           .status({
               "message": "actorid not found"
           });
           return;
       } else if(err){
           res
           .status(400)
           .json(err);
           return;
       }
       actorData.userName=req.body.userName,
       actorData.firstName=req.body.firstName,
       actorData.lastName=req.body.lastName,
       actorData.actorHeight=req.body.actorHeight,
       actorData.actorWeight=req.body.actorWeight,
       actorData.actorBirthDate=req.body.actorBirthDate,
       actorData.actorEthinicity=req.body.actorEthinicity,
       actorData.actorEyeColor=req.body.actorEyeColor,
       actorData.actorSkills=req.body.actorSkills,
       actorData.actorActingCredits=req.body.actorActingCredits,
       actorData.actorOtherData=req.body.actorOtherData;

       actorData.save((err, actorData)=>{
           if(err){
               res.status(404)
               .json(err);
           }
           else{
               res
               .status(200)
               .json( actorData);
           }
       });
   }
   );
};

const deleteActor=function(req,res,next){
    const actorid=req.params.actorid;
    
    if(actorid){
    ActorDataInstance
    .findByIdAndRemove(actorid)
    .exec((err,actorData) =>{
     if(err){
                res
                .status(404)
                .json(err);
              return;
            }
               res
                .status(204)
                .json(null);
            });
    }
            else{
                res
                .status(400)
                .json({"message":"No id"});
}

};

module.exports={getActors,newActor,updateActor,getSingleActor,deleteActor,login};