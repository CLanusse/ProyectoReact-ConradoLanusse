import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import 'firebase/firestore'
import { Loader } from './Loader'
import { Link } from 'react-router-dom'
import { generarOrden } from '../firebase/generarOrden'
import { CheckoutDetail } from './CheckoutDetail'
import { CheckoutSuccess } from './CheckoutSuccess'
import { CheckoutOutOfStock } from './CheckoutOutOfStock'

export const Checkout = () => {

    const [loading, setLoading] = useState(true)
    const [showError, setShowError] = useState(false)
    const [validUser, setValidUser] = useState(false)
    const [response, setResponse] = useState()

    const {cart, totalCart, clear} = useContext(CartContext)

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        }, 1000)
    }, [validUser])

    const [values, setValues] = useState({
        name: '',
        tel: '',
        email: '',
        emailCheck: ''
    })

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value  
        })
    }

    const checkUser = () => {
        if (values.name !== '' && values.tel !== '' && values.email !== '' && values.emailCheck !== '') {
            if (values.email === values.emailCheck) {
                setLoading(true)
                setValidUser(true)
                return
            }
        }
        setShowError(true)
        setTimeout(()=>setShowError(false), 5000)
    }

    const handleSetOrder = ()=> {
        if (cart.length > 0){
            setLoading(true)
            generarOrden({name: values.name, tel: values.tel, email: values.email}, cart)
                .then(res => {
                    console.log('Orden numero:' + res)
                    clear()
                    setResponse(res)
                })
                .catch(err =>{ 
                    console.log(err)
                    setResponse(err)
                })
                .finally(()=>{
                    setLoading(false)
                })
        }
    }

    return (
        <div className="checkoutContainer">
            {loading ? 
            <Loader/> 
                :
            <>
                {response  ? 
                    <>
                    {typeof response === 'string' ? 
                        <CheckoutSuccess orden={response}/>
                        :
                        <CheckoutOutOfStock noStock={response}/>
                        
                    }
                    </>
                
                  :

                    <>
                        {!validUser ? 
                        <div className="buyerData">
                            <h2>Datos personales</h2>
                            <form className="buyer-form">
                                <legend>Completa tus datos para completar la compra</legend>
                                <input
                                    type="text"
                                    name="name"
                                    className="buyer-input"
                                    placeholder="Tu nombre"
                                    autoComplete="off"
                                    value={ values.name }
                                    onChange={ handleInputChange }
                                />
                                <input
                                    type="tel"
                                    name="tel"
                                    className="buyer-input"
                                    placeholder="Teléfono"
                                    autoComplete="off"
                                    value={ values.tel }
                                    onChange={ handleInputChange }
                                />
                                <input
                                    type="email"
                                    name="email"
                                    className="buyer-input"
                                    placeholder="Email"
                                    autoComplete="off"
                                    value={ values.email }
                                    onChange={ handleInputChange }
                                />
                                <input
                                    type="email"
                                    name="emailCheck"
                                    className="buyer-input"
                                    placeholder="Repite tu email"
                                    autoComplete="off"
                                    value={ values.emailCheck }
                                    onChange={ handleInputChange }
                                />
                            </form>

                            <div className="dataButtons">
                                <Link to={'/cart'}>Volver al carrito</Link>
                                <button onClick={checkUser}>Confirmar</button>
                            </div>
                        </div>
                        : 
                        <CheckoutDetail buyer={values} cart={cart} setValid={setValidUser} handleOrder={handleSetOrder} total={totalCart}/>
                        }
                    </>
                }
            </>    
        }


        <div className={showError ? "form-error form-error-show" : "form-error"}>
            <p>Campos vacíos o inválidos. Verifique los datos ingresados.</p>
        </div>
        </div>
    )
}
