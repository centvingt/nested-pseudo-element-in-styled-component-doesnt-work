export const formRulesValidation = {
  email: {
    required: {
      value: true,
      message: 'E-mail obligatoire.',
    },
    pattern: {
      value:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'E-mail non valide.',
    },
  },
  password: {
    required: {
      value: true,
      message: 'Mot de passe obligatoire.',
    },
    pattern: {
      value:
        /(?=^.{6,12}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)|(?=.*[^A-Za-z0-9]))/,
      message:
        'Le mot de passe doit contenir six à douze caractères dont un chiffre ou un caractère spécial.',
    },
  },
  familyName: {
    required: {
      value: true,
      message: 'Nom obligatoire.',
    },
  },
  givenName: {
    required: {
      value: true,
      message: 'Prénom obligatoire.',
    },
  },
  tel: {
    required: {
      value: true,
      message: 'Téléphone obligatoire.',
    },
  },
  numberOfChildren: {
    required: {
      value: true,
      message: 'Nombre d’enfant(s) obligatoire.',
    },
    min: {
      value: 1,
      message: 'Le nombre d’enfant doit être supérieur à zéro.',
    },
    custom: {
      isValid: value => {
        let n = Number(value)
        return n >= 1 && n <= 4
      },
      message:
        'Le nombre d’enfant doit être un chiffre compris entre un et quatre.',
    },
  },
  addressLine1: {
    required: {
      value: true,
      message: 'Adresse obligatoire.',
    },
  },
  addressLine2: {
    required: {
      value: false,
    },
  },
  postalCode: {
    required: {
      value: true,
      message: 'Code postal obligatoire.',
    },
  },
  city: {
    required: {
      value: true,
      message: 'Ville obligatoire.',
    },
  },
  country: {
    required: {
      value: true,
      message: 'Pays obligatoire.',
    },
  },
  message: {
    required: {
      value: true,
      message: 'Message obligatoire',
    },
  },
  contactSubject: {
    validate: value => value !== 'choice' || 'Merci de choisir un sujet',
  },
}
