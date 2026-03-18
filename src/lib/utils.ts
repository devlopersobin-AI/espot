import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Strip HTML tags and trim whitespace from user input */
export function sanitizeInput(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

/** Validate email format */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Validate password strength — min 8 chars, upper, lower, digit */
export function isStrongPassword(password: string): boolean {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password)
  );
}

/** Validate phone number — digits, spaces, dashes, plus sign only */
export function isValidPhone(phone: string): boolean {
  return /^[+\d][\d\s\-()]{6,20}$/.test(phone);
}
