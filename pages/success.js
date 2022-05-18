import Button from '../components/Button'

const success = () => {
  return (
    <>
   
        <div className='container-large success'>
            <h2 className='primary-text t-center pb-s'>Registration Successful !</h2>
            <p className="t-center">
                Thank you so much for taking out time to fill the form. We sincerely appreciate you desire to kickstart your career. Our Team will reach out to you regarding the next steps of your Application.
                Feel free to contact us for further information / Clarification
            </p>
            <p className="t-center">Welcome to Orisfina Computer Institute.</p>
            <h4>We love you!</h4>
            <Button cName='btn blog_btn inline-block center' link='/'>Return Home</Button>
        </div>
    </>
    
  )
}

export default success