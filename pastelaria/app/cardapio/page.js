import style from './styles/style.module.css'
import Lista from './components/Lista'
import Item from './components/Item'
import Image from 'next/image'
import Icone from '@/public/image/icone.png'

export default function Cardapio() {

    return (
        <section>
            <main className={style.main}>
                <div className={style.head}>
                    <div className={style.painel}>
                        <h1 className={style.nome}>PASTELARIA DO SEU ZÉ</h1>
                        <Image src={Icone} alt="Icone" width={70} height={70}/>
                    </div>
                </div>

                <div className={style.corpo}>
                    <Lista>
                        <Item titulo={"Carne"} preco={"R$ 10"} quantidade={0}/>
                        <Item titulo={"Carne com queijo"} preco={"R$ 10"} quantidade={4}/>
                        <Item titulo={"Carne com palmito"} preco={"R$ 15"} quantidade={4}/>
                        <Item titulo={"Frango"} preco={"R$ 10"} quantidade={0}/>
                        <Item titulo={"Frango com catupiry"} preco={"R$ 13"} quantidade={4}/>
                        <Item titulo={"Frango com queijo"} preco={"R$ 10"} quantidade={0}/>
                        <Item titulo={"Palmito"} preco={"R$ 10"} quantidade={0}/>
                        <Item titulo={"Costela"} preco={"R$ 15"} quantidade={4}/>
                        <Item titulo={"Pizza"} preco={"R$ 10"} quantidade={4}/>
                        <Item titulo={"Pizza com bacon"} preco={"R$ 15"} quantidade={0}/>
                    </Lista>
                </div>
            </main>
        </section>
    )
}