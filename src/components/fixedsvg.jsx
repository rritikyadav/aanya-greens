import { useState, useEffect } from 'react';
import './fixedsvg.css';
import { Link } from 'react-router-dom'

function Fixedsvg() {

  const [mobile, setmobile] = useState(window.matchMedia('(min-width: 768px)').matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleResize = () => setmobile(mediaQuery.matches);

    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, [])

  return (
    <>
      <div className="fixed-svg-div">{mobile ? (
        <a className='desktop-svg' href="https://wa.me/7838381836" target="_blank" rel="noopener noreferrer"><img className="desktop-fixed-svg" src="./assets/svgs/whatsapp.png" alt="" /></a>)
        :
        ("")

      }
      </div>
    </>
  )
}

export default Fixedsvg;
