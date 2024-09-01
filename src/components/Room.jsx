import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const Room = () => {
    const { roomId } = useParams();

    const meeting = async (element) => {
        const appId = 1779297325;
        const serverSecret = "10b6ddc0c49e872dd70e540dce5d253e";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), "badri");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `https://videocalllling.netlify.app/room/${roomId}`,
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
            showScreenSharingButton: false,
        });
    };

    return (
        <div className="room-section">
            <h1>{roomId}</h1>
            <div ref={meeting}></div>
        </div>
    )
}

export default Room;