import Image from 'next/image'
import Pastel from '@/public/image/pastel.jpeg'

export default function Imagem() {
    return (
        <Image src={Pastel} alt="Pastel" width={100} height={100} />
    )
}