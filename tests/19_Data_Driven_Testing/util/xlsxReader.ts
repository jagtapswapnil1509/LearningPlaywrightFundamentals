import * as XLSX from 'xlsx';

export interface TestDataRow {
    [key: string]: string;
}

export function readXLSX(filePath: string): TestDataRow[] {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json<TestDataRow>(sheet);
}
