import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Donate from './../pages/Donate';
import Loginimg from '../assets/logofinal.png';
import logo from '../assets/logo.svg';

function Header() {
	const isLoggedIn = window.localStorage.getItem('loggedin');
	const logout = (e) => {
		e.preventDefault();
    window.localStorage.clear();
    window.location.href = '/login';
  };
	const loginMenu = ()=>{if(isLoggedIn){
		return ( <Nav>
		<Nav.Link href='#' onClick={logout}>Log Out</Nav.Link>
	</Nav>)
	}else{
		return ( <Nav>
			<Nav.Link href='/login'>Login</Nav.Link>
		</Nav>)
	}
}
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
				<a href="/" className='logo'>
				<img className='desk-logo' src={logo} width={300}  alt='logo'></img>
				</a>


        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/application'>Forcast</Nav.Link>
            <Nav.Link href='/blogs'>Blogs</Nav.Link>
            <Nav.Link href='/donate'>Donate</Nav.Link>
          </Nav>

          {/* <Nav>
            <Nav.Link href='/login'>Login</Nav.Link>
          </Nav> */}
					{
						loginMenu()
					}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
