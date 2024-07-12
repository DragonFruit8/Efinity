import React from 'react';


const Shop = () => {
    return (
        <section id="shop" className="py-5">
            <div className="container">
                <h2 className="text-center">Shop Our Products</h2>
                <div className="row">
                    <div className="col-md-3 text-center">
                        <div className="card mb-4">
                            <img src="https://source.unsplash.com/400x400/?roses" className="card-img-top" alt="Bouquet of Roses" />
                            <div className="card-body">
                                <h5 className="card-title">Bouquet of Roses</h5>
                                <p className="card-text">$50</p>
                                <a href="/" className="btn btn-custom">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="card mb-4">
                            <img src="https://source.unsplash.com/400x400/?sunflowers" className="card-img-top" alt="Sunflower Arrangement" />
                            <div className="card-body">
                                <h5 className="card-title">Sunflower Arrangement</h5>
                                <p className="card-text">$40</p>
                                <a href="/" className="btn btn-custom">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="card mb-4">
                            <img src="https://source.unsplash.com/400x400/?lilies" className="card-img-top" alt="Lily Bouquet" />
                            <div className="card-body">
                                <h5 className="card-title">Lily Bouquet</h5>
                                <p className="card-text">$45</p>
                                <a href="/" className="btn btn-custom">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="card mb-4">
                            <img src="https://source.unsplash.com/400x400/?flower-basket" className="card-img-top" alt="Mixed Flower Basket" />
                            <div className="card-body">
                                <h5 className="card-title">Mixed Flower Basket</h5>
                                <p className="card-text">$60</p>
                                <a href="/" className="btn btn-custom">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Shop;
