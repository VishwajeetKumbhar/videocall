import React from 'react'
import { useParams } from 'react-router-dom'
import { appId, serversecret } from '../helper'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
const Room = () => {
    const { roomid } = useParams()
    const myMeeting = async (element) => {
        const appID = appId;
        const serverSecret = serversecret;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid, Date.now().toString(), "Harsh Pathak");

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element , 
            scenario: {
                mode:ZegoUIKitPrebuilt.OneONoneCall
            }
        })
    }

    return (
        <div>
            <div ref={myMeeting}/>
        </div>
    )
}

export default Room 