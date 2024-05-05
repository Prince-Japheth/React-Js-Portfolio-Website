import React from 'react'
import '../App.css';

const Form = () => {
    return (
        <div className="container">
            <h1 className='h1'>Contact</h1>
            <hr className='hr' />



            <iframe style={styles.iframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.83849534589!2d7.449868049999999!3d9.024256000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1713519230507!5m2!1sen!2sng" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>

            <h2 className='h2' style={styles.h2}>Contact Form</h2>

            <div classname="input-wrapper" style={styles.inputWrapper}>
                <input style={styles.input} type="text" name="fullname" classname="form-input" placeholder="Full name" required data-form-input />

                <input style={styles.input} type="email" name="email" classname="form-input" placeholder="Email address" required data-form-input />
            </div>

            <textarea style={styles.textArea} name="message" classname="form-input" placeholder="Your Message" required data-form-input></textarea>

            <div className="boxBorder" style={styles.boxBorder}>
                <div className="innerBox" style={styles.innerBox}>
                    <i style={styles.i} className="fa fa-paper-plane"></i> Send Message
                </div>
            </div>
            <br />
        </div>
    )
}

const styles = {
    iframe: {
        height: 400,
        width: '100%',
        borderRadius: '20px',
        filter: 'grayscale(1) invert(1)',
        border: 0,
    },
    h2: {
        margin: '25px 0'
    },
    input: {
        padding: '15px',
        width: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '13px',
        border: '1px solid #383838',
    },
    inputWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        gap: '20px',
        marginBottom: '30px',
    },
    textArea: {
        height: '140px',
        padding: '10px',
        width: '98%',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '13px',
        border: '1px solid #383838',
        color: 'white',
        textAlign: '',
    },

    boxBorder: {
        cursor: 'pointer',
        marginTop: '15px',
        marginLeft: 'auto',
    },
    i: {
        marginRight: '10px',
    },
}

export default Form;