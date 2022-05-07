import SDPIComponents from '../typings/sdpi-components';
import streamDeckClient from './stream-deck-client';

window.SDPIComponents = SDPIComponents;

const existing = window.connectElgatoStreamDeckSocket;

/**
 * Called by the Stream Deck to enable registration of the property inspector.
 * @param inPort The port that should be used to create the WebSocket.
 * @param inPropertyInspectorUUID A unique identifier string to register Property Inspector with Stream Deck software.
 * @param inRegisterEvent The event type that should be used to register the plugin once the WebSocket is opened. For Property Inspector this is "registerPropertyInspector".
 * @param inInfo A json object containing information about the application.
 * @param inActionInfo A json object containing information about the action.
 */
window.connectElgatoStreamDeckSocket = function (inPort: string, inPropertyInspectorUUID: string, inRegisterEvent: string, inInfo: string, inActionInfo: string): void {
    if (existing) {
        existing(inPort, inPropertyInspectorUUID, inRegisterEvent, inInfo, inActionInfo);
    }

    streamDeckClient.connect(inPort, inPropertyInspectorUUID, inRegisterEvent, inInfo, inActionInfo);
};
