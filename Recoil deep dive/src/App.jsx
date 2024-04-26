import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useRecoilValue} from 'recoil'
import {RecoilRoot} from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificatonsAtom } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  
}


function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsNotificationCount = useRecoilValue(jobsAtom)
  const messagingNotificationCount = useRecoilValue(messagingAtom)
  const notificationNotificationsCount = useRecoilValue(notificatonsAtom)


  return (
    <>
     <button>Home</button>

     <button>My Networks ({networkNotificationCount >= 100 ? '99+': networkNotificationCount})</button>
     <button>Jobs ({jobsNotificationCount >= 100 ? '99+' : jobsNotificationCount})</button>
     <button>Messaging ({messagingNotificationCount >= 100 ? '99+' : messagingNotificationCount}) </button>
     <button>Notifications ({notificationNotificationsCount >= 100 ? '99+' : notificationNotificationsCount})</button>

     <button>Me</button>
    </>
  )
}
export default App
