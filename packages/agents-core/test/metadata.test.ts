import { describe, test, expect } from 'vitest';
import METADATA from '../src/metadata';

describe('metadata', () => {
  test('is not unintentionally broken', () => {
    expect(METADATA.name).toBe('react-native-openai-agents-js-agents-core');
    expect(METADATA.version).toBeDefined();
  });
});
