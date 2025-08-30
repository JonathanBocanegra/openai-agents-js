import {
  Agent,
  webSearchTool,
  fileSearchTool,
} from 'react-native-openai-agents-js-agents';

const agent = new Agent({
  name: 'Travel assistant',
  tools: [webSearchTool(), fileSearchTool('VS_ID')],
});
