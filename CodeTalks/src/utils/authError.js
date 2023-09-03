export default function (errorCode) {
  switch (errorCode) {
    case 'auth/email-already-exists':
      return 'Email already exists.';
    case 'auth/invalid-email':
      return 'Invalid email.';
    case 'auth/invalid-password':
      return 'Invalid password.';
    case 'auth/user-not-found':
      return 'User not found.';
    case 'auth/wrong-password':
      return 'Wrong password.';
    case 'auth/weak-password':
      return 'Weak password.';
    default:
      return errorCode;
  }
}
