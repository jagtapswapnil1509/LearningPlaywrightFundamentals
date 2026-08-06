import { readFileSync } from 'fs';

export interface TestDataRow {
    [key: string]: string;
}

export function readTSV(filePath: string): TestDataRow[] {
    const content = readFileSync(filePath, 'utf-8');
    const lines = content.trim().split('\n');
    const headers = lines[0].split('\t');

    const data: TestDataRow[] = [];
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split('\t');
        const row: TestDataRow = {};
        for (let j = 0; j < headers.length; j++) {
            row[headers[j].trim()] = values[j]?.trim() || '';
        }
        data.push(row);
    }
    return data;
}
