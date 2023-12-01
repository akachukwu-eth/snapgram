
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from './constants';

const videoAudio = () => {
  const roomID = "snapgram";
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = APP_ID;
    const serverSecret = SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Akach");


    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
            window.location.protocol + '//' +
            window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].

      },
      showScreenSharingButton: true,
      branding: 'StreamWave || AkachDaGenius😎'
    });


  };

  return (
    <div
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}
export default VideoAudio
