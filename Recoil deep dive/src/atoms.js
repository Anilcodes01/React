import {atom, selector} from 'recoil';

export const networkAtom = atom({
    key: 'networkAtom',
    default: 104
})

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 0
})

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 0
})

export const notificatonsAtom = atom({
    key: 'notificationsAtom',
    default: 25
})

export const totalNotificationSelector = selector({
    key: 'totalNotificationSelector',
    get: ({get}) => {
        const networkNotificationCount = get(networkAtom);
        const jobsNotificationCount = get(jobsAtom);
        const messagingNotificationCount = get(messagingAtom)
        const notificationNotificationsCount = get(notificatonsAtom)

        return networkNotificationCount + jobsNotificationCount + messagingNotificationCount + notificationNotificationsCount
    }
})