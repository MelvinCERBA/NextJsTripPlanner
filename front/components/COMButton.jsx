import Link from 'next/link'

const COMButton = ({ href = '', children, className = '', onClick = () => { }, inverted = false }) => {
  const classN = 'py-2 px-4 font-h2 text-white-light text-xl rounded-xl bg-red-light text-center hover:text-red-light hover:bg-white-light active:text-lg transition-all duration-300'
  const classNI = 'py-2 px-4 font-h2 bg-white-light text-xl rounded-xl text-red-light text-center hover:bg-red-light hover:text-white-light active:text-lg transition-all duration-300'

  if (href) {
    return (
      <>
        <Link href={href} className={className}>
          <button onClick={onClick} className={inverted ? classNI : classN}>{ children }</button>
        </Link>
      </>
    )
  }
  else {
    return (
      <>
        <div className={className}>
          <button onClick={onClick} className={inverted ? classNI : classN}>{ children }</button>
        </div>
      </>
    )
  }
}

export default COMButton;