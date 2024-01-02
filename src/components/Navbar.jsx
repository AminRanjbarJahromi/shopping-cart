
import {Navbar as NavbarBs, Button } from 'react-bootstrap'
import{BsCart} from 'react-icons/bs'


function Navbar() {
    return (
        <NavbarBs classname = 'border-bottom border-secondary'>
            <NavbarBs.Collapse>
                <Button variant = 'btn btn-outline-secondary'
                 classname= 'text-white'>
                    <BsCart className='mx-2'></BsCart>Shopping Cart
                    </Button>
            </NavbarBs.Collapse>
        </NavbarBs>
    )

}
export default Navbar;