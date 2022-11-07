const Back = (props) =>{
    const backList = props.backskill;
    const backSet = backList.map((b)=>
        <div className="box">
              <p className="imgBox">
                <img src={b.icon} />
            </p>
            <div className="textBox">
                <strong>{b.title}</strong>
            </div>
        </div>
    )
    return(
        <div className="skillTitle">
        <div className="subTitle">
            <h2>BACK END SKILLS</h2>
        </div>
        <div className="skillWrap">{backSet}</div>
    </div>
    )
}

export default Back;