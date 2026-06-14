import { SystemErrorRecord } from "../../models/DataRecord";
import * as fs from "fs/promises";

export class ErrorLogWriter {
  private lines: string[] = [];
  write(record: SystemErrorRecord) {
    const { type: _type, ...rest } = record;
    this.lines.push(JSON.stringify(rest));
  }
  async finalize() {
    await fs.writeFile("src/output/errors.jsonl", this.lines.join('\n'));
  }
}
