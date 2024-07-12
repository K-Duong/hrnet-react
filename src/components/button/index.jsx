function Button({className, handleClick, children, type}) {
 return (
   <button type={type} className={`bg-primary hover:bg-yellow-600 font-bold p-2 ${className}`} onClick={handleClick}>
  {children}
 </button>
 )

}

export default Button