import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GiffsApp } from './GiffsApp'
// import { MyCounterApp } from './counter/components/MyCounterApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GiffsApp></GiffsApp>
    {/* <MyCounterApp></MyCounterApp> */}
  </StrictMode>,
)
