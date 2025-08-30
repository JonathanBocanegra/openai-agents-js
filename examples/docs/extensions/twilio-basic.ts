import { TwilioRealtimeTransportLayer } from 'react-native-openai-agents-js-agents-extensions';
import {
  RealtimeAgent,
  RealtimeSession,
} from 'react-native-openai-agents-js-agents/realtime';

const agent = new RealtimeAgent({
  name: 'My Agent',
});

// Create a new transport mechanism that will bridge the connection between Twilio and
// the OpenAI Realtime API.
const twilioTransport = new TwilioRealtimeTransportLayer({
  // @ts-expect-error - this is not defined
  twilioWebSocket: websocketConnection,
});

const session = new RealtimeSession(agent, {
  // set your own transport
  transport: twilioTransport,
});
