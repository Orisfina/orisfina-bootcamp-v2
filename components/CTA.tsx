import Button from './Button'

export default function CTA() {
  return (
    <div className="apply-now">
      <div className="z-indez-high">
        <h2>What are you still waiting for?</h2>
        <p>Application for our 12-weeks bootcamp for all courses starting September 2023 is now open</p>
        <Button cName='btn blog_btn inline-block' link='/register'>Enroll Now</Button>
      </div>
      <div className="bg-overlay"></div>
    </div>
  )
}