import { RealtimeAgent } from 'react-native-openai-agents-js-agents/realtime';

const agent = new RealtimeAgent({
  name: 'Greeter',
  instructions: 'Greet the user with cheer and answer questions.',
});
