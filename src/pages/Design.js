const Design = (props) => {
    const deList = props.designskill;
    const deSet = deList.map((d) => 
        <div className="box">
            <p className="designImg">
                <img src={d.icon} />
            </p>
            <div className="textBox">
                <strong>{d.title}</strong>
            </div>
        </div>
    ) 
    return(
        <div className="skillTitle">
        <div className="subTitle">
            <h2>DESIGN SKILLS</h2>
        </div>
        <div className="skillWrap">{deSet}</div>
    </div>
    )
} 
export default Design;