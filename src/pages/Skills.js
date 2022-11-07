import Back from "./Back";
import Design from "./Design";
import Front from "./Front";
import './Skills.css';

const Skills = () =>{
    return(
        <div className="innerBox">
            <div className="container">
                <div className="titleBox">
                    {/* <span>이곳에 설명을 넣으세요</span>
                    <h2>Skills</h2> */}
                </div>
                <div className="skills_Wrap">
                <Front fskill={frontSkill} />
                <Back backskill={backSkill} />
                <Design designskill={designSkill}/>
                </div>
            </div>
        </div>
    )
}

// 변수로 불러오는 이미지는 src안에 있어야하고
// 직접 불러오는 이미지경로 public안에 있어야함!☆ (이미지가 안뜬이유)
const frontSkill = [
    {id:1, title:"HTML5", icon:"images/html5.svg"},
    {id:2, title:"CSS3", icon:"images/css3.svg"},
    {id:3, title:"JAVASCRIPT ES6", icon:"images/javascript.svg"},
    {id:4, title:"JQUERY", icon:"images/jQuery.png"},
    {id:5, title:"SCSS", icon:"images/sass.svg"},
    {id:6, title:"REACT", icon:"images/react.svg"}
]

const backSkill = [
    {id:1, title:"JAVA", icon:"images/java.png"},
    {id:2, title:"JSP", icon:"images/jsp.png"},
    {id:3, title:"mySQL", icon:"images/sql.png"}
]

const designSkill = [
    {id:1, title:"PHOTOSHOP", icon:"images/icon_010.png"},
    {id:2, title:"ILLUSTRATOR", icon:"images/icon_011.png"}
]

export default Skills;