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
        <meta name="keywords" content="Orisfina, Orisfina computer institute, Auchi nigeria, Web development training, bootcamp in edo state, learn web development, coding school, web development school in nigeria, web design school, web development company, free web development training,computer training school in edo state, computer schools in Auchi Edo state, Edo State, learn how to create a website as a begineer, website design company in Auchi Edo State, top web design schools in Edo State Nigeria, web designers in Nigeria, front end developer salary in nigeria, how to become a front-end developer,how to become a front end developer in 3 months,how to become a frontend developer ,front end developer jobs in nigeria,why become a front-end developer,can i become a front-end developer,what to learn to become a front-end developer,what is needed to become a front-end developer,why become a front-end developer, frontend developers, frontend development, frontend developers, skill front end developer, frontend development " />
        
    </Head>
    
        <NavBar />
        <main>
            <article>
               <header className={styles.titleHeader}>
                <h1 className={styles.title}> How to become a Front-end web developer from scratch - A step by step guide</h1>
                    <p className={styles.articleDetails}>
                        <span>By <Link href='https://joshuaoyewole.com.ng'><a className={`${styles.posterName} ${styles.posterlink}`}>Joshua Oyewole</a></Link> || Posted on 7 May, 2022</span>
                    </p>
               </header>
            <div className={styles.container}>
                <h2 className={styles.secondaryHeader}>What is Front-end Web Development?</h2>
                <p className={styles.paragraph}>
                    Front-end Development or Client-side Development is an aspect of Web Development that deals with the design and structuring of a webpage.
                    A Frontend developer is saddled with the responsibilities of converting a UI Design into a webpage or application using a programming language (mostly HTML,CSS and JS) that can be compiled and understood by a browser.
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
                            <td className={styles.tableData}>3-5 (Mid-level Developer)</td>
                            <td className={styles.tableData}>350,000 NGN + </td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>4</td>
                            <td className={styles.tableData}>5years and above (Senior level)</td>
                            <td className={styles.tableData}>500,000 NGN + </td>
                        </tr>
                    </tbody>
                </table>

                <h3 className={styles.tertiaryHeader} >
                   What is the Average Salary of a front-end web developer in europe
                </h3 >
                <p className={`${styles.paragraph} pb-m`}>
                    Below is a table showing the average salary of a front-end web developer in Europe based on his/her years of experience.
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
                            <td className={styles.tableData}>55,000 USD +</td>
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
                    The above ranges may differ based on several reasons such as company size, reputation etc.
                    The big players company tends to follow the standard while startups companies most likey always play to the naive of most entry level candidates.
                </p>
                <p className={styles.paragraph}>
                    It is advisable to learn how to negotiate during this phase of your job hunt. You can go through our step by step guide on <Link href='/'>
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
                    An entry-level developer can be referred to a person who is just starting his/her career with little knownledge about some programming language and has about 2-3 projects tied to their portfolio.
                    An entry level developer should be able to design webpages using HTML5, CSS3, and Javascript.
                </p>
                <p className={styles.paragraph}>
                    They are basically self-taught developers who have taken out time to study certain concepts and love to progress further with their career.
                    This sets of developers are usually placed under strict supervision of Senior developers who guide them on their day to day task and comes in whenever they are stock with problems.
                </p>
                <p className={styles.paragraph}>
                    Before you can apply for entry-level positions, you should have a basic understanding of how to structure a page using a programming language.
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
                    Who is an junior-level /mid-senior developer?
                </h2 >
                <p className={styles.paragraph}>
                    A junior developer can be referred to a person with 2 or more years of experience tied to his/her resume. He/she is familiar with one programming language and his able to implement a semi-stable solution to a problem.
                    A junior developer have worked with some frameworks, he/she can query data from a Database or API.
                </p>
                <p className={styles.paragraph}>
                    Despite their passion and unending desire to grow their career, they are still under close supervision of a senior developer who checkmate them time to time. 
                </p>
                <h2 className={styles.tertiaryHeader}>
                    Who is an senior-level developer?
                </h2 >
                <p className={styles.paragraph}>
                    A senior developer is a developer with a deep knownledge, with years of experiences working with a tool or a programming language and is specialize in solving problems. 
                </p>
                <p className={styles.paragraph}>
                    This enables them to be able to mentor younger developers.
                    Their experience and knownledge may even extend to help with marketing and overall growth of the business.
                </p>    
                    
               
                <p className={styles.paragraph}>
                    To cap it all, a senior developer is a problem solver who forsee issues and resolve it before it happens. A senior developer thinks in advance about a system bottleneck, and keeps in mind vulnerabilities and problems caused by the improper use of tools.
                    They lead a project and makes well-reasoned decisions about software design and implementation based on the knowledge of the best practices in the field.
                </p>
                <h2 className={styles.secondaryHeader}>
                    What are the Technologies needed to be a Frontend Developer?
                </h2>
                <p className={styles.paragraph}>
                    Becoming a front-end developer requires the basic knowledge of some tools and Technologies which ranges from <b>HTML, CSS and Javascript.</b> They are often referred to as the language of the web.
                </p>
                <p className={styles.paragraph}>
                    Front-end developers are responsible for the implementation of designs and as such needs to be able to know how to structure layouts of web apps using a markup language like HTML.
                </p>
                <p className={styles.paragraph}>
                    To be a front-end developer, you also need to learn how to style your application using a styling language such as CSS.
                    Javascript is also needed for manipulating how your components such as button, navbar etc reacts to users actions. 
                </p>
                <p className={styles.paragraph}>
                    The above languages (HTML,CSS and JS) are the most needed language as every other frameworks or libraries which you will come across in your career are built on these.
                </p>
                <p className={styles.paragraph}>
                    A front-end developers needs to know how to collaborate with other developers when working with a team of other developers.
                    As such, the need to understand a version control technologies such as <b>Git</b> is necessary also.
                </p>
                <p className={styles.paragraph}>
                    <b>Below is a summary of technologies broken down into 3 stages.</b>
                </p>
                <p className={styles.paragraph}>
                    The purpose of this guide is to enable you know what is required as you begin your learning quest and also as you progress in your career.
                </p>
                <h2 className={styles.secondaryHeader}>
                    Beginners Stage
                </h2>
                <h3 className={styles.tertiaryHeader}>
                    HTML5
                </h3 >
                <p className={styles.paragraph}>
                    HTML (HyperText Markup Language) is a markup language used to structure a web page and its content. Almost every website on the internet is structured using HTML.
                    It comprises of  elements which consists of opening tag and a closing tag
                </p>
                <Image
                    src='/../public/images/tags.jpg'
                    height={250}
                    width={600}
                    alt='html elements consist of opening and closing tags'
                />
                <p className={styles.paragraph}>
                    Within a week or two of learning HTML, you should be comfortable with it doing basic content layout such as heading, paragraphs, linking, adding images to your page and lots more.
                </p>
                {/* <p className={styles.paragraph}>
                    You can checkout my HTML guide by downloading my <Link href='#'>
                        <a className={styles.link} target='_blank'>
                        free book on HTML 
                        </a>
                    </Link>
                </p> */}
                <h3 className={styles.tertiaryHeader}>
                    CSS3
                </h3 >
                <p className={styles.paragraph}>
                    CSS known as &rdquo;Cascading stylesheet&rdquo; is used to style your webpage. CSS is used to bring the beauty of a webpage. I often refer to it as &rdquo;flesh used to cover a skeleton&rdquo; thereby bringing the beauty.
                </p>
                <p className={styles.paragraph}>
                    Imagine how you will look like without the skin in your body which covers your bone. I guess you would look more beautiful without it. lolz
                </p>
                <p className={styles.paragraph}>
                    The colors, background-color, positioning and more are added with the help of your CSS.
                    CSS is a very important language you need to learn on your path to becoming a front-end developer.
                </p>
                <h3 className={styles.tertiaryHeader}>
                    Javascript
                </h3 >
                <p className={styles.paragraph}>
                    Javascript is the bone behind everything on your webpage.
                    It is used to manipulate the DOM (Document object ) of a webpage.
                    The way your components reacts to certain actions are usually done using Javascript as it makes your webpage more dynamic.
                </p>
                <p className={styles.paragraph}>
                    Javascript is a very powerful language used both creating the backend (server-side) of the application and also the front-end (Client side) of your applications.
                </p>
                <h2 className={styles.secondaryHeader}>
                    Intermediate- level
                </h2>
                <p className={styles.paragraph}>
                    At this stage you should have built one or two apps and comfortable using the above languages to design, style and manipulate your webpages.
                </p>
                {/* <p className={styles.paragraph}>
                    Incase you are confuse on what and what to build, you can checkout my article on 
                    <Link href='#'>
                        <a className={styles.link} target='_blank'>
                        5 apps to build with HTML, CSS and Javascript as a beginner 
                        </a>
                    </Link>
                </p> */}
                <p className={styles.paragraph}>
                    Now you can start looking at some CSS frameworks / libraries to speed up your designs. This will increase your design speed by a large percent as you dont have to write every styles from scratch.
                </p>
                <p className={styles.paragraph}>
                    <b>NOTE:</b> <i>I strongly advice having a strong basic knowledge of CSS before diving into any of its libraries.</i>
                </p>
                <h3 className={styles.tertiaryHeader}>
                    CSS Libraries / Framework
                </h3 >
                <p className={styles.paragraph}>
                    Below is a list of some of the most on-demand CSS libraries currently in most job description.
                    A basic understanding of CSS will be enough to get you going with any of the CSS libraries
                </p>
                <ul>
                    <li><b>Bootstrap</b></li>
                        <p className={styles.paragraph}>
                            It is one of the most used CSS libraries in the world currently with over 500k forks on github.
                            It based on components based 
                        </p>
                    <li><b>TailwindCSS</b></li>
                        <p className={styles.paragraph}>
                            It is one of the most used CSS libraries in the world currently with over 500k forks on github.
                            It based on components based 
                        </p>
                    <li><b>MaterialUI</b></li>
                        <p className={styles.paragraph}>
                            It is one of the most used CSS libraries in the world currently with over 500k forks on github.
                            It based on components based 
                        </p>
                </ul>
                <h3 className={styles.tertiaryHeader}>
                    Git / GitHub
                </h3 >
                <p className={styles.paragraph}>
                    Git is a version control system used by developers and non-developer to collaborate and work on a project. 
                    While GitHub is an online repository where your local repository is pushed to.
                    Git is necessary inorder to work on a project with several team members.
                </p>
                <p className={styles.paragraph}>
                    Kindly take out time to watch this video on  <Link href='https://www.youtube.com/watch?v=SWYqp7iY_Tc'>
                         <a className={styles.link} target='_blank'>
                         how to get started with Git
                        </a>
                    </Link> 
                </p>
                <h3 className={styles.tertiaryHeader}>
                    ReactJs 
                </h3 >
                <p className={styles.paragraph}>
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
                </p>
                <p className={styles.paragraph}>
                    React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                </p>
                <p className={styles.paragraph}>
                    Kindly take out time to watch this video on  <Link href='https://www.youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A'>
                         <a className={styles.link} target='_blank'>
                         how to get started with React
                        </a>
                    </Link> 
                </p>
    
                <h2 className={styles.secondaryHeader}>
                    Advanced Stage
                </h2>
                <p className={styles.paragraph}>
                    At this stage you should be comfortable consuming API&rsquo; s and also familiar with Javascript libraries such as React/Redux.
                    You can proceed further by learning the following
                </p>
                
                <h3 className={styles.tertiaryHeader}>
                    Typescript
                </h3 >
                <p className={styles.paragraph}>
                    TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
                </p>
                <p className={styles.paragraph}>
                    TypeScript is a programming language developed and maintained by Microsoft. It is designed for the development of large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.
                </p>
                <p className={styles.paragraph}>
                    Kindly take out time to watch this video on  <Link href='https://www.youtube.com/playlist?list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK'>
                         <a className={styles.link} target='_blank'>
                         how to get started with Typescript
                        </a>
                    </Link> 
                </p>
                <p className={styles.paragraph}>
                Source: <Link href='https://en.wikipedia.org/wiki/TypeScript'>
                         <a className={styles.link} target='_blank'>
                         What is Typescript
                        </a>
                    </Link> 
                </p>
                 
                <h3 className={styles.tertiaryHeader}>
                    NextJs
                </h3 >
                <p className={styles.paragraph}>
                Next.js is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites. React documentation mentions Next.js among &rdquo;Recommended Toolchains&rdquo; advising it to developers as a solution when &rdquo;Building a server-rendered website with Node.js&rdquo;. Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server side.
                </p>
                <p className={styles.paragraph}>
                    Kindly take out time to watch this video on  <Link href='https://www.youtube.com/playlist?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH'>
                         <a className={styles.link} target='_blank'>
                         how to get started with NextJs
                        </a>
                    </Link> 
                </p>
                <p className={styles.paragraph}>
                Source: <Link href='https://en.wikipedia.org/wiki/Next.js'>
                         <a className={styles.link} target='_blank'>
                         What is NextJS
                        </a>
                    </Link> 
                </p>
                <h3 className={styles.tertiaryHeader}>
                    GraphQL
                </h3 >
                <p className={styles.paragraph}>
                GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015. 
                </p>
                <p className={styles.paragraph}>
                It provides an approach to developing web APIs and has been compared and contrasted with REST and other web service architectures. It allows clients to define the structure of the data required, and the same structure of the data is returned from the server, therefore preventing excessively large amounts of data from being returned. But this has implications for how effective web caching of query results can be
                </p>
                <p className={styles.paragraph}>
                    Kindly take out time to watch this video on  <Link href='https://www.youtube.com/watch?v=fVmQCnQ_EPs'>
                         <a className={styles.link} target='_blank'>
                         how to get started with NextJs
                        </a>
                    </Link> 
                </p>
                <p className={styles.paragraph}>
                Source: <Link href='https://en.wikipedia.org/wiki/Next.js'>
                         <a className={styles.link} target='_blank'>
                         What is GraphQL
                        </a>
                    </Link> 
                </p>
                <h2 className={styles.secondaryHeader}>
                    How can Orisfina Computer Institute help you become a Front-end Developer?
                </h2>
                <p className={styles.paragraph}>
                    <Link href='/about'>
                        <a className={styles.link} target='_blank'>
                        Orisfina Computer Institute 
                        </a>
                    </Link> is one of the leading web design bootcamp in Nigeria currently located in Auchi, Edo-state with a vision of spreading across the various cities of Nigeria and Africa inorder to equiped young and old with Technnological skills/knowledge in Web/App design.
                </p>
                <p className={styles.paragraph}>
                    Our front-end course is structured in a way to help an absolute beginner with no prior knowledge about the web get started.
                </p>
                <p className={styles.paragraph}>
                    Our students are introduced to the basics of the web such as how the internet works, what servers, ISP (Internet service providers) and Intenet protocols are.
                    After which they are taught about the channel communication between your browsers, ISP and the server all inorder to get a proper understanding of the web.
                </p>
                <p className={styles.paragraph}>
                    After the basics of how the internet works, they are introduced to HTML and how to structured their contents using the various HTML tags.
                    They are also taught CSS, Javascript, CSS libraries( TailwindCSS and MaterialUI), React. NextJs, Git and how to consume datas from an API.
                </p>
                <p className={styles.paragraph}>
                    You can checkout our <Link href='/about'>
                        <a className={styles.link} target='_blank'>
                        syllabus 
                        </a>
                    </Link> to get a detailed overview on what you will be learning via our online or onsite training.
                </p>
                    
                <h2 className={styles.secondaryHeader}>
                    Conclusion
                </h2>
                <p className={styles.paragraph}>
                    Website development is becoming one of the most demanding skill in this 21st century and as such starting a career now can be one of the best investments you can give to yourself.
                </p>
                <p className={styles.paragraph}>
                    According to projection, it is believe that more and more jobs will be created as new website and applications are been built on a daily basics. 
                </p>
                <p className={styles.paragraph}>
                    The need to maintain and upgrade will always increase the demands of a front-end developer as each year comes with various design trends.
                </p>
                <p className={styles.paragraph}>
                    It is a life-long learning path but can only be achievable when you take a step today. 
                    Say no to procastinations. Start now by taking any of our <Link href='/register'>
                        <a className={styles.link} target='_blank'>
                        online or onsite courses now! 
                        </a>
                    </Link> 
                </p>
                <p className={styles.paragraph}>
                    Are you having any fear or chanlleges that has been keeping you from starting a career or do you need a counsellor to guide you through?
                    We would love to hear from you.
                    Kindly send us an email at <b>Orisfinacomputerinstitute@gmail.com</b>
                </p>
        
            </div>
        </article>
        <h2 className={`${styles.secondaryHeader} ${styles.center} ${styles.mbl}`}>
            Related Article
        </h2>
        <div className={`${styles.center} ${styles.mbl}`}>
            <Link href='/blog/how-to-become-a-backend-developer-as-a-beginner' >
            <a className={`${styles.link} ${styles.center}`}>
                How to become a back-end Developer - A beginner guide
            </a>
        </Link>
        </div>
        
    </main>
    <Footer />
    </>
  )
}
export default frontendDevelopment