import { useEffect } from "react";
const PushScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js";
    script.async = true;

    document.body.appendChild(script);

    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "e7bc5c09-8ad7-4473-aeaf-03c0ac4d512e",
      });
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default PushScript;
