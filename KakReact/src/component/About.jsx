import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../../node_modules/bootstrap/dist/js/bootstrap"
import  myImage from "../assets/images/hero-image.jpg"
function About() {
  return (
    <div className="bg-secondary">
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="container-fluid fw-bold ">
          <a className="navbar-brand" href="#">
            IT SHOP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Best
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Model
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      MAC OS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      MSI
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ASUS
                    </a>
                  </li>
                </ul>
              </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
            <div className="col-6 col-sm-6">
                <div className="caption mx-auto">
                <h1>Find the Best Computer for your study</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
                expedita dolorem exercitationem, ducimus pariatur!
                </p>
                <input type="button" value="Shop Now" />
                </div>
            </div>
            <div className="col-6 col-sm-6">
                <div className="img">
                    <img src={myImage} alt="" />
                </div>
            </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row Card-pro">
          <h3 className="text-center pt-5">Some Product</h3>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, reiciendis.</p>
          
          <div className="col-12 col-md-3 mt-0 mt-md-3">
            <div className="product-desc">
              <h3>Mac OS</h3>
              <input type="button" value="View more" />
            </div>
          </div>
          <div className="col-12 col-md-9 mt-md-5">
            <div className="row pro-img">
              <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
              <img src={myImage} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                  <a href="#" className="btn btn-success">Add to catch</a>
                </div>
              </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
              <img src={myImage} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                  <a href="#" className="btn btn-success">Add to catch</a>
                </div>
              </div>

              </div>
              <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
              <img src={myImage} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                  <a href="#" className="btn btn-success">Add to catch</a>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 mt-0 mt-md-3">
            <div className="product-desc">
              <h3>Mac OS</h3>
              <input type="button" value="View more" />
            </div>
          </div>
          <div className="col-12 col-md-9 mt-md-5">
            <div className="row pro-img">
              <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
              <img src={myImage} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                  <a href="#" className="btn btn-success">Add to catch</a>
                </div>
              </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
              <img src={myImage} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                  <a href="#" className="btn btn-success">Add to catch</a>
                </div>
              </div>

              </div>
              <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
              <img src={myImage} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                  <a href="#" className="btn btn-success">Add to catch</a>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 mt-0 mt-md-3">
            <div className="product-desc">
              <h3>Mac OS</h3>
              <input type="button" value="View more" />
            </div>
          </div>
          <div className="col-12 col-md-9 mt-md-5">
            <div className="row pro-img">
              <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
              <img src={myImage} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                  <a href="#" className="btn btn-success">Add to catch</a>
                </div>
              </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
              <img src={myImage} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                  <a href="#" className="btn btn-success">Add to catch</a>
                </div>
              </div>

              </div>
              <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
              <img src={myImage} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                  <a href="#" className="btn btn-success">Add to catch</a>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>


















    </div>
  );
}

export default About;
