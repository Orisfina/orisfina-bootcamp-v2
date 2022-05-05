import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Blog.module.css'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Head from 'next/head'


const frontendDevelopment:NextPage = () => {
  return (
    <>
    <Head>
        <title>Roadmoap to becoming a Front-end Web Developer</title>
        <meta name="description" content="Orisfina is a Bootcamp in Auchi offers front-end development courses which will get you started" />
        <meta name="keywords" content="Orisfina, Orisfina computer institute, Auchi nigeria, Web development training, bootcamp in edo state, learn web development, coding school, web development school in nigeria, web design school, web development company, free web development training,computer training school in edo state, computer schools in Auchi Edo state, Edo State, learn how to create a website as a begineer, website design company in Auchi Edo State, top web design schools in Edo State Nigeria, web designers in Nigeria, front end developer salary in nigeria, how to become a front-end developer,how to become a front end developer in 3 months,how to become a frontend developer ,front end developer jobs in nigeria,why become a front end developer,can i become a front end developer,what to learn to become a front end developer,what is needed to become a front end developer,why become a front end developer " />
        
    </Head>
    
        <NavBar />
        <main>
            <article>
               <header className={styles.titleHeader}>
                <h1 className={styles.title}>Beginners guide on how to become a Frontend web developer from scratch</h1>
                    <p className={styles.articleDetails}>
                        <span>By <Link href='https://joshuaoyewole.com.ng'><a className={`${styles.posterName} ${styles.posterlink}`}>Joshua Oyewole</a></Link> || Posted on 5 May, 2022</span>
                    </p>
               </header>
            <div className={styles.container}>
                <h2 className={styles.secondaryHeader}>What is Front-end Web Developer?</h2>
                <p className={styles.paragraph}>
                    Front-end Development or Client-side Development is an aspect of Web Development that deals with the management of what and how a user interacts with a website.
                    A Frontend developer is saddled with the responsibilities of coverting a UX Design into a programming language (mostly HTML) that can be compiled and understood by a browser.
                </p>
                <p className={styles.paragraph}>
                    You browse the internet using a web browser (i.e Google Chrome, Mozilla FireFox, Opera mini etc.)
                    These browsers understands HTML language and therefore converts the codes (syntax) written using HTML or any other structured language into what you see on the web page.
                </p>
                <p className={styles.paragraph}>
                    <abbr title="HyperText Markup Language">HTML </abbr> is a structured language of the browser. HTML is a markup language used to structure the layout of a web page.
                </p>
                <p className={`${styles.paragraph} my-s`}>
                    <b>NOTE: </b> <i>
                        HTML is not a programming language as often said by people. 
                        It is a Markup language used to structure the layout(how a web page should look) of a webpage. It defines how contents should be rendered on a webpage using its syntax and its mostly combined with other programming language and styling languages like CSS inorder to produced a dynamic and beautiful website
                    </i>
                </p>
                <p className={styles.paragraph}>
                    Literally, everything you see or interact with when you visit a website is designed by a Front-end Web Developer. 
                    The Layout of the webpage, the images, the links, beautiful colors and more are all the work of a front-end web developer.
                </p>
                
                <h2  className={styles.secondaryHeader}>Are there Job Opportunity in this path?</h2>
                <p className={styles.paragraph}>
                    It is estimated that over 2 million + websites are created yearly.
                    This has increased the surge for web developer by over 3% yearly. The more websites are created, the higher the needs for front-end developers who will bring the designs of your website into Limelight.
                </p>
                <p className={styles.paragraph}>
                    Therefore, being a front-end developers presents you with a whole lots of Job opportunities.
                    You can choose from being a <b>freelencer web developer</b> and dictates your own terms as regards to : 
                </p>
                <ul className={styles.paragraph}>
                    <li>When to work</li>
                    <li>Where to work (Home, office, or even in a bar</li>
                    <li>How much you choose to charge</li>
                    <li>You have alot of freedom as you are not restricted to a particular location</li>
                </ul>
                <p className={styles.paragraph}>
                    If you are lover of 9 -5 Job or a team kind, you can decide to apply to companies interested in hiring you and grow our career.
                </p>
                <p className={styles.paragraph}>
                    Being a front-end web developer comes with a whole lots of Job opportunities. <abbr title="Information Technology">I.T</abbr> is a growing field and this is only just the beginner.
                </p>
                   
              
                <h2 className={styles.secondaryHeader}>
                    How Much do a Frontend Web Developer earn?
                </h2 >
                <p className={styles.paragraph}>
                    According to data gathered by <Link href='http://www.salaryexplorer.com/salary-survey.php?loc=158&loctype=1&job=10390&jobtype=3'>
                        <a className={styles.link} target='_blank'>
                              salaryexplorer 
                        </a>
                    </Link> which was derived from both employer job postings and third party data sources.
                    A front-end developer in Nigeria earns between <b>145,000 NGN</b> to <b>500,000 NGN </b> upwards depending on your level of experience.
                </p>
                <h3 className={styles.tertiaryHeader}>
                    What is the Average Salary of a Front-end Web Developer in Nigeria?
                </h3 >
                <p className={styles.paragraph}>
                    Below is a table showing the average salary of a front-end web developer in Nigeria based on his/her years of experience.
                </p>
                <table className={styles.table}>
                    <thead className={styles.tableHead}>
                    <tr className='pt-m'>
                            <th>S/N</th>
                            <th>Years of Experience</th>
                            <th>Salary Range</th>
                        </tr>
                    </thead>  
                    <tbody>
                        <tr>
                            <td className={styles.tableData}>1</td>
                            <td className={styles.tableData}>0-1 (Entry level)</td>
                            <td className={styles.tableData}>145,000 NGN +</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>2</td>
                            <td className={styles.tableData}>2-3 (Junior-level)</td>
                            <td className={styles.tableData}>250,000 NGN +</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>3</td>
                            <td className={styles.tableData}>3-5 (Senior level)</td>
                            <td className={styles.tableData}>350,000 NGN + </td>
                        </tr>
                    </tbody>
                </table>
                <p className={styles.paragraph}>
                    The above ranges may differ based on several reasons such as company size, reputation etc.
                    The big players company tends to follow the standard while startups most likey always play to the naive of most entry level candidates.
                </p>
                <p className={styles.paragraph}>
                    It is advisable to lean how to negotiate during this phase of your job hunt. You can go through our step by step guide on <Link href='/'>
                        <a className={styles.link} target='_blank'>
                        how to negotiate your salary 
                        </a>
                    </Link>  when interviewing with a company.
                    Negotiation is a skill which must be learn inorder to get a better and standard salary during your job interview.
                </p>
                <h2 className={styles.tertiaryHeader}>
                    Who is an entry-level developer?
                </h2 >
                <p className={styles.paragraph}>

                </p>
                <p className={styles.paragraph}>

                </p>
                <h2 className={styles.tertiaryHeader}>
                    Who is an junior-level /mid-senior developer?
                </h2 >
                <p className={styles.paragraph}>

                </p>
                <p className={styles.paragraph}>

                </p>
                <h2 className={styles.tertiaryHeader}>
                    Who is an senior-level developer?
                </h2 >
                <p className={styles.paragraph}>

                </p>
                <p className={styles.paragraph}>

                </p>
                <h2 className={styles.secondaryHeader}>
                    What are the Technologies needed to be a Frontend Developer?
                </h2>
                <p className={styles.paragraph}>

                </p>
                <h2 className={styles.secondaryHeader}>
                    Beginners Stage
                </h2>
                <h3 className={styles.tertiaryHeader}>
                    HTML5
                </h3 >
                <h3 className={styles.tertiaryHeader}>
                    CSS3
                </h3 >
                <h3 className={styles.tertiaryHeader}>
                    Javascript
                </h3 >
                <h2 className={styles.secondaryHeader}>
                    Intermediate- level
                </h2>
                <h3 className={styles.tertiaryHeader}>
                    CSS Libraries / Framework
                </h3 >
                <h3 className={styles.tertiaryHeader}>
                    Git / GitHub
                </h3 >
                <h3 className={styles.tertiaryHeader}>
                    ReactJs 
                </h3 >
                <h3 className={styles.tertiaryHeader}>
                    Redux
                </h3 >
                <h3 className={styles.tertiaryHeader}>
                    Consuming REST API
                </h3 >
                <h2 className={styles.secondaryHeader}>
                    Advanced Stage
                </h2>
                <h3 className={styles.tertiaryHeader}>
                    Typescript
                </h3 >
                <h3 className={styles.tertiaryHeader}>
                    NextJs
                </h3 >
                <h3 className={styles.tertiaryHeader}>
                    GraphQL
                </h3 >
                <h2 className={styles.secondaryHeader}>
                    How Orisfina Computer Institute can help you become a Frontend Developer with our structured and Updated Syllabus
                </h2>
                <p className={styles.paragraph}>

                </p>
                <h2 className={styles.secondaryHeader}>
                    How much does our Frontend Development course cost?
                </h2>
                <p className={styles.paragraph}>

                </p>
        
            </div>
        </article>
    </main>
    <Footer />
    </>
  )
}
export default frontendDevelopment