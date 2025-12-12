  //_______ ORDER PROCESSING ON THE CARD (ASYNCHRONOUS)__________

    const orderBeingPrepared = (orderNum) => new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(`order-status-img-${orderNum}`).src='assets/order-being-prepared.gif'
        document.getElementById(`order-status-txt-${orderNum}`).innerText = 'Order is being prepared'
        resolve(orderNum)
      }, 2000)
    })

    const orderPrepared = (orderNum) => new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(`order-status-img-${orderNum}`).src='assets/order-is-ready.gif'
        document.getElementById(`order-status-txt-${orderNum}`).innerText = 'Order prepared'
        resolve(orderNum)
      }, 10000)
    })

    const orderHandedOver = (orderNum) => new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(`order-status-img-${orderNum}`).src='assets/order-handed-over.gif'
         document.getElementById(`order-status-txt-${orderNum}`).innerText = 'Order handed to the delivery person'
        resolve(orderNum)
      }, 5000)
    })

    const orderOnTheWay = (orderNum) => new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(`order-status-img-${orderNum}`).src='assets/order-on-the-way.gif'
        document.getElementById(`order-status-txt-${orderNum}`).innerText = 'Order is on the way'
        resolve(orderNum)
      }, 3000)
    })

    const orderReachedDestintaion = (orderNum) => new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(`order-status-img-${orderNum}`).src='assets/order-at-destination.gif'
        document.getElementById(`order-status-txt-${orderNum}`).innerText = `Order reached its destination`
        resolve(orderNum)
      }, 8000)
    })

    const orderDelivered = (orderNum) => new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(`order-status-img-${orderNum}`).src='assets/order-delivered.gif'
        document.getElementById(`order-status-txt-${orderNum}`).innerText = `Order has been delivered`
        resolve(orderNum)
      }, 4000)
    })

    //__________ CREATING AN ORDER NUMBER _____________
    let orderNum = 0 // creates the initial order number and holds increment

    //__________ PLACING THE ORDER _____________
    const placeOrder = () => {

      orderNum++ // increments order number for the card being created
      
      createOrderCard()

      document.getElementById(`order-status-img-${orderNum}`).src='assets/order-confirmed.gif'
      document.getElementById(`order-status-txt-${orderNum}`).innerText = 'Order confirmed '

      orderBeingPrepared(orderNum)
        .then((orderNum) => orderPrepared(orderNum))
        .then((orderNum) => orderHandedOver(orderNum))
        .then((orderNum) => orderOnTheWay(orderNum))
        .then((orderNum) => orderReachedDestintaion(orderNum))
        .then((orderNum) => orderDelivered(orderNum))
        .then((orderNum) => console.log(`Order number ${orderNum} completed processing`))
        .catch(() => console.log('Something went wrong'))
    }

//__________ CREATING A NEW ORDER CARD _____________
function createOrderCard() {
  const orderList = document.getElementById('order-list')
  
  const colDiv = document.createElement('div')
  colDiv.classList.add('col-xl-4', 'col-md-6')

  const cardDiv = document.createElement('div')
  cardDiv.classList.add('card', 'text-center', 'mt-4')

  const cardHeaderDiv = document.createElement('div')
  cardHeaderDiv.classList.add('card-header')
  cardHeaderDiv.innerText = `Order Number: ${orderNum}`
  
  const cardBodyDiv = document.createElement('div')
  cardBodyDiv.classList.add('card-body')
  cardBodyDiv.innerHTML = 
              `<table class="table table-striped">
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
              </table>`

  const orderStatusImg = document.createElement('img')
  orderStatusImg.src = ''
  orderStatusImg.id = `order-status-img-${orderNum}`
  orderStatusImg.width = '75'

  const orderStatusTxt = document.createElement('p')
  orderStatusTxt.id = `order-status-txt-${orderNum}`
  orderStatusTxt.classList.add('card-text')
  
  const cancelBtn = document.createElement('button')
  cancelBtn.classList.add('btn', 'btn-danger', 'btn-sm')
  cancelBtn.innerText = 'Cancel'

  cardBodyDiv.append(orderStatusImg, orderStatusTxt, cancelBtn)

  const cardFooterDiv = document.createElement('div')
  cardFooterDiv.classList.add('card-footer', 'text-body-secondary')
  const currentTime = new Date()
  cardFooterDiv.innerText = currentTime.toLocaleString()

  cardDiv.append(cardHeaderDiv, cardBodyDiv, cardFooterDiv)
  colDiv.append(cardDiv)
  orderList.append(colDiv)

}

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
  


    <div class="col-xl-4 col-md-6"> <!--start of grid column container -->
      <!--NOTE -the code col-lg-4 spans 4 columns so 3 cards shown on a lg screen and col-md-6 spans 2 cols so 2 cards will show on a medium screen.  Remember there are 12 columns on every screen-->

        <!-----  Card 1  ----->
        <!-- start of card 1 -->
        <div class="card text-center mt-4"> <!--start of card 1-->

            <div class="card-header">
              Order Number: 1
            </div>

            <div class="card-body">
              
              
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