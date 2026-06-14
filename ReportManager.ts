import { ReportAdapter } from "./ReportAdapter";
import { JsonReportAdapter } from "./JsonReportAdapter";
import { CsvReportAdapter } from "./CsvReportAdapter";
import { XmlReportAdapter } from "./XmlReportAdapter";
import { AnalyzerFacade } from "./AnalyzerFacade";
import * as fs from "fs";
import * as path from "path";

export class ReportManager {
  private static readonly REPORTS_DIR = "reports";
  private adapter: ReportAdapter;
  private fileExtension: string;
  private facade: AnalyzerFacade;

  constructor(format: string = "json") {
    this.initReportsDirectory();
    [this.adapter, this.fileExtension] = this.getAdapter(format);
    this.facade = new AnalyzerFacade(this.adapter);
  }

  generateReport(targetPath: string): void {
    const content = this.facade.generateReport(targetPath);
    const fileName = this.buildFileName();
    const filePath = path.join(ReportManager.REPORTS_DIR, fileName);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Report generated successfully: ${filePath}`);
  }

  private initReportsDirectory(): void {
    if (!fs.existsSync(ReportManager.REPORTS_DIR)) {
      fs.mkdirSync(ReportManager.REPORTS_DIR, { recursive: true });
    }
  }

  private getAdapter(format: string): [ReportAdapter, string] {
    switch (format.toLowerCase()) {
      case 'csv': return [new CsvReportAdapter(), 'csv'];
      case 'xml': return [new XmlReportAdapter(), 'xml'];
      default:    return [new JsonReportAdapter(), 'json'];
    }
  }

  private buildFileName(): string {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `report-${timestamp}.${this.fileExtension}`;
  }
}
