import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '../../../components/Footer'
import NavBar from '../../../components/NavBar'
import SlideshowShort from '../../../components/SlideshowShort'
import axios from "axios"

const Index: NextPage = () => {
    const [certificateID, setCertificateID] = useState<string>("");
    const [showForm, setShowForm] = useState(true);
    const [modal, setModal] = useState(false);
    const [msg, setMsg] = useState("");
   

    const verifyResult = async () => {
        try {
            const response = await axios.post('http://localhost:5000/certificate/verify', { certificateID: certificateID});
            const { message } = response.data;
            setMsg(message);
            setModal(true)
            
        } catch (error: any) {
            setMsg(error.response.data);
            setModal(true)
            console.log(error.response.data);
            
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        verifyResult();
        setShowForm(false);
        setModal(true)
    }

    return (
        <>
            <Head>
                <title>Verify Cetificate on the go</title>
                <meta name="description" content="Verify certificate on the go " />
                <meta name="keywords" content="Orisfina, Orisfina computer institute, computer schools in Auchi , Web development training, bootcamp in edo state, learn web development, learn graphic design, learn app development, coding school, web development school in nigeria, web design school, web development company, free web development training,computer training school in edo state, computer schools in Auchi Edo state, Edo State, learn how to create a website as a begineer, website design company in Auchi Edo State, top web design schools in Edo State Nigeria, web designers in Nigeria, coding bootcamp in Nigeria" />

            </Head>
            <NavBar />
            <SlideshowShort title='Verify Certificate' color1='Input the Certificate ID' />

            {showForm && <form method="post" name="verify Certificate" autoComplete='off' onSubmit={handleSubmit} className='verifyForm'>
                <div className='form-group'>
                    <label htmlFor='certificateID' className='form-label'> CERTIFICATE ID </label>
                    <input
                        type='text'
                        id='id'
                        name='id'
                        className='group-field'
                        data-type="text"
                        value={certificateID}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCertificateID(e.target.value)}
                        required
                    />
                </div>

                <div className='form-group'>
                    <input type='submit' className='btn btn_signup mt-m' value='Verify' />
                </div>
            </form>}
            {modal && <div className="modal">
                <h2 className='tertiary_text'>{msg}</h2>
                <div><Link href="/">Return Home</Link></div>
            </div>}
            <Footer />
        </>
    )
}

export default Index