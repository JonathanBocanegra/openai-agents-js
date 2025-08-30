import { Agent } from 'react-native-openai-agents-js-agents';
import { RECOMMENDED_PROMPT_PREFIX } from 'react-native-openai-agents-js-agents-core/extensions';

const billingAgent = new Agent({
  name: 'Billing agent',
  instructions: `${RECOMMENDED_PROMPT_PREFIX}
Fill in the rest of your prompt here.`,
});
