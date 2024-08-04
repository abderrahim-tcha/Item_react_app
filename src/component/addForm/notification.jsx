import { useState } from "react";
import "./notification.css";
import { CloseSvg, SuccessSvg, ErrorSvg, AlertSvg, InfoSvg } from "./svg.js";

function SuccessNotification() {
  const [closed, setClosed] = useState(false);
  return (
    <>
      {!closed && (
        <div className="notification-box">
          <div className="notification success-notification">
            <div className="notification-icon success-icon">
              <SuccessSvg />
            </div>
            <div className="success-message">lorem ipsum dolor sit amet</div>
            <div
              className="notification-icon close-icon"
              onClick={() => setClosed(true)}
            >
              <CloseSvg />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ErrorNotification() {
  const [closed, setClosed] = useState(false);
  return (
    <>
      {!closed && (
        <div className="notification-box">
          <div className="notification error-notification">
            <div className="notification-icon error-icon">
              <ErrorSvg />
            </div>
            <div className="error-message">lorem ipsum dolor sit amet</div>
            <div
              className="notification-icon close-icon"
              onClick={() => setClosed(true)}
            >
              <CloseSvg />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function AlertNotification() {
  return (
    <div className="notification-box">
      <div className="notification alert-notification">
        <div className="notification-icon alert-icon">
          <AlertSvg />
        </div>
        <div className="alert-message">lorem ipsum dolor sit amet</div>
        <div className="notification-icon close-icon">
          <CloseSvg />
        </div>
      </div>
    </div>
  );
}

function InfoNotification() {
  return (
    <div className="notification-box">
      <div className="notification info-notification">
        <div className="notification-icon info-icon">
          <InfoSvg />
        </div>
        <div className="info-message">lorem ipsum dolor sit amet</div>
        <div className="notification-icon close-icon">
          <CloseSvg />
        </div>
      </div>
    </div>
  );
}

export {
  SuccessNotification,
  ErrorNotification,
  AlertNotification,
  InfoNotification,
};
