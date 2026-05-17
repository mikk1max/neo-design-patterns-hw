import { UserProfile } from './UserProfile';

const chief = new UserProfile('Гупало Іван', 'finance', {
  canEditUsers: true,
  canApproveBudget: true,
  canAccessInternalTools: true,
});

const deputy = chief.clone() as UserProfile;
deputy.username = 'Коваль Максим';
deputy.permissions.canEditUsers = false;

console.log('Original:');
console.log(chief);

console.log('\nClone:');
console.log(deputy);

console.log('\nOriginal canEditUsers unchanged:', chief.permissions.canEditUsers); // true
