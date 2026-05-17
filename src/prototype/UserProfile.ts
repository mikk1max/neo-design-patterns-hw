import { UserProfilePrototype } from './UserProfilePrototype';

type Department = 'finance' | 'engineering' | 'marketing';

interface Permissions {
  canEditUsers: boolean;
  canApproveBudget: boolean;
  canAccessInternalTools: boolean;
}

export class UserProfile implements UserProfilePrototype {
  constructor(
    public username: string,
    public department: Department,
    public permissions: Permissions
  ) {}

  clone(): UserProfile {
    return new UserProfile(
      this.username,
      this.department,
      { ...this.permissions }
    );
  }
}
