import React, { useState, useEffect, useMemo } from 'react';
import Layout from 'Layout';
import CartItem from 'components/CartItem'
import axios from 'commons/axios';
import { formatPrice } from 'commons/helper';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Cart = () => {
    //Hook
    const [carts, setCarts] = useState([])

    // effective when render, use an empty array here
    useEffect(() => {
        axios.get('/carts').then(res => setCarts(res.data))
    }, [])

    const totalPrice = useMemo(() => {
        const total = carts.map(cart => cart.amount * parseInt(cart.price))
            .reduce((acc, value) => acc + value, 0);
        return formatPrice(total);
    }, [carts])

    const updateCart = cart => {
        const newCarts = [...carts]
        const _index = newCarts.findIndex(c => c.id === cart.id)
        newCarts.splice(_index, 1, cart)
        setCarts(newCarts)
    }

    const deleteCart = cart => {
        const _carts = carts.filter(c => c.id !== cart.id);
        setCarts(_carts);
    };



    return (
        <Layout>
            <div className="cart-page">
                <span className="cart-title">Shopping Cart</span>
                <div className="cart-list">
                    <TransitionGroup component={null}>
                        {carts.map(cart => (
                            // remember is classNamesssssssss!!!!
                            <CSSTransition classNames="cart-item" timeout={300} key={cart.id}>
                                <CartItem
                                    key={cart.id}
                                    cart={cart}
                                    updateCart={updateCart}
                                    deleteCart={deleteCart}
                                />
                            </CSSTransition>))}
                    </TransitionGroup>
                </div>
                {carts.length === 0 ? <p className="no-cart">NO GOODS</p> : ''}

                <div className="cart-total">
                    Total:
                    <span className="total-price">{totalPrice}</span>
                </div>
            </div>
        </Layout>
    )
}

export default Cart;