import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Blog.module.css'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Head from 'next/head'


const backendDevelopment:NextPage = () => {
  return (
    <>
    <Head>
        <title>How to become a backend Developer as a beginner | Orisfina Bootcamp</title>
        <meta name="description" content="Backend developers are one of the most sort people in the world with lots of job opportunities. This guide covers everything you need to know about backend developers inorder to get started" />
        <meta name="keywords" content="how to become a backend developer,how to become a good backend developer,what backend developer do, how to become a backend developer in 2022,how to be a better backend developer, what to learn to be a backend developer, what to learn to become a backend developer,what is the work of backend developer,backend development, backend developer " />
        
    </Head>
        <NavBar />
        <main>
            <article>
               <header className={styles.titleHeader}>
                <h1 className={styles.title}> How to become a backend developer from scratch - A step by step guide</h1>
                    <p className={styles.articleDetails}>
                        <span>By <Link href='https://joshuaoyewole.com.ng'><a className={`${styles.posterName} ${styles.posterlink}`}>Joshua Oyewole</a></Link> || Posted on 7 May, 2022</span>
                    </p>
               </header>
            <div className={styles.container}>
            <p className={styles.paragraph}>
                Do you know you can become a backend developer today without a formal Computer Science degree with the help of coding bootcamps?
                To become sucessful in backend development, it requires the knowledge of a programming language, understanding of algorithm, system optimization, database security and lots more.
            </p>
            <h3 className={styles.tertiaryHeader} >
                Who is a Backend developer? 
            </h3>
            <p className={styles.paragraph}>
                In a resturant, you have the waiters and the cooks.
                The waiters (API - Application Programming Interface) which you usually see when you visit a resturant are always responsible for taking your orders and sending to the cooks (backend) which in turn prepare your response (Food in this case) and send your request back to the waiters who finally delivers your order to you.
                The backend are usually behinde the scenes but are a very core part of the organization as such becoming a backend developer is a rewarding decision to take.
            </p>
            <p className={styles.paragraph}>
                The Backend developers are rarely seen or communicated to by the user even though every data recieved by a user are delivered via their unseen work and time spent architecting the whole system.
            </p>
            <p className={styles.paragraph}>
                The good thing about becoming a backend developer is, it is achievable as long as you are dedicated and passionate about it.
                This article gives you a step by step guide on what backend development entails and how to get started with a complete roadmap from beginner to advanced.
            </p>
                <h2 className={styles.secondaryHeader}>What is Backend Development?</h2>
                <p className={styles.paragraph}>
                    Backend development or Server-side development is an aspect of software engineering that deals with building of codes that enables a database to efficiently communicate with an application.
                    They are responsible for server-side application logic and integration of the frontend developers work thereby creating a smooth communication channel between the frontend interface and the backend side.
                    
                </p>
                <p className={styles.paragraph}>
                    While frontend developers are responsible for designing layouts that a user can see and interacts with, a Backend developer is usually in charge of <b>things that happens behinde the scenes of an application</b> such as how datas which are collected via forms are stored, authentication of users and lots more. 
                </p>
                <p className={styles.paragraph}>
                    They are responsible for creating and managing of database, servers, and the security of an application.
                </p>
                
                <h2  className={styles.secondaryHeader}>Are there Job Opportunity in this path?</h2>
                <p className={styles.paragraph}>
                    It is estimated that over 2 million websites are created yearly.
                    This has increased the surge for web developer by over 3% yearly. The more websites are needed, the higher the needs for backend developers who will oversee the architectural process of your database design and servers operations.
                </p>
                <p className={styles.paragraph}>
                    Therefore, being a backend developers presents you with a whole lots of Job opportunities.
                    You can choose from being a <b>freelencer developer</b> and dictates your own terms and conditions.
                </p>
                <p className={styles.paragraph}>
                    Being a backend developer comes with a whole lots of Job opportunities. <abbr title="Information Technology">I.T</abbr> is a growing field and this is only just the beginning.
                </p>
            
                <h2 className={styles.secondaryHeader}>
                    How much does a Backend developer earn?
                </h2 >
                <p className={styles.paragraph}>
                    According to data gathered by <Link href='http://www.salaryexplorer.com/salary-survey.php?loc=158&loctype=1&job=10390&jobtype=3'>
                        <a className={styles.link} target='_blank'>
                              salaryexplorer 
                        </a>
                    </Link> which was derived from both employer job postings and third party data sources.
                    A Backend developer in Nigeria earns between <b>245,000 NGN</b> to <b>600,000 NGN </b> upwards depending on your level of experience.
                </p>
                <h3 className={styles.tertiaryHeader}>
                    What is the Average Salary of a backend Developer in Nigeria?
                </h3 >
                <p className={styles.paragraph}>
                    Below is a table showing the average salary of a Backend developer in Nigeria based on his/her years of experience.
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
                            <td className={styles.tableData}>245,000 NGN +</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>2</td>
                            <td className={styles.tableData}>2-3 (Junior-level)</td>
                            <td className={styles.tableData}>350,000 NGN +</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>3</td>
                            <td className={styles.tableData}>3-5 (Mid-level Developer)</td>
                            <td className={styles.tableData}>450,000 NGN + </td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>4</td>
                            <td className={styles.tableData}>5years and above (Senior level)</td>
                            <td className={styles.tableData}>700,000 NGN + </td>
                        </tr>
                    </tbody>
                </table>

                <h3 className={styles.tertiaryHeader} >
                   What is the Average Salary of a backend developer in Europe?
                </h3 >
                <p className={`${styles.paragraph} pb-m`}>
                    Below is a table showing the average salary of a backend developer in Europe based on his/her years of experience.
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
                            <td className={styles.tableData}>65,000 USD +</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>2</td>
                            <td className={styles.tableData}>2-3 (Junior-level)</td>
                            <td className={styles.tableData}>80,000 USD +</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>3</td>
                            <td className={styles.tableData}>3-5 (Mid-level Developer)</td>
                            <td className={styles.tableData}>120,000 USD + </td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>4</td>
                            <td className={styles.tableData}>5years and above (Senior level)</td>
                            <td className={styles.tableData}>150,000 USD + </td>
                        </tr>
                    </tbody>
                </table>
                <p className={styles.paragraph}>
                    The above ranges may differ based on several reasons such as company size, company reputation etc.
                    The big players company tends to follow the standard salary pay while others may not.
                </p>
                <p className={styles.paragraph}>
                    It is advisable to learn how to negotiate during this phase of your job hunt. You can go through our step by step guide on <Link href='#how-to-negotiate-salary-when-interviewing-a-company'>
                        <a className={`${styles.link} disabled`}target='_blank
                        '>
                        how to negotiate your salary 
                        </a>
                    </Link>  when interviewing with a company.
                    Negotiation is a skill which must be learnt inorder to get a better and standard salary during your job interview.
                </p>
                <h2 className={styles.tertiaryHeader}>
                    Who is an Entry-level developer?
                </h2 >
                <p className={styles.paragraph}>
                    An Entry-level developer can be referred to a person who is just starting his/her career with little knownledge about some programming language and has about 2-3 projects tied to their portfolio.
                    An entry level Backend developer should be able to understand how basic comcepts about servers, database design, how to connect to a database and querying of datas.
                </p>
                <p className={styles.paragraph}>
                    They are basically self-taught developers who have taken out time to study certain concepts and love to progress further with their career.
                    This sets of developers are usually placed under strict supervision of Senior developers who guide them on their day to day task and comes in whenever they are stock with problems.
                </p>
                <p className={styles.paragraph}>
                    Before you can apply for entry-level positions, you should have a basic understanding of how to work with a backend programming language.
                    There are several <Link href='/#'>
                        <a className={styles.link} target='_blank'>
                        free courses 
                        </a>
                    </Link> available on youtube to get you started while if you learn better having a guidiance then you can <Link href='/register'>
                        <a className={styles.link} target='_blank'>
                        register 
                        </a>
                    </Link> to our bootcamps as we offer both Onsite and Online training to get you started from scratch.
                </p>
                <h2 className={styles.tertiaryHeader}>
                    Who is a Junior-level /mid-senior developer?
                </h2 >
                <p className={styles.paragraph}>
                    A junior developer can be referred to a person with 2 or more years of experience tied to his/her resume. He/she is familiar with one programming language and his able to implement a semi-stable solution to a problem.
                    A junior developer have worked with some frameworks, he/she can query data from a Database or API.
                </p>
                <p className={styles.paragraph}>
                    Despite their passion and unending desire to grow their career, they are still under close supervision of a senior developer who checkmate them time to time. 
                </p>
                <h2 className={styles.tertiaryHeader}>
                    Who is a Senior-level developer?
                </h2 >
                <p className={styles.paragraph}>
                    A Senior developer is a developer with a deep knownledge, with years of experiences working with a tool or a programming language and is specialize in solving problems. 
                </p>
                <p className={styles.paragraph}>
                    This enables them to be able to mentor younger developers.
                    Their experience and knownledge may even extend to help with marketing and overall growth of the business.
                </p>    
                    
               
                <p className={styles.paragraph}>
                    To cap it all, a Senior developer is a problem solver who forsee issues and resolve it before it happens. A Senior developer thinks in advance about a system bottleneck, and keeps in mind vulnerabilities and problems caused by the improper use of tools.
                    They lead a project and makes well-reasoned decisions about software design and implementation based on the knowledge of the best practices in the field.
                </p>
                <h2 className={styles.secondaryHeader}>
                    What do I need to know to be a Backend Developer?
                </h2>
                <p className={styles.paragraph}>
                    Becoming a backend developer requires the basic knowledge of:
                </p>
                <ol className={`{styles.paragraph} pl-s`}>
                    <li className={styles.paragraph}>
                        A Backend programming language (e.g PHP, Python, C++) or runtime environment (NodeJs) used in communicating with database and others.
                    </li>
                    <li className={styles.paragraph}>
                        Basics of Database - (Relational database such as MySQL) or Non-relational Database (MongoDB)
                    </li>
                    <li className={styles.paragraph}>
                        Security / Authentication 
                    </li>
                    <li className={styles.paragraph}>
                        Server
                    </li>
                    <li className={styles.paragraph}>
                        API
                    </li>
                    <li className={styles.paragraph}>
                        Data structure and Algorithm
                    </li>
                </ol>
                <h3 className={styles.tertiaryHeader} >
                    Backend Programming Language
                </h3>
                <p className={styles.paragraph}>
                   You communicate with your friends and loved ones with the help of a language. You also need the knowledge of a language to communicate within the backend of your software.
                   There are several scripting language which you can learn but in this guide, we will be guiding you on which path to take based on your background and popular demands in the industry.
                </p>
                <h4>
                    How do I choose a Backend Language?
                </h4>
                <p className={styles.paragraph}>
                    Before jumping into learning a language based on its popularity or simplicity, it advisable to ask yourself the following questions:
                </p>
                <ol className={`{styles.paragraph} pl-s`}>
                    <li className={styles.paragraph}>
                        Is there a demand of this language in my area?
                    </li>
                    <p className={styles.paragraph}>
                        If the purpose of you learning is to get a job then you need to carefully research if the companies around your area are in need of this skill. 
                        You need to learn a language that is highly in demand. You dont want to be stuck with a language which will be difficult to land a job after spending several months learning.
                    </p>
                    
                    <li className={styles.paragraph}>
                        Do I have knownledge of any scripting language (like javascript)?
                    </li>
                    <p className={styles.paragraph}>
                        If you have previous knowledge on scripting language like Javascript then you should learn NodeJs as it is a runtime environment for backend development. It is built on Javascript and as such it will be very easy for you to get along easily.
                    </p>
                    <li className={styles.paragraph}>
                        Security / Authentication 
                    </li>
                    <li className={styles.paragraph}>
                        Server
                    </li>
                    <li className={styles.paragraph}>
                        API
                    </li>
                    <li className={styles.paragraph}>
                        Data structure and Algorithm
                    </li>
                </ol>
               </div> 
        </article>
        <h2 className={`${styles.secondaryHeader} ${styles.center} ${styles.mbl}`}>
            Related Article
        </h2>
        <div className={`${styles.center} ${styles.mbl}`}>
            <Link href='/blog/how-to-become-a-frontend-developer-as-a-beginner' >
            <a className={`${styles.link} ${styles.center}`}>
                How to become a front-end Developer - A beginner guide
            </a>
        </Link>
        </div>
    </main>
    <Footer />
    </>
  )
}
export default backendDevelopment