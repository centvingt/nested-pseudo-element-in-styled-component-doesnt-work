import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { formRulesValidation as rules, apiResponses } from 'helpers'

import { useSessionStorage } from 'utils/useSessionStorage'

import {
  ContactModalWrapper,
  ContactForm,
  ContactSubmitButton,
  AuthErrorMessage,
  AuthSuccessMessage,
} from 'elements'
import { KJInput, LoadingDots, KJTextarea, KJSelect } from 'components'

export const Contact = ({ setDisplayContactForm }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm()

  const [disappearance, setDisappearance] = useState(false)
  const [serverError, setServerError] = useState(null)
  const [success, setSuccess] = useState(false)

  const wrapperWasClicked = event => {
    setDisappearance(true)
    window.setTimeout(() => {
      setDisplayContactForm(false)
    }, 1000)
  }

  const { getSessionStorageItem, setSessionStorageItem, clearSessionStorage } =
    useSessionStorage()

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(value, name, type)
      console.log(value[name].replace('\n', '\\n'))

      setSessionStorageItem(name, value[name])
    })

    return () => subscription.unsubscribe()
  }, [watch])

  useEffect(() => {
    const givenName = getSessionStorageItem('givenName')
    const familyName = getSessionStorageItem('familyName')
    const email = getSessionStorageItem('email')
    const tel = getSessionStorageItem('tel')
    const contactSubject = getSessionStorageItem('contactSubject')
    const message = getSessionStorageItem('message')

    givenName && setValue('givenName', givenName)
    familyName && setValue('familyName', familyName)
    email && setValue('email', email)
    tel && setValue('tel', tel)
    contactSubject && setValue('contactSubject', contactSubject)
    message && setValue('message', message)
  }, [])

  const onSubmit = async data => {
    let { givenName, familyName, email, tel, message } = data

    try {
      console.log(process.env.NEXT_PUBLIC_API_URL)
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ givenName, familyName, email, tel, message }),
        }
      )

      if (response.status !== 200) {
        throw {
          name: 'server',
        }
      }

      setSuccess(true)
    } catch (error) {
      console.error('Contact.js ~> error ~>', error)
      setServerError(apiResponses.undetermined)
    }
  }

  const subjects = [
    {
      value: 'account',
      content: 'Mon compte KJ+',
    },
    {
      value: 'contentCreator',
      content: 'Créer du contenu pour KJ+',
    },
    {
      value: 'bug',
      content: 'Signaler un bug',
    },
    {
      value: 'partnership',
      content: 'Partenariat',
    },
    {
      value: 'recruitment',
      content: 'Recrutement',
    },
    {
      value: 'press',
      content: 'Presse',
    },
    {
      value: 'other',
      content: 'Autre',
    },
  ]

  return (
    <ContactModalWrapper
      onClick={wrapperWasClicked}
      disappearance={disappearance}
    >
      <ContactForm
        onClick={event => event.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
      >
        {success ? (
          <AuthSuccessMessage>
            Nous avons bien reçu ton message qui sera traité dans les meilleurs
            délais !
          </AuthSuccessMessage>
        ) : (
          <>
            <h1>Contacte-nous&thinsp;!</h1>
            <KJInput
              name="givenName"
              type="text"
              label="Ton prénom"
              placeholder="Prénom"
              autoComplete="given-name"
              errorMessage={errors.givenName && errors.givenName.message}
              register={register}
              required={rules.givenName.required}
            />
            <KJInput
              name="familyName"
              type="text"
              label="Ton nom"
              placeholder="Nom"
              autoComplete="family-name "
              errorMessage={errors.familyName && errors.familyName.message}
              register={register}
              required={rules.familyName.required}
            />
            <KJInput
              name="email"
              type="email"
              label="Ton adresse e-mail"
              placeholder="Adresse e-mail"
              autoComplete="email"
              errorMessage={errors.email && errors.email.message}
              register={register}
              required={rules.email.required}
              pattern={rules.email.pattern}
            />
            <KJInput
              name="tel"
              type="tel"
              label="Ton numéro de téléphone"
              placeholder="Numéro de téléphone"
              autoComplete="tel"
              errorMessage={errors.tel && errors.tel.message}
              required={rules.tel.required}
              register={register}
            />
            <KJSelect
              name="contactSubject"
              label="Choisis ton sujet"
              register={register}
              validate={rules.contactSubject.validate}
              errorMessage={
                errors.contactSubject && errors.contactSubject.message
              }
            >
              <option value="choice">Sujet</option>
              {subjects.map(({ value, content }) => (
                <option value={value} key={value}>
                  {content}
                </option>
              ))}
            </KJSelect>
            <KJTextarea
              name="message"
              label="Comment peut-on t’aider&thinsp;?"
              placeholder="On aime quand tu nous écris"
              register={register}
              required={rules.message.required}
              errorMessage={errors.message && errors.message.message}
            />
            {serverError && <AuthErrorMessage>{serverError}</AuthErrorMessage>}
            <ContactSubmitButton as="button" type="submit">
              {isSubmitting ? <LoadingDots /> : 'Envoyer'}
            </ContactSubmitButton>
          </>
        )}
      </ContactForm>
    </ContactModalWrapper>
  )
}
