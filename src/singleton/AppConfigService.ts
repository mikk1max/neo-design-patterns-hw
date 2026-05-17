export class AppConfigService {
  private static instance: AppConfigService | null = null;

  private constructor(
    public readonly companyName: string,
    public readonly footer: string
  ) {}

  static getInstance(companyName = 'Default Company', footer = 'Confidential'): AppConfigService {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService(companyName, footer);
    }
    return AppConfigService.instance;
  }
}
