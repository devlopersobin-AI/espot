import { useCallback, useEffect, useSyncExternalStore } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuthRole,
  getDashboardPathForRole,
  type AuthRole,
} from "../auth/permissions";

const AUTH_KEY = "authRole";
const SESSION_TIMESTAMP_KEY = "authSessionTimestamp";
const SESSION_TIMEOUT_MS = 8 * 60 * 60 * 1000; // 8 hours
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

  // Session timeout check
  useEffect(() => {
    if (!role) return;
    const timestamp = localStorage.getItem(SESSION_TIMESTAMP_KEY);
    if (timestamp) {
      const elapsed = Date.now() - Number(timestamp);
      if (elapsed > SESSION_TIMEOUT_MS) {
        localStorage.removeItem(AUTH_KEY);
        localStorage.removeItem("authToken");
        localStorage.removeItem(SESSION_TIMESTAMP_KEY);
        notify();
        navigate("/auth");
        return;
      }
    }
    // Refresh timestamp on activity
    localStorage.setItem(SESSION_TIMESTAMP_KEY, String(Date.now()));
  }, [role, navigate]);

  const login = useCallback(
    (newRole: AuthRole) => {
      localStorage.setItem(AUTH_KEY, newRole);
      localStorage.setItem(SESSION_TIMESTAMP_KEY, String(Date.now()));
      notify();
      navigate(getDashboardPathForRole(newRole));
    },
    [navigate],
  );

  const logout = useCallback(() => {
    // Clear all auth-related storage
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem("authToken");
    localStorage.removeItem(SESSION_TIMESTAMP_KEY);
    // Clear any session-specific data
    const keysToRemove = Object.keys(localStorage).filter(
      (k) =>
        k.startsWith("dashboard-") ||
        k.startsWith("membership-") ||
        k.startsWith("quick-registrations"),
    );
    keysToRemove.forEach((k) => localStorage.removeItem(k));
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
