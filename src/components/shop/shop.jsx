import { useEffect, useState } from 'react'
import { Item } from '..'
import './shop.css'
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../../firebase/firebase-config';

function Shop({ isHome }) {
  
  const [cakeArry, setCakeArry] = useState([])

  useEffect(() => {
    getCakes()
  }, [])

  async function getCakes() {
    const q = query(collection(db, 'cakes'));
    const array = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      // console.log(doc);
      array.push({ ...doc.data(), id: doc.id })
    });
    setCakeArry(array)
    console.log("Array in loadData() :: ", cakeArry)
  }

  const Items = cakeArry.map((item => {
    return <Item key={item.id} name={item.name} price={item.price} image={item.image} isHome={isHome}/>
  }))

  return (
    <div id='shop' className='marginContainer bg shopContainer'>
        <div className="margin">
            <div className="itemList">
            {Items}
            </div>
        </div>
    </div>
  )
}

export default Shop