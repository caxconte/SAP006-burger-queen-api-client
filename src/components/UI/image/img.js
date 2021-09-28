const Img = ({ variant, onClick, alt, width, heigth, src }) => {
  return (
    <img
      alt={alt}
      className={variant}
      onClick={onClick}
      width={width}
      height={heigth}
      src={src}>
    </img>
  )
}

export default Img;