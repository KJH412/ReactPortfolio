import Person from "./Person";
import "./About.css";

const About = () =>{
    return(
        <div className="innerBox">
            <div className="container">
                <div className="titleBox">
                    {/* <span>웹퍼블리셔, 프론트엔드 개발자</span> */}
                    {/* <h2>About</h2> */}
                </div>
                <div className="aboutWrap">
                    <Person person={persons}/>
                    <div className="bgImg"><img src="images/about-bg.jpg" /></div>
                </div>
             </div>
        </div>
    )
}

const persons=[
    {id:1,title:"NAME",content:"Kim Jung Hyun",icon:"images/icon/name.png",link:""},
    {id:2,title:"PHONE",content:"010-1111-2222",icon:"images/icon/icon-phone.svg",link:""},
    {id:3,title:"ADDRESS",content:"서울시 구로구 구로동",icon:"images/icon/home.png",link:""},
    {id:4,title:"EMAIL",content:"",icon:"images/icon/icon-email.svg",link:"jh441122jh@gmail.com"},
    {id:4,title:"PDF",content:"",icon:"images/icon/icon-email.svg",link:"준비중"}
]

export default About;