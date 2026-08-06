import { readFileSync } from 'fs';
import { load } from 'js-yaml';

export interface TestDataRow {
    [key: string]: string;
}

export function readYAML(filePath: string): TestDataRow[] {
    const content = readFileSync(filePath, 'utf-8');
    return load(content) as TestDataRow[];
}
