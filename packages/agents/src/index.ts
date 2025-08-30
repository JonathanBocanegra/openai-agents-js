import { setDefaultModelProvider } from 'react-native-openai-agents-js-agents-core';
import { OpenAIProvider } from 'react-native-openai-agents-js-agents-openai';
import { setDefaultOpenAITracingExporter } from 'react-native-openai-agents-js-agents-openai';

setDefaultModelProvider(new OpenAIProvider());
setDefaultOpenAITracingExporter();

export * from 'react-native-openai-agents-js-agents-core';
export * from 'react-native-openai-agents-js-agents-openai';
export * as realtime from 'react-native-openai-agents-js-agents-realtime';
