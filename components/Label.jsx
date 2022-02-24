import { LabelWrapper } from 'elements'
import Image from 'next/image'

export const Label = ({ picto, text }) => (
  <LabelWrapper>
    <Image src={picto} alt={text} width="36" />
    <p>{text}</p>
  </LabelWrapper>
)
