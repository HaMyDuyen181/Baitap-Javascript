import './layoutStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "./assets/images/logo.webp";
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaFacebook, FaTiktok, FaYoutube, FaInstagram, FaShippingFast } from "react-icons/fa";
import Slider from "./components/Slider"
import product from "./assets/images/Tổ yến tinh chế loại 2.webp"

function App() {
  return (
    <>
      <header className='bg-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'>
              <img src={logo} alt="logo" style={{width:'200px', marginTop:'6px'}}  />
            </div>
            <div className='col-md-9'>
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
                      </li>
                      <li class="nav-item dropdown"> 
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Giới thiệu
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Xây dựng nhà yến trọn gói</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Yếu tố giúp nuôi yến</a></li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Sản phẩm
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Tổ yến tinh chế</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Tổ yến thô</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Tổ yến chưng sẵn</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Món SOUP</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Nước yến</a></li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Tin tức
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Sale</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Hot</a></li>
                          <li><hr class="dropdown-divider"/></li>
        
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Cẩm nang</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Liên hệ</a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button class="btn btn-outline-success" type="submit" ><CiSearch /></button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            <div className='col-md-1'>
              <div className="row">
                <div class="col-4 text-center" style={{fontSize:'25px'}}><CiUser /></div>
                <div class="col-4 text-center" style={{fontSize:'25px'}}><CiHeart /></div>
                <div class="col-4 text-center" style={{fontSize:'25px'}}><CiShoppingCart /></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Slider/>
        <section class="hdl-maincontent">
          <div class="container">
            <div class='product_category'>
              <div class="row">
              <div class="col-6 col-md-3 mb-4">
                  <div class="product-item border">
                    <div class="product-item-image">
                      <a href="product_detail.html">
                        <img src={product} class="img-fluid" alt=""
                          id="img1" />                       
                      </a>
                    </div>
                    <h2 class="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">TỔ YẾN TINH CHẾ LOẠI 2</a>
                    </h2>
                    <h3 class="product-item-price fs-6 p-2 d-flex">
                      <div class="flex-fill"><del>2.350.000đ</del></div>
                      <div class="flex-fill text-end text-main">2.150.000đ</div>
                    </h3>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-4">
                  <div class="product-item border">
                    <div class="product-item-image">
                      <a href="product_detail.html">
                        <img src={product}  class="img-fluid" alt=""
                          id="img1" />
                      </a>
                    </div>
                    <h2 class="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">TỔ YẾN TINH CHẾ LOẠI 1</a>
                    </h2>
                    <h3 class="product-item-price fs-6 p-2 d-flex">
                      <div class="flex-fill"><del>2.350.000đ</del></div>
                      <div class="flex-fill text-end text-main">2.150.000đ</div>
                    </h3>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-4">
                  <div class="product-item border">
                    <div class="product-item-image">
                      <a href="product_detail.html">
                        <img src={product}  class="img-fluid" alt=""
                          id="img1" />
                      </a>
                    </div>
                    <h2 class="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">TỔ YẾN RÚT LÔNG XUẤT KHẨU</a>
                    </h2>
                    <h3 class="product-item-price fs-6 p-2 d-flex">
                      <div class="flex-fill"><del>5.600.000đ</del></div>
                      <div class="flex-fill text-end text-main">5.300.000đ</div>
                    </h3>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-4">
                  <div class="product-item border">
                    <div class="product-item-image">
                      <a href="product_detail.html">
                        <img src={product} class="img-fluid" alt=""
                          id="img1" />
                      </a>
                    </div>
                    <h2 class="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">NƯỚC YẾN SÀO</a>
                    </h2>
                    <h3 class="product-item-price fs-6 p-2 d-flex">
                      <div class="flex-fill"><del>330.000đ</del></div>
                      <div class="flex-fill text-end text-main">295.000đ</div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-dark text-white'>
        <div class="container">
          <div class="row">
            <div class="col-md-4 pt-4">
					    <a href="/" title="F1GENZ Shoes" aria-label="F1GENZ Shoes">
						    <img title="F1GENZ Shoes" src={logo} alt="F1GENZ Shoes" style={{width:'200px'}}/>
					    </a>
					    <p>Chuyên cung cấp các loại sản phẩm từ yến đảm bảo an toàn – uy tín – chất lượng. Vua Yến là món quà gửi gắm sự yêu thương, nâng niu sức khoẻ cho chính bạn, cho chính những người thân yêu quanh mình.</p>
              <h4>
                Liên hệ:
                <i class="fa fa-chevron-down"></i>
              </h4>
              <div class="footer-content">
                <p> Tư vấn dịch vụ:
                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 0984478852</a><br></br>
                    Hỗ trợ sử dụng:
                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 0335235807</a><br></br>
                    Hỗ trợ vận chuyển:
                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 0376718769</a><br></br>
                    Email:
                    <a aria-label="liên hệ" title="liên hệ" href="mailto:support@sapo.vn"> beeduyen181@sapo.vn</a><br></br>
                  </p>
                </div>
				    </div>
            <div class="col-md-4 pt-4">
					    <h4>Về chúng tôi <i class="fa fa-chevron-down"></i></h4>
					    <div class="footer-content">
						    <ul>
							    <li><a href="/trang-chu">Trang chủ</a></li>
							    <li><a href="/gioi-thieu">Gioi thiệu</a></li>
							    <li><a href="/san-pham">Sản phẩm</a></li>
							    <li><a href="/tin-tuc">Tin tức</a></li>
                  <li><a href="/cam-nang">Cẩm nang</a></li>
                  <li><a href="/lien-he">Liên hệ</a></li>
						    </ul>
					    </div>
              <h4>chính sách <i class="fa fa-chevron-down"></i></h4>
					    <div class="footer-content">
						    <ul>
							    <li><a href="/chinh-sach-giao-hang" aria-label="Chuck 2" title="Chuck 2">Chính sách giao hàng</a></li>
							    <li><a href="/chinh-sach-doi-tra" aria-label="Converse All" title="Converse All">Chính sách đổi trả</a></li>
							    <li><a href="/chinh-sach-ban-hang" aria-label="Socks" title="Socks">Chính sách bán hàng</a></li>
							    <li><a href="/chinh-sach-mua-hang" aria-label="Jack Purcell" title="Jack Purcell">Chính sách mua hàng</a></li>
							    
						    </ul>
					    </div>
				    </div>
            <div class="col-md-4 pt-4">
					    <h4>Liên hệ với chúng tôi <i class="fa fa-chevron-down"></i></h4>
						  <p>Luôn cập nhật tất cả các hành động mà chúng tôi đã lưu cho tất cả khách hàng của mình.</p>
              <div class="row">
                <div class="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px'}}>
                    <FaFacebook />
                  </a>
                </div>
                <div class="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px', color: 'black'}}>
                    <FaTiktok />
                  </a>
                </div>
                <div class="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px', color: 'red'}}>
                    <FaYoutube />
                  </a>
                </div>
                <div class="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px', color:'pink'}}>
                    <FaInstagram />
                  </a>
                </div>
                <div>
                  <h3 class="fs-5">
                    <strong>Lượt truy cập</strong>
                  </h3>
                  <p class="my-1">9888 lượt</p>
                </div>
	            </div>
				    </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
