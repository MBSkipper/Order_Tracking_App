 /*
 
 - Example: Order tracking app
          - Instantly: Order confirmed ✅
          - After 2 seconds: Order is being prepared 🍜
          - After 10 seconds: Order prepared 🎉
          - After 5 seconds: Order handed over to the delivery person 📦
          - After 3 seconds: Order is on the way 🚴
          - After 8 seconds: Order reached it's destination 📍
          - After 4 seconds: Order has been delivered 😋

          Total processing time for order: 32 seconds
    */

    
    const orderBeingPrepared = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById('order-status-img').src='assets/order-being-prepared.gif'
        document.getElementById('order-status-txt').innerText = 'Order is being prepared 🍜'
        resolve()
      }, 2000)
    })

    const orderPrepared = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById('order-status-img').src='assets/order-is-ready.gif'
        document.getElementById('order-status-txt').innerText = 'Order prepared 🎉'
        resolve()
      }, 10000)
    })

    const orderHandedOver = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById('order-status-img').src='assets/order-handed-over.gif'
         document.getElementById('order-status-txt').innerText = 'Order handed to the delivery person 📦'
        resolve()
      }, 5000)
    })

    const orderOnTheWay = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById('order-status-img').src='assets/order-on-the-way.gif'
        document.getElementById('order-status-txt').innerText = 'Order is on the way 🚴'
        resolve()
      }, 3000)
    })

    const orderReachedDestintaion = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById('order-status-img').src='assets/order-at-destination.gif'
        document.getElementById('order-status-txt').innerText = `Order reached its destination 📍`
        resolve()
      }, 8000)
    })

    const orderDelivered = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById('order-status-img').src='assets/order-delivered.gif'
        document.getElementById('order-status-txt').innerText = `Order has been delivered 😋`
        resolve()
      }, 4000)
    })

    const placeOrder = () => {
      
      createOrderCard()

      document.getElementById('order-status-img').src='assets/order-confirmed.gif'
      document.getElementById('order-status-txt').innerText = 'Order confirmed ✅'
      orderBeingPrepared()
        .then(() => orderPrepared())
        .then(() => orderHandedOver())
        .then(() => orderOnTheWay())
        .then(() => orderReachedDestintaion())
        .then(() => orderDelivered())
        .then(() => console.log('Order processing completed'))
        .catch(() => console.log('Something went wrong'))

    }


function createOrderCard() {
  const orderList = document.getElementById('order-list')
  
  const colDiv = document.createElement('div')
  colDiv.classList.add('col-xl-4', 'col-md-6')

  const cardDiv = document.createElement('div')
  cardDiv.classList.add('card', 'text-center', 'mt-4')

  const cardHeaderDiv = document.createElement('div')
  cardHeaderDiv.classList.add('card-header')
  cardHeaderDiv.innerText = `Order No. 1`
  
  const cardBodyDiv = document.createElement('div')
  cardBodyDiv.classList.add('card-body')
  cardBodyDiv.innerText = `Order No. 1`

  const cardFooterDiv = document.createElement('div')
  cardFooterDiv.classList.add('card-footer', 'text-body-secondary')
  cardFooterDiv.innerText = `12/12/2025 10:01:34 AM`

  cardDiv.append(cardHeaderDiv, cardBodyDiv, cardFooterDiv)
  colDiv.append(cardDiv)
  orderList.append(colDiv)

}

/*
    <div class="col-xl-4 col-md-6"> <!--start of grid column container -->
      <!--NOTE -the code col-lg-4 spans 4 columns so 3 cards shown on a lg screen and col-md-6 spans 2 cols so 2 cards will show on a medium screen.  Remember there are 12 columns on every screen-->

        <!-----  Card 1  ----->
        <!-- start of card 1 -->
        <div class="card text-center mt-4"> <!--start of card 1-->

            <div class="card-header">
              Order Number: 1
            </div>

            <div class="card-body">
              
              <!-- start of table -->
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Margherita Pizza</td>
                    <td>1</td>
                    <td>£14.00</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Cheeseburger</td>
                    <td>2</td>
                    <td>£21.00</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Skinny Fries</td>
                    <td>2</td>
                    <td>£6.00</td>
                  </tr>
                  <tr>
                    <th scope="row">Total</th>
                    <td></td>
                    <td></td>
                    <td>£41.00</td>
                  </tr>


                </tbody>
              </table>
              <!-- end of table -->
              
              <!-- order status image-->
              <img src="assets/order-confirmed.gif" id="order-status-img" width="75"> <!--HERE-->

              <!-- order status text-->
              <p class="card-text" id="order-status-txt">Order status: Order confirmed ✅ </p>

              <!-- cancel button -->
              <a href="#" class="btn btn-danger btn-sm">Cancel</a>
            </div>

            <div class="card-footer text-body-secondary">
              2 days ago
            </div>

        </div> 
        <!----  end of Card 1 ---->   

      </div> <!-- end of grid column container -->
*/


    /* ---------------------------- */
    // const placeOrder = () => {
    //   console.log('Order confirmed ✅')
    //   orderBeingPrepared()
    //     .then(orderPrepared)
    //     .then(orderHandedOver)
    //     .then(orderOnTheWay)
    //     .then(orderReachedDestintaion)
    //     .then(orderDelivered)
    //     .then(() => console.log('Enjoy your meal ✅'))
    //     .catch(() => console.log('Something went wrong'))
    // }