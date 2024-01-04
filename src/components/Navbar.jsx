import { useState } from 'react'

import {Navbar as NavbarBs, Button, Modal, ModalHeader, ModalTitle, ModalBody } from 'react-bootstrap'
import{BsCart} from 'react-icons/bs'


function Navbar() {
    const [showModal, setShowModal] = useState(false)
    const handleShow = ()=>{
        setShowModal(true)
    }

    const handleClose = ()=>{
        setShowModal(false)
    }
    return (
        <>
        <NavbarBs classname = 'border-bottom border-secondary'>
            <NavbarBs.Collapse>
                <Button onClick={handleShow} variant = 'btn btn-outline-secondary'
                 classname= 'text-white'>
                    <BsCart className='mx-2'></BsCart>Shopping Cart
                    </Button>
            </NavbarBs.Collapse>
        </NavbarBs>
        <Modal show ={showModal} onHide={handleClose} contentClassName='card-bg' dir = 'rtl'>
            <ModalHeader   closeButton closeVariant='white'   >
                <Modal.Title> Shopping cart</Modal.Title>
                <Modal.Body> product </Modal.Body>

            </ModalHeader>
             </Modal>
        </>
    )

}
export default Navbar;