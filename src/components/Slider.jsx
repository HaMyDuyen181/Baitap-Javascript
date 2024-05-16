import Slider from "../App"
import slide1 from "../assets/images/anh1.webp";
import slide2 from "../assets/images/anh2.webp";
import slide3 from "../assets/images/anh3.webp";

const slider=()=>
    {
        return(
<section class="hdl-slideshow">
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={slide1} class="d-block w-100" alt="slide1" />
                <div class='slide-text1'>
                  <h1><strong>"YẾN SÀO"</strong></h1>
                 <p>Giá trị dinh dưỡng cao, nguồn cung cấp năng lượng tự nhiên</p>
                  <p>Yến Sào đã trở thành biểu tượng của sự sang trọng và sức khỏe.z</p>
                  <button>Mua ngay</button>
                </div>
              </div>
              <div class="carousel-item">
                <img src={slide2} class="d-block w-100" alt="slide2" />
                <div class='slide-text2 tex-center'>
                  <h1><strong>CONVERSE</strong></h1>
                  <h1><strong>Mùa hè năng động</strong></h1>
                  <p>Nhập ngay mã F1CHAOHE</p>
                  <button>Mua ngay</button>
                </div>
              </div>
              <div class="carousel-item">
                <img src={slide3} class="d-block w-100" alt="slide3" />
                <div class='slide-text text-end'>
                  <h1><strong>CONVERSE</strong></h1>
                  <h1><strong>Bộ sưu tập mới</strong></h1>
                  <p>Chuck 70 luôn tươi</p>
                  <button>Xem ngay</button>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          </section>
        );
    }
    export default slider;