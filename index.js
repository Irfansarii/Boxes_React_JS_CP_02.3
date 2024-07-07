const Box = props => {
  //  Write your code here.
  const {className, box} = props
  return <p className={`${className}`}>{box}</p>
}

const element = (
  //  Write your code here.
  <div className='container'>
    <h1 className='heading'>Boxes</h1>
    <div className='box-container'>
      <Box className='small' box='Small' />
      <Box className='medium' box='Medium' />
      <Box className='large' box='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
