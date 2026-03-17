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

const DASHBOARD_BY_ROLE: Record<AuthRole, string> = {
  Member: '/dashboard/member',
  Partner: '/dashboard/partner',
  Franchisee: '/dashboard/franchise',
  Entrepreneur: '/dashboard/member',
  Leader: '/dashboard/leader',
  Scholar: '/dashboard/scholar',
  Jobseeker: '/dashboard/member',
  Trainer: '/dashboard/member',
  Admin: '/dashboard',
};

function isAuthRole(value: string): value is AuthRole {
  return value in ROLE_PERMISSIONS;
}

export function getAuthRole(): AuthRole | null {
  const role = localStorage.getItem('authRole');
  if (!role || !isAuthRole(role)) {
    return null;
  }

  return role;
}

export function hasPermission(role: AuthRole | null, permission: Permission): boolean {
  if (!role) {
    return false;
  }

  return ROLE_PERMISSIONS[role].includes(permission);
}

export function getDashboardPathForRole(role: AuthRole): string {
  return DASHBOARD_BY_ROLE[role];
}
