import { AiFillStar } from "react-icons/ai";
import "./Products.css"
import { BsFillBagHeartFill } from "react-icons/bs";
function Products() {
    return (<section className="card-container">
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>



    </section>);
}

function CardContainer() {
    return <>
        <section className="card">
            <img src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg"
                alt="Shoe" className="card-image"></img>
            <div className="card-details">
                <h3 className="card-title">Shoe</h3>
                <section className="card-reviews">
                    <AiFillStar className="rating-stars"></AiFillStar>
                    <AiFillStar className="rating-stars"></AiFillStar>
                    <AiFillStar className="rating-stars"></AiFillStar>
                    <AiFillStar className="rating-stars"></AiFillStar>
                    <span className="total-reviews">4</span>
                </section>
                <section className="card-price">
                    <div className="price">
                        <del>$300</del> 200
                    </div>
                    <div className="bag">
                        <BsFillBagHeartFill></BsFillBagHeartFill>
                    </div>
                </section>
            </div>
        </section>
    </>
}

export default Products;