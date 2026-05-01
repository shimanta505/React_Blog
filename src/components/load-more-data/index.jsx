import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import "./style.css";

function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchProducts() {

        try {
            setLoading(true);
            let response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);

            const result = await response.json();
            if (result.products && result.products.length) {
                console.log(result);

                setProducts(result.products);
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        fetchProducts()
    }, []);




    return (

        <div className="container">
            {
                loading ? <div className="loader">
                    <Circles height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true} />
                </div> : null
            }
            <div className="products-list">{
                products.length > 0 ?
                    products.map((item, index) => (
                        <div className="product" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>

                        </div>


                    ))
                    : null
            }

                {products ? <span className="show-more">
                    
                    <button>show more item</button>
                </span> : null
                }

            </div>
        </div>);
}

export default LoadMoreData;