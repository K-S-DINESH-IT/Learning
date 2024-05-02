import propType from "prop-types"

const Rendering = (props) => {
//method-1
//return(props.isLoggedin? <h2>Welcome to the Hell</h2>: <h2>User not Verified </h2>)
   
//method-2
// const welcome = <h2>Welcome to the Hell</h2>
// const login = <h2>User not Verified </h2>
//   return(

//     props.isLoggedin ? welcome : login
//   )

if(props.isLoggedin)
{
   return( <h2>Welcome to the Hell</h2>)
}
else
{
    return(<h2>User not Verified </h2>)
}

}


Rendering.propTypes = {

isLoggedin: propType.bool,
username: propType.string,
}

Rendering.defaultProps ={
   
    isLoggedin: true,
    username: "Noname",
}

export default Rendering
