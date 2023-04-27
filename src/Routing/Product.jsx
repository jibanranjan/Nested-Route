
import { useEffect,useState } from 'react'
import React from 'react'
import './Product.css';
import { Link } from 'react-router-dom';

function Product() {
    const[Products, setProducts]=useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data);
            setProducts(data);
        })
    },[]);
  return (
    <div>
        
        
        <h2>product component</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse officiis dignissimos ex nisi perspiciatis velit ipsam blanditiis, quis exercitationem excepturi inventore, voluptas necessitatibus nesciunt est iure optio iste, asperiores vel! Accusamus voluptatum, error corrupti voluptatibus soluta cupiditate alias ab laudantium odit excepturi laboriosam assumenda doloribus quis fugit quae expedita omnis ratione inventore asperiores vel magni? Sint non ex laborum iste autem tempora harum, veritatis illum numquam eos voluptas odit illo cupiditate impedit aspernatur ipsam repellendus labore a inventore quasi earum et eum accusantium? Quas placeat, magnam voluptates inventore error eligendi qui nihil ea, beatae sint sequi reprehenderit voluptatum adipisci doloribus, doloremque odio repellat et facere? Cupiditate quasi voluptatum dolorem, repudiandae adipisci aliquam perspiciatis architecto dolor harum et in. Quo, aliquid nobis. Consectetur reiciendis nostrum repellendus deserunt provident voluptatibus exercitationem molestiae odio laborum ipsam unde ab laboriosam officia repudiandae, fuga facilis ratione? Nihil, neque, laudantium enim velit fuga, atque a eveniet libero ad corrupti culpa odit voluptatibus! Aspernatur beatae culpa praesentium veniam repudiandae? Mollitia delectus voluptatibus, unde dolorum reiciendis quidem, voluptas dicta odio, commodi aliquid modi culpa repudiandae deserunt architecto iure esse quam reprehenderit pariatur et nostrum quasi nisi explicabo! Hic dolorum nam nemo possimus molestias voluptate cupiditate laboriosam nisi saepe qui. Atque suscipit doloremque perferendis totam alias dolorem ad quam molestiae! Voluptatem ex ipsa nesciunt, expedita quidem repellendus officiis laudantium rem, dignissimos, illo provident quae quisquam porro neque temporibus dolore qui a non! Nemo error, aliquam numquam veritatis, eaque ullam ipsum quae corrupti omnis reprehenderit accusamus quod excepturi dolores. Nemo repudiandae vitae iusto, maxime ipsam repellat labore eligendi, eaque fugit quod excepturi commodi. Nulla vero suscipit ut officiis nam quidem totam dolores omnis tempore facilis! Aliquam rerum maiores totam ipsa beatae, libero quidem recusandae est necessitatibus quo, ullam corrupti corporis inventore repellat numquam sit dolore, cupiditate eos minima. Voluptate aut voluptatum in eum quas ipsa neque totam perspiciatis ab libero quisquam dolore rem deleniti reprehenderit, incidunt, magni quo quos iusto distinctio tempore eius. Atque quod repellendus delectus ad maiores ipsa earum eos vel alias, quis aliquam dignissimos, ab tempora commodi iusto? Incidunt quia ipsum vero tempora veritatis debitis similique provident excepturi reiciendis doloribus aliquid maiores quos asperiores, fugit illum alias voluptatum tempore accusantium fuga soluta voluptas dolore. Hic aut natus eligendi magni, dolor dolores quibusdam debitis laboriosam rerum nostrum </p>
        
        
        
        {
        Products.length>0 ? 
        
        <div className='container'>

            {
                Products.map((ele)=>{
                    return <div className='mainCard'>
                        <img src={ele.image} width="200" height="200" />
                        <h3>{ele.title} </h3>
                        <p>price: {ele.price}</p>
                        <Link to={`/ProductDetails/${ele.id}`}> <button>product details</button></Link>
                       

                        </div>

                })
            }


            </div>
        
        
        
        
        
        : <h2>No Produt to display </h2>
        
        }

    </div>
  )
}

export default Product