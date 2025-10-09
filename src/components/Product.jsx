import React, { useState } from "react";
import Button from "./Button";
import { FaBaby, FaSearchLocation } from "react-icons/fa";

const Product = () => {
  const [modal, setModal] = useState(false);
  const handleButton = () => {
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 3000);
    console.log("Button clicked");
  };
  return (
    <>
      <div>
        <Button label="Login" icon={<FaBaby />} />
        <Button label="Submit" icon={<FaSearchLocation />} />
        <Button label="Register" />
        <Button label="Buy Now" />
      </div>
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        onClick={handleButton}
      >
        Click me
      </button>
      {modal && (
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
