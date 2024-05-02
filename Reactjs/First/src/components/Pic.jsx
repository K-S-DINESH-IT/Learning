//events

const Pic = () => {

    const imgUrl = "./src/assets/Nai Sekar.jpg"

    const handleclick = (e)=>e.target.style.display = "none"
  return (
    <>
      <img onClick={(e) =>handleclick(e)} src={imgUrl} alt="" />

    </>
  )
}

export default Pic
