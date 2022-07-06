import React from "react";
import ReactDOM from "react-dom";
import close from "../../assets/icon-close.svg";
import {
  DropContainer,
  ZoomContainer,
  ZoomHead,
  CloseIcon,
  ZoomImg,
} from "./ImageZoomElements";

const Drop = (props) => {
  return <DropContainer onClick={props.onClick}></DropContainer>;
};

const ImageZoom = (props) => {
  const portalElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Drop onClick={props.onClick} />
          <ZoomContainer>
            <ZoomHead>
              <CloseIcon src={close} onClick={props.onClick} />
            </ZoomHead>
            <ZoomImg src={props.img} />
          </ZoomContainer>
        </>,
        portalElement
      )}
    </>
  );
};

export default ImageZoom;
