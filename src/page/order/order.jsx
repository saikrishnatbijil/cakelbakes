import './order.css'

function order({ isHome }) {
  return (
    <div className="marginContainer">
      <div className="margin">

        <div className="nav">
          <span onClick={isHome} className="material-symbols-rounded">arrow_back</span>
          <h3>Order</h3>
        </div>

        <input className='input' type="text" placeholder='Enter Name'/>
        <input className='input' type="text" placeholder='Whats need to be on the cake'/>
        <input className='input' type="text" placeholder='Enter Zone No.'/>
        <input className='input' type="text" placeholder='Enter Street No.'/>
        <input className='input' type="text" placeholder='Enter Building No.'/>
        <input className='input' type="text" placeholder='Enter Delivery Date'/>



      </div>
    </div>
  );
}

export default order;
