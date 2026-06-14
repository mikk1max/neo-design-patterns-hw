import * as fs from "fs";
import * as path from "path";
import { DirectoryReport } from "./DirectoryReport";

export class DirectoryAnalyzer {
  analyze(dirPath: string): DirectoryReport {
    const report: DirectoryReport = { files: 0, directories: 0, totalSize: 0, extensions: {} };
    this.traverse(dirPath, report);
    return report;
  }

  private traverse(dirPath: string, report: DirectoryReport): void {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        report.directories++;
        this.traverse(fullPath, report);
      } else if (entry.isFile()) {
        report.files++;
        report.totalSize += fs.statSync(fullPath).size;
        const ext = path.extname(entry.name);
        report.extensions[ext] = (report.extensions[ext] ?? 0) + 1;
      }
    }
  }
}
