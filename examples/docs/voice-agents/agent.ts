import {
  RealtimeAgent,
  RealtimeSession,
} from 'react-native-openai-agents-js-agents/realtime';

export const agent = new RealtimeAgent({
  name: 'Assistant',
});

export const session = new RealtimeSession(agent, {
  model: 'gpt-4o-realtime-preview-2025-06-03',
});
