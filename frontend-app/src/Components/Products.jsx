const Product=()=>{
import Products from './Products';

    let Products=[
        {
            name:"mobile",
            price:"5000",
            description:"good condition",
            rating:"⭐⭐⭐",
            imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSK8_BdPpbzhlPqJTQBXUofFwDAyrUceBwTg&s"

        },
    
        {
            name:"laptop",
        price:"70000",
        description:"good condition",
        rating:"⭐⭐⭐",
        imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoiUEpRMTKnIxdFn5_G55FK9lm3sSHopBzw&s"

    },
    {
        name:"cloths",
        price:"4000",
        description:"good condition",
        rating:"⭐⭐⭐",
        imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNLKj11MtbmQN0S8Awmlr9YMQuvbuJaZtQQ&s"

    }]
    return(<div>
        {Products.map((Products)=>(
            <div>
                <ProductCard details={Product}/>
            </div>
        ))}
        
        </div>);
    
}
export default Products;