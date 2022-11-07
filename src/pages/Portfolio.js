import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "./Portfolio.css";

const Portfolio = () =>{
    const settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className="innerBox">
            <div className="container">
                <div className="titleBox_port">
                    <h2>MY PORTFOLIO</h2>
                </div>
                <div className="portfolioWrap">
                    <Slider {...settings}>
                        <div className="proImg">
                            <h1>01</h1>
                            <h2>THE BREAD EARTH</h2>
                            <img src="images/project11.png" />
                            <div className="gitLink">
                                <a href="https://kjh412.github.io/Portfolio1/index.html" target="_blank">사이트 보기</a> 
                                {/* _blank : 새창으로 열림. */}
                            </div>
                        </div>
                        <div className="proImg">
                            <h1>02</h1>
                            <h2>HBIKE</h2>
                            <img src="images/project22.png" />
                            <div className="gitLink">
                                <a href="https://kjh412.github.io/Portfolio2/" target="_blank">사이트 보러가기</a> 
                            </div>
                        </div>
                        <div className="proImg">
                            {/* <h2>제목3</h2> */}
                            <img src="images/project3.png"/> <h1 className="yellow">작업중</h1>
                            <div className="gitLink">
                                <a href="#void" target="_blank">사이트 준비중</a> 
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;