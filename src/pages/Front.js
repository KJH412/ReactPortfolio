const Front = (props) =>{
    const fsList = props.fskill;
    const fsSet = fsList.map((s)=>
        <div className="box">
            <p className="imgBox">
                <img src={s.icon} />
            </p>
            <div className="textBox">
                <strong>{s.title}</strong>
            </div>
        </div>
    )  
    return(
        <div className="skillTitle">
            <div className="subTitle">
                <h2>FRONT END SKILLS</h2>
            </div>
            <div className="skillWrap">{fsSet}</div>
        </div>
            
    )
}

export default Front;