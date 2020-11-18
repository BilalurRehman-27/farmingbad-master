import React, { createContext } from 'react'
import blue from '../../assets/images/Blue.png'
import sushiSwap from '../../assets/images/SushiSWAP2.png'
import pickle from '../../assets/images/Pickle 1.png'
import sushi from '../../assets/images/Sushi.png'
import valueVfv from '../../assets/images/ValueVFV.png'
import luna from '../../assets/images/LUNA.png'
import dodo from '../../assets/images/Dodo.png'

const allImages: any = {
  blue,
  sushiSwap: sushiSwap,
  pickle,
  sushi,
  luna,
  valueVfv,
  dodo,
}
const RVLContext = createContext({
  allImages,
  currentImage: '',
  setCurrentImage: (name: any) => {},
})

const RVLContextProvider: any = ({ children }: any) => {
  const [currentImage, setCurrentImage] = React.useState('blue')
  const setCurentImageCallback: any = React.useCallback(
    (name: any) => {
      setCurrentImage(name)
    },
    [setCurrentImage],
  )
  return (
    <RVLContext.Provider
      value={{
        allImages,
        currentImage: allImages[currentImage],
        setCurrentImage: setCurentImageCallback,
      }}
    >
      {children}
    </RVLContext.Provider>
  )
}
export { RVLContext }
export default RVLContextProvider
