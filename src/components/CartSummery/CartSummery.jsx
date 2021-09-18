import "./summery.scss";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { mapStateToProps } from "../Cart";
import data from "../data";
import {
  addItemToCart,
  removeItemFromCart,
  removeWholeItemFromCart,
} from "../../redux/actions";

function CartSummery(props) {
  let total = 0;
  let save = 0;

  return (
    <div className="wrap cf">
      <div className="heading cf">
        <Link to="/" className="continue">
          Back to Home
        </Link>
      </div>
      <h1 className="projTitle">Order Summary</h1>
      <div className="summary_cards">   
        <div className="quantity">
          <ol className="cartWrap">
            {props.state.map((itm, idx) => {
              //calculating discount and total sum

              total +=
                data.find((item) => itm.id === item.id).final_price *
                itm.quantity;
              if (data.find((item) => itm.id === item.id).original_price) {
                save +=
                  (data.find((item) => itm.id === item.id).original_price -
                    data.find((item) => itm.id === item.id).final_price) *
                  itm.quantity;
              }

              return (
                <li className="items odd">
                  <div className="infoWrap">
                    <div className="cartSection">
                      <h3>{data.find((item) => itm.id === item.id).name}</h3>

                      <p>
                        {" "}
                        <button
                          onClick={() =>
                            props.dispatch(removeItemFromCart(itm.id))
                          }
                          className="summary_btn"
                        >
                          -
                        </button>
                        <span className="summary_count">{itm.quantity}</span>
                        <button
                          onClick={() => props.dispatch(addItemToCart(itm.id))}
                          className="summary_btn"
                        >
                          +
                        </button>
                        x
                        {`$${
                          data.find((item) => itm.id === item.id).final_price
                        }.00`}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="heading cf">
            <Link to="/" className="continue">
              + Add More Items
            </Link>
          </div>
        </div>

        <div className="subtotal cf">
          <h3>Price Details</h3>
          <ul>
            <li className="totalRow">
              <span className="label">Subtotal</span>
              <span className="value">{`$${total}.00`}</span>
            </li>

            <li className="totalRow">
              <span className="label">Total Savings</span>
              <span className="value">
                {props.state.length === 0 ? `$0.00` : `$${save}.00`}
              </span>
            </li>

            <li className="totalRow">
              <span className="label">Shipping</span>
              <span className="value">
                {props.state.length === 0 ? `$0.00` : "$5.00"}
              </span>
            </li>

            <li className="totalRow">
              <span className="label">Tax</span>
              <span className="value">
                {props.state.length === 0 ? `$0.00` : `$4.00`}
              </span>
            </li>

            <li className="totalRow">
              <div className="totalRow final">
                <span className="label">To Pay</span>
                <span className="value">
                  {props.state.length === 0 ? `$0.00` : `${total + 9}.00`}
                </span>
              </div>
              <a href="#" className="btn continue">
                Place Order
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(CartSummery);
