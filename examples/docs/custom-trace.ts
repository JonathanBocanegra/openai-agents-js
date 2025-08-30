import { Agent, run, withTrace } from 'react-native-openai-agents-js-agents';

const agent = new Agent({
  name: 'Joke generator',
  instructions: 'Tell funny jokes.',
});

await withTrace('Joke workflow', async () => {
  const result = await run(agent, 'Tell me a joke');
  const secondResult = await run(
    agent,
    `Rate this joke: ${result.finalOutput}`,
  );
  console.log(`Joke: ${result.finalOutput}`);
  console.log(`Rating: ${secondResult.finalOutput}`);
});
