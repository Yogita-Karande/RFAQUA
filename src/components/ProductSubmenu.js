
import { Dropdown, NavLink } from 'react-bootstrap';

const ProductSubmenu = () => {
  return (
    <Dropdown as="li">
      <Dropdown.Toggle as={NavLink} className="nav-link" to="products">
        Products
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={NavLink} to="products">
          Category 1
        </Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/products/category2">
          Category 2
        </Dropdown.Item>
        {/* Add more submenu items as needed */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProductSubmenu;
