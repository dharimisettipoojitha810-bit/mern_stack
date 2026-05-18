const Users=require("../model/UserModel")
const bcrypt=require("bcrypt");


//add user
const register=async(req, res )=>{
    try{
        const {name,email,phone,password,address,city,userType,state,zipCode}=req.body;

        const hashedPassword=await bcrypt.hash(password,10)

const newUser={
    name :name,
     email:email,
     phone:phone,
     password:hashedPassword,
     address:address,
     city:city,
     userType:userType,
     state:state,
     zipCode:zipCode
};
await Users.insertOne(newUser);
res.status(200).json({message:"Register Successfully"})

    } catch (error){
        res.status(500).json({message:"failed to register ", err:error})


    }
};

//login handler
const login=async(req,res)=>{
    try{
        const {username, password } = req.body;
         const foundUser=await Users.findOne({email:username})

         const hashedPassword=await bcrypt.compare(password,foundUser.password);

         if (!hashedPassword){
            res.status(401).json({message:"invalid password"})
         }
         res.status(202).json({message:"login successful"})

    } catch (error){
        res.status(500).json({message:"username not found"})

    }
};


//getUser
const getUserBasedOnID=async(req,res)=>{
    try{
        const foundUser=await User.findById(req.params.id);
        res.status(200).json({foundUser});
    } catch(error){
        res.status(500).json({message:"failed to get user"})

    }

}

//update profile
const updateProfile=async(req,res)=>{
    try{
    user.findByIdAndUpdate(
        req.params.id
         ,req.body ,
         {new:true}
        );
    res.state(200).json({message:"updated sucessfully"})

} catch (error) {
    res.ststus(500).json({message:"failed to update profile"})

}
}

//get Users
const getAllUsers=async(req,res)=>{
    try{
        const getAllUsers=await Users.find();
        res.status(200).json({allUsers});

    } catch (error){
        res.status(500).json({message:"failed to get users",err:error})
    }
}

//forget password
const forgetPassword=async(req,res)=>{
    const hashedPassword=await bcrypt.hash(req.body.password,10);
    try{
        User.findByIdAndUpdate(
            req.params.id,
            { password:hashedPassword },
            { new: true },

        );
        res.ststus(200).json({message:"password updated successfully"})
    } catch (error){
        res.status(500).json({message:"failed to forget password ",err:error});
    }
};





module.exports={register,login,getUserBasedOnID,getAllUsers,updateProfile,forgetPassword};