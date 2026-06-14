import { ResumeImporter } from "../importer/ResumeImporter";

/**
 * Фасад: єдина точка входу.
 */
export class ResumePage {
  async init(jsonPath: string): Promise<void> {
    const raw = await this.fetchData(jsonPath);
    new ResumeImporter(raw).import();
  }

  private async fetchData(path: string): Promise<unknown> {
    const res = await fetch(path);
    return res.json();
  }
}
