/* eslint-disable react/prop-types */

export default function Buttons({type, value, handler}) {
  
  return (
    <div>
        <button onClick={handler} className={type === 'danger' ? 'btn btn-error text-white' : 'btn btn-success text-white'}>{value}</button>
    </div>
  )
}
