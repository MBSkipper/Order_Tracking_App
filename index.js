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