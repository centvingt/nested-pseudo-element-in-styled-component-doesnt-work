import { useEffect, useRef, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import Vimeo from '@u-wave/react-vimeo'

import logo from 'public/kj-plus-logo.svg'
import bootcamp from 'public/picto-bootcamp.svg'
import classesVirtuelles from 'public/picto-classes-virtuelles.svg'
import videosLudiques from 'public/picto-videos-ludiques.svg'
import picture1 from 'public/home-1.jpg'
import picture2 from 'public/home-2.jpg'
import picture3 from 'public/home-3.jpg'
import picture4 from 'public/home-4.jpg'
import picture5 from 'public/home-5.jpg'
import profileBabyJunior from 'public/home-profile-baby-junior.jpg'
import profileBigJunior from 'public/home-profile-big-junior.jpg'
import profileJunior from 'public/home-profile-junior.jpg'
import profileLittleJunior from 'public/home-profile-little-junior.jpg'

import {
  HomeContainer,
  HomeMainLogo,
  HomeHeader,
  HomeHeaderContent,
  FixedAccentButtonWrapper,
  FlexibleAccentButtonWrapper,
  H1,
  HomeH2,
  HomeDiscoverySection,
  HomeSuperParents,
  HomeSolution,
  HomeProfilesSection,
  AccordionItem,
  HomeFAQSection,
} from 'elements'

import { Label } from 'components'

import { theme } from 'styles/theme'

import { useWindowSize } from 'utils/useWindowSize'
import { useIntersectionObserver } from 'utils/useIntersectionObserver'

const Home = ({ setScrollIsSnapped, setIORatio }) => {
  const { breakpointsRawValues } = theme
  const getButtonText = () => <>C’est parti&thinsp;!</>

  const { windowWidth } = useWindowSize()

  const [faqIndex, setFAQIndex] = useState(null)

  const handleFAQIndex = index => {
    index === faqIndex && setFAQIndex(null)
    index !== faqIndex && setFAQIndex(index)
  }

  const [accordionItemsHeights, setAccordionItemsHeights] = useState([])

  useEffect(() => {
    setScrollIsSnapped(true)

    const getAccordionsHeights = () => {
      let heights = []
      for (const accordionItemContentRef of accordionItemsContentRef.current) {
        heights = [...heights, accordionItemContentRef.clientHeight]
      }
      setAccordionItemsHeights(heights)
    }
    getAccordionsHeights()
    window.addEventListener('resize', getAccordionsHeights)

    return () => {
      setScrollIsSnapped(false)

      window.removeEventListener('resize', getAccordionsHeights)
    }
  }, [])

  const accordionItemsContentRef = useRef([])
  const [ioRef, ioEntry] = useIntersectionObserver({ threshold: [0, 0.1] })

  useEffect(() => {
    setIORatio(ioEntry.intersectionRatio)

    return () => setIORatio(1)
  }, [ioEntry])

  return (
    <>
      <Head>
        <title>Page d’accueil</title>
      </Head>
      <HomeContainer>
        <HomeHeader ref={ioRef}>
          <Vimeo
            video={
              (windowWidth &&
                windowWidth <= breakpointsRawValues.mobile &&
                '654219871') ||
              '654219751'
            }
            autoplay
            loop
            muted
            controls={false}
            className="video-container"
          />
          {/* <img src="/video-placeholder.png" /> */}
          <HomeHeaderContent>
            <HomeMainLogo>
              <Image src={logo} alt="Logo KJ+" layout="responsive" />
            </HomeMainLogo>
            <H1>
              Le streaming de l’éducation en&nbsp;illimité pour toute la famille
            </H1>
            <h2>
              Pour développer des compétences de vie indispensables,
              que&nbsp;l’on n’apprend pas à l’école&nbsp;!
            </h2>
            <h3>
              <strong>
                <em>100&thinsp;€</em> par mois
              </strong>{' '}
              pour toute la famille
            </h3>
            <p>Oui, pour toute la famille et sans engagement&thinsp;*</p>

            {(!windowWidth || windowWidth > breakpointsRawValues.mobile) && (
              <FixedAccentButtonWrapper>
                {getButtonText()}
              </FixedAccentButtonWrapper>
            )}
            {windowWidth && windowWidth <= breakpointsRawValues.mobile && (
              <FlexibleAccentButtonWrapper>
                {getButtonText()}
              </FlexibleAccentButtonWrapper>
            )}
            <p className="note">
              *&thinsp;Résiliation effective a la fin de la période de
              facturation en cours.
            </p>
            <footer>
              <Label picto={videosLudiques} text="Vidéos ludiques" />
              <Label picto={classesVirtuelles} text="Classes virtuelles" />
              <Label picto={bootcamp} text="Bootcamp 2.0" />
            </footer>
          </HomeHeaderContent>
        </HomeHeader>
        <HomeDiscoverySection>
          <div>
            <div>
              <Image
                src={picture1}
                alt="Découvre un univers unique pour toute la famille."
                layout="responsive"
              />
            </div>
            <div>
              <HomeH2>
                Découvre un univers unique pour&nbsp;toute la&nbsp;famille
              </HomeH2>
              <p>
                Créer un avatar à ton image et profite de l’univers de KJ
                <sup>+</sup>.
              </p>
              <p>
                <strong>Vidéothèque&thinsp;:</strong> Formations vidéos ludiques
                sur les 6 piliers de Klesis Junior.
              </p>
              <p>
                <strong>Classes virtuelles&thinsp;:</strong> classe en ligne de
                soutien scolaire, langues et développement personnel.
              </p>
              <p>
                <strong>Bootcamps 2.0&thinsp;:</strong> Activités extrascolaires
                100% en ligne et en option pour approfondir découvrir un sujet
                d’avenir.
              </p>
            </div>
          </div>
        </HomeDiscoverySection>
        <HomeProfilesSection>
          <div>
            <HomeH2 style={{ textDecoration: 'red wavy underline' }}>
              Mettre ici un titre à propos des profils
            </HomeH2>
            <figure>
              <div>
                <Image
                  src={profileBabyJunior}
                  alt="Profile Baby Junior"
                  layout="responsive"
                />
              </div>
              <figcaption>
                <h3>Baby Junior</h3>
                <h4>Stimuler la créativité et l’amour de l’apprentissage</h4>
              </figcaption>
            </figure>
            <figure>
              <div>
                <Image
                  src={profileLittleJunior}
                  alt="Profile Little Junior"
                  layout="responsive"
                />
              </div>
              <figcaption>
                <h3>Little Junior</h3>
                <h4>Booster le potentiel intellectuel de manière ludique</h4>
              </figcaption>
            </figure>
            <figure>
              <div>
                <Image
                  src={profileJunior}
                  alt="Profile Junior"
                  layout="responsive"
                />
              </div>
              <figcaption>
                <h3>Junior</h3>
                <h4>
                  Transformer la connaissance de nos Juniors en compétences
                  pratiques
                </h4>
              </figcaption>
            </figure>
            <figure>
              <div>
                <Image
                  src={profileBigJunior}
                  alt="Profile Big Junior"
                  layout="responsive"
                />
              </div>
              <figcaption>
                <h3>Big Junior</h3>
                <h4>
                  Trouver sa vocation en explorant nos différents parcours
                  inspirants
                </h4>
              </figcaption>
            </figure>
          </div>
        </HomeProfilesSection>
        <HomeSuperParents>
          <div>
            <div>
              <HomeH2>Et pour les Super-Parents</HomeH2>
              <p>KJ+ est une plateforme éducative pour toute la famille.</p>
              <p>
                Fais profiter jusqu’à 4 enfants de ton abonnement et créer ton
                profil Super-Parent.
              </p>
              <p>
                Dans ton profil, tu retrouveras en bonus offert des vidéos
                éducatives sur la parentalité, l’orientation et bien plus !
              </p>
            </div>
            <div>
              <Image
                src={picture2}
                alt="Les super parents."
                layout="responsive"
              />
            </div>
          </div>
        </HomeSuperParents>
        <HomeSolution>
          <div>
            <HomeH2>
              Enfin une solution pour tout ce qu’on aurait aimé apprendre étant
              enfant !
            </HomeH2>
            <div>
              <Image
                src={picture3}
                alt="Enfin une solution pour tout ce qu’on aurait aimé apprendre étant enfant !."
                layout="responsive"
              />
            </div>
            <div>
              <Image
                src={picture4}
                alt="Enfin une solution pour tout ce qu’on aurait aimé apprendre étant enfant !."
                layout="responsive"
              />
            </div>
            <div>
              <Image
                src={picture5}
                alt="Enfin une solution pour tout ce qu’on aurait aimé apprendre étant enfant !."
                layout="responsive"
              />
            </div>
          </div>
        </HomeSolution>
        <HomeFAQSection>
          <div>
            <HomeH2>Foire aux questions</HomeH2>
            <AccordionItem
              onClick={() => handleFAQIndex(0)}
              isOpened={faqIndex === 0}
              maxHeight={accordionItemsHeights[0]}
            >
              <div
                ref={element => (accordionItemsContentRef.current[0] = element)}
              >
                <h3>
                  Combien coûte KJ<sup>+</sup>&thinsp;?
                </h3>
                <p>
                  Now that there is the Tec-9, a crappy spray gun from South
                  Miami. This gun is advertised as the most popular gun in
                  American crime. Do you believe that shit? It actually says
                  that in the little book that comes with it: the most popular
                  gun in American crime. Like they’re actually proud of that
                  shit.
                </p>
                <p>
                  Now that there is the Tec-9, a crappy spray gun from South
                  Miami. This gun is advertised as the most popular gun in
                  American crime. Do you believe that shit? It actually says
                  that in the little book that comes with it: the most popular
                  gun in American crime. Like they’re actually proud of that
                  shit.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              onClick={() => handleFAQIndex(1)}
              isOpened={faqIndex === 1}
              maxHeight={accordionItemsHeights[1]}
            >
              <div
                ref={element => (accordionItemsContentRef.current[1] = element)}
              >
                <h3>
                  Où regarder KJ<sup>+</sup>&thinsp;?
                </h3>
                <p>
                  Now that there is the Tec-9, a crappy spray gun from South
                  Miami. This gun is advertised as the most popular gun in
                  American crime. Do you believe that shit? It actually says
                  that in the little book that comes with it: the most popular
                  gun in American crime. Like they’re actually proud of that
                  shit.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              onClick={() => handleFAQIndex(2)}
              isOpened={faqIndex === 2}
              maxHeight={accordionItemsHeights[2]}
            >
              <div
                ref={element => (accordionItemsContentRef.current[2] = element)}
              >
                <h3>Comment annuler mon abonnement&thinsp;?</h3>
                <p>
                  Now that there is the Tec-9, a crappy spray gun from South
                  Miami. This gun is advertised as the most popular gun in
                  American crime. Do you believe that shit? It actually says
                  that in the little book that comes with it: the most popular
                  gun in American crime. Like they’re actually proud of that
                  shit.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              onClick={() => handleFAQIndex(3)}
              isOpened={faqIndex === 3}
              maxHeight={accordionItemsHeights[3]}
            >
              <div
                ref={element => (accordionItemsContentRef.current[3] = element)}
              >
                <h3>
                  KJ<sup>+</sup>, qu’est-ce c’est&thinsp;?
                </h3>
                <p>
                  Now that there is the Tec-9, a crappy spray gun from South
                  Miami. This gun is advertised as the most popular gun in
                  American crime. Do you believe that shit? It actually says
                  that in the little book that comes with it: the most popular
                  gun in American crime. Like they’re actually proud of that
                  shit.
                </p>
              </div>
            </AccordionItem>
          </div>
        </HomeFAQSection>
      </HomeContainer>
    </>
  )
}
export default Home
