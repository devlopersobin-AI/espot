import { useCallback, useSyncExternalStore } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuthRole,
  getDashboardPathForRole,
  type AuthRole,
} from "../auth/permissions";

const AUTH_KEY = "authRole";
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot(): AuthRole | null {
  return getAuthRole();
}

function notify() {
  listeners.forEach((cb) => cb());
}

export function useAuth() {
  const role = useSyncExternalStore(subscribe, getSnapshot);
  const navigate = useNavigate();

  const login = useCallback(
    (newRole: AuthRole) => {
      localStorage.setItem(AUTH_KEY, newRole);
      notify();
      navigate(getDashboardPathForRole(newRole));
    },
    [navigate],
  );

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem("authToken");
    notify();
    navigate("/");
  }, [navigate]);

  return {
    role,
    isAuthenticated: role !== null,
    dashboardPath: role ? getDashboardPathForRole(role) : null,
    login,
    logout,
  };
}
