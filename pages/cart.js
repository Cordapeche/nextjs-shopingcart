import React from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { useCart } from 'react-use-cart'

const Cart = () => {
  const { updateItemQuantity, items, cartTotal } = useCart()  

  return (
    <div>
      <div className='row'>
        <div className='col-md-8 col-12'>
          {items.map((article) => (
            <div key={article.id} className='card rounded-0 border-0 px-2'>
              <div className='row'>
                <div className='col-4 my-auto'>
                </div>
                <div className='col-8 my-auto'>
                  <div className='card-body py-0 d-flex justify-content-between'>
                    <p className='card-title fw-light'>{article.name}</p>
                    <p className='card-title fw-light'>
                      {article.quantity} x ${article.price}
                    </p>
                  </div>
                  <div className='card-body py-0 btn-group float-end'>
                    <button
                      onClick={() =>
                        updateItemQuantity(article.id, article.quantity - 1)
                      }
                      className='btn btn-danger btn-sm rounded-pill me-3'
                    >
                      <FaMinusCircle className='mb-1' />
                    </button>
                    <button
                      onClick={() =>
                        updateItemQuantity(article.id, article.quantity + 1)
                      }
                      className='btn btn-primary btn-sm rounded-pill me-3'
                    >
                      <FaPlusCircle className='mb-1' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='col-md-4 col-12'>
          <div className='card'>
            <div className='card-body'>
              <div className='d-flex justify-content-between'>
                <span>Delivery</span> <span>$0</span>
              </div>
              <div className='d-flex justify-content-between'>
                <span>Discount</span> <span>$0</span>
              </div>
              <div className='d-flex justify-content-between fw-bold'>
                <span>Total</span> <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
