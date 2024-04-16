import { useState } from 'react'
import Card from './Card'
import cardData from '../data/projectData'

const Porfolio = () => {
  const [expanded, setExpanded] = useState(null)

  const handleSelection = (id) => {
    setExpanded(expanded === id ? null : id)
  }
  return (
    <div id='portfolio'>
      <h2 className="font-grenze text-4xl text-wave-spray text-center m-10">Portfolio</h2>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 place-items-center max-w-4xl'>
          {cardData.map((item) => (
            <Card
              key={item.id}
              item={item}
              selection={expanded}
              handleSelection={handleSelection}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Porfolio
