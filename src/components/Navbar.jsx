import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ total }) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary container-fluid fixed-top py-3">
        <div className="container d-flex">
          <div className="">
            <a className="navbar-brand" href="#">
              <span>✨</span>
              UrbanForge
            </a>
          </div>
          <div>
            <small className="position-relative">
              <FaShoppingCart size={30} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {total}
                <span className="visually-hidden">cart total</span>
              </span>
            </small>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
