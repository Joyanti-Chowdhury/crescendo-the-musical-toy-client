import React from 'react';

const ToyDetails = ({ toyDetail }) => {
    const { name, seller, email, Price, rating, quantity, details, photo } = toyDetail;


    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn">open modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
