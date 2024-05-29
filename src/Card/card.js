import React from "react";
import { useState } from "react";
import '../Card/style.css'


let Card=()=>{
    let [arr,setArr]=useState([
        {
            id:3,
            food_name: "Cheese Burger",
            food_description: "A delicious cheese burger with lettuce, tomato, and a side of fries.",
            food_price: "₹150",
            food_image: "https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg"
        },
        {
            id:4,
            food_name: "Veggie Pizza",
            food_description: "A tasty pizza topped with a variety of fresh vegetables and cheese.",
            food_price: "₹250",
            food_image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2021/03/Veggie-Pizza-8.jpg"
        },
        {
            id:5,
            food_name: "Pasta Alfredo",
            food_description: "Creamy Alfredo pasta served with garlic bread.",
            food_price: "₹200",
            food_image: "https://img.freepik.com/free-photo/plate-pasta-alfredo_74190-4819.jpg"
        },
        {
            id:6,
            food_name: "Caesar Salad",
            food_description: "Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
            food_price: "₹120",
            food_image: "https://img.freepik.com/free-photo/caesar-salad-top-view_2829-11046.jpg"
        },
        {
            id:7,
            food_name: "Chicken Wrap",
            food_description: "Grilled chicken wrapped in a soft tortilla with fresh veggies and sauce.",
            food_price: "₹180",
            food_image: "https://www.simplejoy.com/wp-content/uploads/2020/07/Chicken-wrap-735x1103.webp"
        },
        {
            id:8,
            food_name: "Paneer Tikka",
            food_description: "Spicy and flavorful paneer tikka served with mint chutney.",
            food_price: "₹220",
            food_image:"https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg"
        },
        {
            id:9,
            food_name: "Butter Chicken",
            food_description: "Rich and creamy butter chicken served with naan or rice.",
            food_price: "₹300",
            food_image: "https://www.spiceroots.com/spiceroots/wp-content/uploads/2008/05/butterchicken-1024x682-1.jpg"
        },
        {
            id:10,
            food_name: "Fish Fry",
            food_description: "Crispy fried fish served with a side of tartar sauce.",
            food_price: "₹250",
            food_image: "https://www.thetakeiteasychef.com/wp-content/uploads/2017/12/KFF-FI1-Compressed.jpg"
        }
    ]);
    
   let deletecard=(id)=>{
    let x=arr.filter((e)=>{
        return e.id!==id
    })
    console.log(x);
    setArr(x)

   }

  
    return(

        
        <div className="Menu">
              
            <div className="Menu_container">
            
                {
                    arr.map((data,ty)=>{
                        return(
                            <div key={ty}   className="Menu_card_container" >
                        <img src={data.food_image}/>
                        
                        <h4 id="food_n" >{data.food_name}</h4>
                        <p>{data.food_description}</p>
                        <p  className="price_rs" >{data.food_price}</p>
                          <div className="btn">
                     
                        <button className="btnn"onClick={()=>deletecard(data.id)} >delete</button>
                        </div>
                          
                </div>
                        );
                        
                    })
                }
            </div>
        </div>
    );
}

export default Card;