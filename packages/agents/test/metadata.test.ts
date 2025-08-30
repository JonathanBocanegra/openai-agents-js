import { METADATA } from '../src/metadata';
import { describe, test, expect } from 'vitest';

describe('Metadata', () => {
  test('is not changed unintentionally', () => {
    expect(METADATA.name).toBe('react-native-openai-agents-js-agents');
    expect(METADATA.version).toBeDefined();
  });
});
