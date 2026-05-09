const DisplayDetails=(props)=>{
    console.log(props);
    

 return(
    
    <>
    <h1>Student Details</h1>
    <h4> Name:{props.name} </h4>
    <h4> Roll No:{props.roll} </h4>
    <h4> College Name:{props.clgname} </h4>
    <h4> Course Name:{props.course}  </h4>
    <h4>Role :{props.role} </h4>
    </>
 );
}

 export default DisplayDetails;