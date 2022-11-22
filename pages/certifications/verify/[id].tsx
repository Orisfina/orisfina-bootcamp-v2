import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../../../components/Footer'
import NavBar from '../../../components/NavBar'
import SlideshowShort from '../../../components/SlideshowShort'


type Props = {}

const index: NextPage = () => {
    const [certificateID, setCertificateID] = useState<string>("");
    const [modal, setModal] = useState(false);
    const [msg, setMsg] = useState("");
    const router = useRouter();

    const { query: { id } } = router;


    /* const tt = newID?.replace(/.{3}/g, '$&/') ; */

    const newID = id?.toString().slice(0, 3).slice(3, 7).slice(7, 11);
    const part1 = newID?.slice(0, 3)
    const part2 = newID?.slice(3, 7);
    const part3 = newID?.slice(7, 11);

    const certID = `${part1}/${part2}/${part3}`

    
    const verifyID = async () => {
        try {
            const response = await axios.post('http://localhost:5000/certificate/verify', { certificateID: certID});
            const { message } = response.data;
            setMsg(message);
            setModal(true)
            console.log(message);
            
        } catch (error: any) {
            setMsg(error.response.data);
            setModal(true)
            console.log(error.response.data);
            
        }
    }

    useEffect(() => {
       /*  setCertificateID(`${part1}/${part2}/${part3}`); */
        verifyID();
    }, [])

    return (
        <>
            <Head>
                <title>Verify Cetificate on the go</title>
                <meta name="description" content="Verify certificate on the go " />
                <meta name="keywords" content="Orisfina, Orisfina computer institute, computer schools in Auchi , Web development training, bootcamp in edo state, learn web development, learn graphic design, learn app development, coding school, web development school in nigeria, web design school, web development company, free web development training,computer training school in edo state, computer schools in Auchi Edo state, Edo State, learn how to create a website as a begineer, website design company in Auchi Edo State, top web design schools in Edo State Nigeria, web designers in Nigeria, coding bootcamp in Nigeria" />

            </Head>
            <NavBar />
            <SlideshowShort title='Verify Certificate' color1='Input the Certificate ID' />

            {modal && <div className="modal">
                <h2 className='tertiary_text'>{msg}</h2>
                <div><a href="/">Return Home</a></div>
            </div>}
            <Footer />
        </>
    )
}

export default index