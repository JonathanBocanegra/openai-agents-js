import { OpenAI } from 'openai';
import { setDefaultOpenAIClient } from 'react-native-openai-agents-js-agents';

const customClient = new OpenAI({ baseURL: '...', apiKey: '...' });
setDefaultOpenAIClient(customClient);
