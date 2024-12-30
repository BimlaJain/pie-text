import React from 'react';

const Product = () => {
    return (
        <div className="min-vh-100 py-5 product-section d-flex justify-content-center align-items-center">
            <div className="custom-container">
                <div className="d-flex flex-column flex-xl-row gap-3">
                    <div className="product-card">
                        <h1 className="text-white common-heading">Product</h1>
                        <p className="m-0 text-white common-description">
                            Due to the confusing nature of tax, the lack of awareness of the
                            tax deduction system and the complicated tax refund process, we
                            have experienced exceptional demand from the public for our
                            service. From release in 2015, our original tax product has
                            achieved 60x growth, bringing in over £5m revenue in 2022.
                        </p>
                        <p className="m-0 mt-2 text-white common-description">
                            With over 8 years of industry experience, we have listened to
                            our clients to evolve our app into a whole-of-market product
                            that will also meet the needs of the tax return market as well
                            as the tax refund market. The App is packed with all the
                            features users need to meet the requirements of the upcoming
                            switch to Making Tax Digital.
                        </p>
                        <p className="m-0 mt-2 text-white common-description">
                            Once we establish the ourself in the UK, we plan to expand into
                            other territories to take advantage of the £500 billion global
                            market
                        </p>
                        <p className="m-0 mt-2 text-white common-description">
                            We have highlighted some of our key features that will be the
                            cornerstone of our product launch in April 23.
                        </p>
                    </div>
                    <div className="d-flex grid-container justify-content-center align-items-center w-100 h-100">
                        <div className="d-grid grid-box h-100">
                            <div className="grid-item-1 d-flex">
                                <img className="grid-image-small" src="./assets/images/png/grid-1.png" alt="GridOne" />
                                <img className="grid-image-large" src="./assets/images/png/grid-2.png" alt="GridTwo" />
                            </div>
                            <div className="grid-item-2 d-flex">
                                <img className="grid-image-small" src="./assets/images/png/grid-3.png" alt="GridThree" />
                                <img className="grid-image-large" src="./assets/images/png/grid-4.png" alt="GridFour" />
                            </div>
                            <div className="grid-item-3 d-flex">
                                <img className="grid-image-large" src="./assets/images/png/grid-5.png" alt="GridOne" />
                                <img className="grid-image-small" src="./assets/images/png/grid-6.png" alt="GridTwo" />
                            </div>
                            <div className="grid-item-4 d-flex">
                                <img className="grid-image-large" src="./assets/images/png/grid-7.png" alt="GridThree" />
                                <img className="grid-image-small" src="./assets/images/png/grid-8.png" alt="GridFour" />
                            </div>
                            <div className="grid-item-5 d-flex">
                                <img className="grid-image-small" src="./assets/images/png/grid-9.png" alt="GridOne" />
                                <img className="grid-image-large" src="./assets/images/png/grid-10.png" alt="GridTwo" />
                            </div>
                            <div className="grid-item-6 d-flex">
                                <img className="grid-image-small" src="./assets/images/png/grid-11.png" alt="GridThree" />
                                <img className="grid-image-large" src="./assets/images/png/grid-12.png" alt="GridFour" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Product;
