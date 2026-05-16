const colleges=require("../model/CollegeModel")


// add college
const addCollege = async (req, res) => {

   try {

      const { name, code, departments, url, email, address } = req.body;

      const newcollege = await colleges.create({
         name,
         code,
         departments,
         url,
         email,
         address
      });
await colleges.insertOne(newcollege);
      res.status(200).json({
         message: "College added successfully ✅",
         college: newcollege
      });

   } catch (error) {

      console.log(error);

      res.status(500).json({
         message: "Failed to add college ⚠️",
         error: error.message
      });
   }
};

// delete college details
// update college details
// get all college details

const getAllColleges=async()=>{
    try{
        const foundColleges=College.find();


//condition to send response with foundColleges empty
        if(foundColleges.length==0) {
            res.status(404).json({message:"colleges not found"})
        }
        //globala sucessful response
        res.status(200).json({foundColleges})
     } catch (error){
        res.status(500).json({message:"failed to retrieve data"})

    }
}

//Delete college details
const deleteCollege=async(req,res)=>{
   try{
  const  deletedDocument= await  Colleges.findByIdAndDelete(req.params.id);
  console.log(delteDocument);//to check the stored  
  res.status(200).json({message:"record deleted successfully"});
    

   }catch (error){
      res.status(500).json({message:"failed to college detail"})
   }



};




// get college based on ID

const getCollegeBasedOnId=async(req,res)=>{
   try{
   const  foundCollege =await Colleges.findById(req.params.id);
   res.status(200).json({foundCollege});


   } catch (error){
      res.status(500).json({message:"failed to get college details"})

   }
// update college details

const updateCollegeDetails=async(req,res)=>{
   try{
      const updatedCollegeDetails=req.body;
      const updatedCollege=await college.findByIdAndUpdate(
          req.params.id,
          updatedCollegeDetails,
          {new :true},

      )
        
      

   } catch (error) {
      res.status(500).json({message:"failed to update college details"})

   }
}
//update college email
const updateEmail=async(req,res)=>{
   try{
const UpdatedEmail = await College.findByIdAndUpdate(
  {
    email:req.params.email,
  },
   {email: req.body.email},
   {new:true},

);
res.status(200).json({message:"email update successfully"})

   } catch(error){
      res.status(500).json({message:"failed to update email..."})


   }
}


   module.exports={addCollege,getAllColleges,deleteCollege,getCollegeBasedOnId,updateCollegeDetails,updateEmail}};