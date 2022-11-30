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
                            <img src="images/project1.png" />
                            <div className="gitLink">
                                <h2>TheBreadEarth : 비건베이커리 반응형 웹사이트</h2>
                                <a href="https://kjh412.github.io/Portfolio1/index.html" target="_blank">사이트 보러가기</a> 
                                {/* _blank : 새창으로 열림. */}
                            </div>
                        </div>
                        <div className="proImg">
                            <h1>02</h1>
                            <img src="images/project2.png" />
                            <div className="gitLink">
                                <h2>HBIKE(에이치바이크) : 산악&로드자전거 반응형 웹사이트 </h2>                               
                                <a href="https://kjh412.github.io/Portfolio2/" target="_blank">사이트 보러가기</a> 
                            </div>
                        </div>
                        <div className="proImg">
                            <h1>03</h1>
                            <img src="images/project3.png"/>
                            <div className="gitLink">
                                <h2>씨네Q : 영화관 반응형 웹사이트</h2>
                                <a href="https://kjh412.github.io/cineQ/" target="_blank">사이트 보러가기</a> 
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;