import QuickwheelExplorer from '../../../../public/resenas/quickwheel-explorer/quickwheel-explorer-1.jpg'
import SmartgyroSpeedway from '../../../../public/resenas/smartgyro-speedway/smartgyro-speedway.jpg'
import XiaomiElectric from '../../../../public/resenas/xiaomi-electric-scooter-3-lite/xiaomi-electric-scooter-3-lite.jpg'

export const ButtonReviewScooterItems = [
  {
    id: crypto.randomUUID(),
    scooterImg: QuickwheelExplorer,
    scooterAlt: 'Quickwheel Explorer',
    title: 'Quickwheel Explorer',
    link: '/'
  },
  {
    id: crypto.randomUUID(),
    scooterImg: SmartgyroSpeedway,
    scooterAlt: 'Smartgyro Speedway',
    title: 'Smartgyro Speedway',
    link: '/'
  },
  {
    id: crypto.randomUUID(),
    scooterImg: XiaomiElectric,
    scooterAlt: 'Xiaomi Electric Scooter 3 Lite',
    title: 'Xiaomi Electric Scooter 3 Lite',
    link: '/'
  }
]
