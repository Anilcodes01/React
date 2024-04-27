import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { RecoilRoot } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificatonsAtom,
  totalNotificationSelector,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkNotificationCount, setNetworkNotificationCount] = useRecoilState(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const [messagingNotificationCount, setMessagingNotificationCount] =
    useRecoilState(messagingAtom);
  const notificationNotificationsCount = useRecoilValue(notificatonsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  return (
    <>
      <button>Home</button>

      <button>
        My Networks (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>
        Jobs ({jobsNotificationCount >= 100 ? "99+" : jobsNotificationCount})
      </button>
      <button>
        Messaging (
        {messagingNotificationCount >= 100 ? "99+" : messagingNotificationCount}
        ){" "}
      </button>
      <button>
        Notifications (
        {notificationNotificationsCount >= 100
          ? "99+"
          : notificationNotificationsCount}
        )
      </button>
    <button>Me ({totalNotificationCount})</button>
<IncreaseCount />
    <MyNetworkCountIncrease />
    </>
  );
}

function IncreaseCount() {
  const setMessagingNotificationCount = useSetRecoilState(messagingAtom)
  return <div>
    <button onClick={() => {
      setMessagingNotificationCount(c => c + 1)
    }}>Increase Count</button>
  </div>
}

function MyNetworkCountIncrease() {
  const setNetworkNotificationCount = useSetRecoilState(networkAtom)
  return <div>
    <button onClick={() => {
      setNetworkNotificationCount(c => c + 1)
    }}>Increase My Network Count</button>
  </div>
}


export default App;
