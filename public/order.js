
const oders_container=document.getElementById('oders_container')

const url='http://52.35.168.22'


window.addEventListener("DOMContentLoaded", () => {
    getOrders()
})
const caritem=document.getElementById('card-item-cont')

function getOrders(){
    axios.get(`${url}:3000/orders`).then(data=>{
        console.log(data.data)
        const orders=data.data
        

        for(let i=0;i<orders.length;i++){
         let totalprice=0;
          
            const orderitesm=` <div class="orders-cart">
            <div class="order-header">
              <h3>order id:${orders[i].id}</h3>
              <h3>${orders[i].createdAt}</h3>
            </div>
        
            <div class="card-item-cont">
            ${
               
                
                orders[i].products.map(product=>

                   ` <div class="card-item">
                    <img
                      class="order-img"
                      src=${product.imageUrl}
                      alt=""
                    />
                    <div class="card-item-desc" >
                      <h4>${product.title}</h4>
                      <h4>$${product.price}</h4>

                      ${
                        totalprice=totalprice+product.price*product.orderItem.quantity

                      }
                      <h4>qty:${product.orderItem.quantity}</h4>
                      <h4>${product.description}</h4>
                      
                    </div>
                   
                    
                   
                  </div>`
                 
                   
                        
                        
                    
            )
           

                }
            
             
                <h4 class='totalPrice'> total:${totalprice}</h4>
             
            </div>
            
        
          </div>`
          oders_container.innerHTML=  oders_container.innerHTML+orderitesm

        }




        
   
  

    })





}
