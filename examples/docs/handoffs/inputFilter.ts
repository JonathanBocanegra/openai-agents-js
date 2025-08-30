import { Agent, handoff } from 'react-native-openai-agents-js-agents';
import { removeAllTools } from 'react-native-openai-agents-js-agents-core/extensions';

const agent = new Agent({ name: 'FAQ agent' });

const handoffObj = handoff(agent, {
  inputFilter: removeAllTools,
});
