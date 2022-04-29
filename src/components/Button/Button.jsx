import './Button.css';

export const Button = (props) => {
  console.log('props', props)
  const handleClick = () => {
    alert('clicked')
  }

  const name = props.name;

  return (
    <button
      className="button-container"
      onClick={handleClick}
    >
      {props.children || name}
    </button>
  )
}