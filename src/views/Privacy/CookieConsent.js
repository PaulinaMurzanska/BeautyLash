import React from 'react'
import CookieConsent from 'react-cookie-consent';

const CookieConsentCustom = () => {

    return (
        <CookieConsent
        debug={true}
        buttonText='Akceptuję'
        style={{
            fontSize: '1.2rem',
            backgroundColor: 'lightgrey',
            color: 'black',
        }}
        buttonStyle={{
            backgroundColor: '#e0c88a',
            color: 'grey',
            borderRadius: '4px',
            width: '100px',
            height: '40px',
            border: '1px solid grey',
            fontSize: '1.6rem',
        }}
        hideOnAccept={true}
    >
        W ramach naszej witryny stosujemy pliki cookies w celu
        świadczenia Państwu usług na najwyższym poziomie, w tym w
        sposób dostosowany do indywidualnych potrzeb. Korzystanie z
        witryny bez zmiany ustawień dotyczących cookies oznacza, że
        będą one zamieszczane w Państwa urządzeniu końcowym. Możecie
        Państwo dokonać w każdym czasie zmiany ustawień dotyczących
        cookies. Więcej szczegółów w naszej.
        <a href='/polityka_prywatnosci'>Polityce cookies</a>
    </CookieConsent>
    )
}

export default CookieConsentCustom
