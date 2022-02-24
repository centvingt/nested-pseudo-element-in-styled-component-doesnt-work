export const apiResponses = {
  // Utilisé partout
  undetermined: 'Erreur indéterminée',

  // Utilisé dans /auth/signup
  authFormErrorEmailTaken: 'Un compte existe déjà avec cet e-mail.',

  // Utilisé dans /auth/signin
  authFormErrorInvalid: 'Mauvais e-mail ou mauvais mot de passe.',
  authFormErrorConfirmed: 'E-mail non confirmé.',
  authFormErrorBlocked: 'E-mail bloqué par un administrateur.',

  // Utilisé dans /auth/reset-password
  authFormErrorCodeProvide: 'Le code de réinitialisation est incorrect.',

  // Utislisé dans /auth/resend
  resendStatus500: 'Cet e-mail n’est pas en attente de confirmation.',
  resendStatus400: 'Cet e-mail a déjà été confirmé',

  // Utilisé dans /auth/forgot-password
  authFormErrorUserNotExist: 'Aucun compte ne correspond à cet e-mail.',
}
