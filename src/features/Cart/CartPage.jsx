import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartIsEmpty from "./CartIsEmpty";
import { Link } from "react-router-dom";

CartPage.propTypes = {};

function CartPage(props) {
  const { cart } = useSelector((state) => state.user);

  const subtotalCost = cart.totalCost;
  const shippingCost = subtotalCost >= 10000 ? 0 : cart.totalCost * 0.05;
  const total = (subtotalCost + shippingCost) * 1.05;

  const cartIsEmpty = cart.totalItem === 0;

  return (
    <div className="mt-[var(--height-header)] min-h-[calc(100vh-var(--height-header))]">
      <div className="flex justify-between px-64 pt-4">
        <div className="min-w-[600px]  mr-12 mb-8 flex-1 p-4 bg-white rounded overflow-y-auto">
          {cartIsEmpty ? (
            <CartIsEmpty />
          ) : (
            cart.items.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })
          )}
        </div>
        <div className="bg-white rounded py-2 px-6 min-w-72 max-h-52">
          <div className="flex flex-col mb-2">
            <div className="flex justify-between">
              <span>Subtotal: </span>
              <span>
                {subtotalCost.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping: </span>
              <span>
                {shippingCost.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col mt-2">
            <div className="font-bold flex justify-between">
              <span>Total: </span>
              <span>
                {total.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
            <div className="flex justify-end">
              <span className="text-sm italic font-extralight">
                Including VAT
              </span>
            </div>
          </div>
          <Button
            variant="contained"
            disabled={cartIsEmpty}
            sx={{
              marginTop: "2rem",
              paddingX: "1rem",
              width: "100%",
              fontSize: "500",
              borderRadius: "4px",
              backgroundColor: "rgb(59,13,246)",
            }}
          >
            <Link to="/cart/checkout">Check out</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
