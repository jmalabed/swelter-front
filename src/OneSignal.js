import OneSignal from "react-onesignal";

const runOneSignal = async () => {
  await OneSignal.init({
    appId: "e7bc5c09-8ad7-4473-aeaf-03c0ac4d512e",
    allowLocalhostAsSecureOrigin: true,
  });
  OneSignal.showSlidedownPrompt();
};

export default runOneSignal;
