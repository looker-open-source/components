// tslint:disable:max-classes-per-file

declare module 'react-scrolllock' {
  interface ScrollLockProps {
    accountForScrollbars?: boolean
    isActive?: boolean
  }

  export default class ScrollLock extends React.Component<ScrollLockProps> {}

  export class TouchScrollable extends React.Component<{}, any> {}
}
