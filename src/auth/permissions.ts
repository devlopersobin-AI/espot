export type AuthRole =
  | 'Member'
  | 'Partner'
  | 'Franchisee'
  | 'Entrepreneur'
  | 'Leader'
  | 'Scholar'
  | 'Jobseeker'
  | 'Trainer'
  | 'Admin';

export type Permission =
  | 'events.read'
  | 'events.create'
  | 'events.update'
  | 'events.delete'
  | 'membership.read'
  | 'membership.update'
  | 'profile.read'
  | 'profile.update'
  | 'users.manage';

const ALL_PERMISSIONS: Permission[] = [
  'events.read',
  'events.create',
  'events.update',
  'events.delete',
  'membership.read',
  'membership.update',
  'profile.read',
  'profile.update',
  'users.manage',
];

const ROLE_PERMISSIONS: Record<AuthRole, Permission[]> = {
  Member: ['events.read', 'membership.read', 'profile.read', 'profile.update'],
  Partner: ['events.read', 'events.create', 'events.update', 'membership.read', 'membership.update', 'profile.read', 'profile.update'],
  Franchisee: ['events.read', 'events.create', 'events.update', 'membership.read', 'membership.update', 'profile.read', 'profile.update'],
  Entrepreneur: ['events.read', 'events.create', 'events.update', 'membership.read', 'membership.update', 'profile.read', 'profile.update'],
  Leader: ['events.read', 'events.create', 'events.update', 'membership.read', 'membership.update', 'profile.read', 'profile.update'],
  Scholar: ['events.read', 'membership.read', 'profile.read', 'profile.update'],
  Jobseeker: ['events.read', 'membership.read', 'profile.read', 'profile.update'],
  Trainer: ['events.read', 'events.create', 'events.update', 'membership.read', 'membership.update', 'profile.read', 'profile.update'],
  Admin: ALL_PERMISSIONS,
};

export function getAuthRole(): AuthRole {
  const role = localStorage.getItem('authRole') as AuthRole | null;
  return role || 'Member';
}

export function hasPermission(role: AuthRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role].includes(permission);
}
