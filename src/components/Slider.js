import React from 'react'
import "./Slider.css"
import { useInView } from "react-intersection-observer"

const Slider = ({imageSrc, title, subtitle, subtitle2, flipped}) => {
    
    const { ref, inView } = useInView({
        threshold: 0.4,
    })
    
    const renderContent = () =>{
        if (!flipped){
            return (
                <>
                                
                <img src={imageSrc} alt="Venstusy" className='slider__image' />
                <div className='slider__content'>
                    <h1 className='slider__title'>{title}</h1>
                    <p>{subtitle} <span>{subtitle2}</span></p>
                    <button>Go!</button>       
                </div>           
                    
                </>
            )     
        }
        else{
            return (
                <>
                    <div className='slider__content'>
                        <h1 className='slider__title'>{title}</h1>
                        <p className=''>{subtitle}</p>
                        <button>Go!</button>
                    </div>  
                    <img src={imageSrc} alt="Venstusy" className='slider__image' />
                </>
            )
                
        }
    }

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  )
}

export default Slider
