// src/features/Login/types.ts

/**
 * The raw credentials required to attempt a login.
 */
export interface LoginCredentials {
  email: string;
  password: string;
  // Optional: For multi-factor authentication
  mfaCode?: string;
}

/**
 * The session object returned after a successful authentication.
 * Using a Discriminated Union here is a pro-move to handle
 * 'Guest' vs 'Authenticated' states.
 */
export type UserSession =
  | {
      status: 'authenticated';
      user: {
        id: string;
        email: string;
        name: string;
        avatarUrl?: string;
      };
      expiresAt: number; // Unix timestamp
    }
  | {
      status: 'unauthenticated';
      user: null;
    };
