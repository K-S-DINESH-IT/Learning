import PropTypes from "react" ;
import "../css/Form.css"
const Form = (props) => {
  return (
    <>
    <div className="table">
      <p>Student Name : {props.name}</p>
      <p>Grade :{props.grade}</p>
      <p>Status :{props.isStatus ? "Pass" : "Fail"}</p>
      
      </div>
    </>
  )
}

Form.propTypes={
    name: PropTypes.string,
    grade: PropTypes.number,
    isStatus: PropTypes.bool,

}

Form.defaultProps ={
    name: "No one",
    grade:0,
    isStatus: false,
}
export default Form
