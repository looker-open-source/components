import React from 'react';
import { Spinner } from '../../Spinner';
export const ModalLoading = () => React.createElement(Spinner, {
  mx: "auto",
  my: "xxlarge"
});
export const ModalLayout = ({
  children,
  footer,
  header
}) => React.createElement(React.Fragment, null, header, children, footer);
//# sourceMappingURL=ModalLayout.js.map