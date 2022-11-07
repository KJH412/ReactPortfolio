const Person = (props) => {
    const personList = props.person;
    const personSet = personList.map((f)=>
        <div className="box">
            <p className="imgBox">
                <img src={f.icon} />
            </p>
            <div className="textBox">
                <strong>{f.title}</strong>
                <p>{f.content}</p>
                <p><a href={`mailto:${f.link}`}>{f.link}</a></p>
            </div>
        </div>
    )
    return(
        <div>{personSet}</div>
        // About.js의 <Person />안에 person={persons}넘겨줘야함.
    )
}
export default Person;