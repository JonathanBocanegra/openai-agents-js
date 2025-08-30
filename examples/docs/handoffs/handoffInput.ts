import { z } from 'zod';
import {
  Agent,
  handoff,
  RunContext,
} from 'react-native-openai-agents-js-agents';

const EscalationData = z.object({ reason: z.string() });
type EscalationData = z.infer<typeof EscalationData>;

async function onHandoff(
  ctx: RunContext<EscalationData>,
  input: EscalationData | undefined,
) {
  console.log(`Escalation agent called with reason: ${input?.reason}`);
}

const agent = new Agent<EscalationData>({ name: 'Escalation agent' });

const handoffObj = handoff(agent, {
  onHandoff,
  inputType: EscalationData,
});
