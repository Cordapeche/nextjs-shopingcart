import Head from 'next/head';
import { FaCartPlus, FaTimesCircle } from 'react-icons/fa';
import { useCart } from 'react-use-cart';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const { addItem, inCart, removeItem } = useCart()
  const [articles, setArticles] = useState([]);
  
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const loadData = async () => {
      fetch('/api/admins')
        .then(async (res) => {
          const data = await res.json();
          setArticles(data);
          console.log('data:', data);

        })
    };
    loadData();
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>Next.js Shopping Cart</title>
        <meta name='description' content='Next.js Shopping Cart' />
      </Head>

      {articles.map((article) => (
        <div key={article._id} className='col-md-3'>
          <div className='card border-0 shadow'>            
            <div className='card-body text-center'>
              <h6>{article.title}</h6>
              <p>{article.description}</p>
              <div className='card-text text-center'>
                <div className='d-flex justify-content-around'>
                  <button className='btn btn-dark btn-sm rounded-0 shadow'>
                    ${article.price}
                  </button>
                  {inCart(article._id) && (
                    <button
                      onClick={() => removeItem(article._id)}
                      className='btn btn-danger btn-sm rounded-pill'
                    >
                      <FaTimesCircle className='mb-1' />
                    </button>
                  )}

                  <button
                    onClick={() => addItem(article)}
                    className='btn btn-primary btn-sm rounded-pill'
                  >
                    <FaCartPlus className='mb-1' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
