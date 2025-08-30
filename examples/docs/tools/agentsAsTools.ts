import { Agent } from 'react-native-openai-agents-js-agents';

const summarizer = new Agent({
  name: 'Summarizer',
  instructions: 'Generate a concise summary of the supplied text.',
});

const summarizerTool = summarizer.asTool({
  toolName: 'summarize_text',
  toolDescription: 'Generate a concise summary of the supplied text.',
});

const mainAgent = new Agent({
  name: 'Research assistant',
  tools: [summarizerTool],
});
