import {useState} from 'react'
import Data from './Acc'
import AccItem from './AccItem'
import './Accordion.css'

const Accordion = () => {
    const [active, setActive] = useState(null)

    function handleToggle(index){
      if(active === index){
        return setActive(null);
      }
      setActive(index);
    }
  return (
    <div className='conntainer p-[1rem] sm:p-[2rem] xl:px-[10rem]'>
        <h1 className='uppercase text-[2rem] sm:text-[2.5rem]'>Some common Faqs</h1>
        <ul className="accordion">
            {Data.map((item)=>(
                <AccItem key={item.id} item={item} active={active} handleToggle={handleToggle} />
            ))}
        </ul>
    </div>
  )
}

export default Accordion