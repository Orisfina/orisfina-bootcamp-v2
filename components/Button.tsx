import Link from 'next/link'

type buttonProps ={
  cName: string,
  link: string,
  children: string
}

const Button = (props:buttonProps) => {
    const {cName,link, children} = props
    return (
        <>
            <Link href={link}>
              <a className={cName}>{children}</a>
            </Link>
        </>
    )
}

export default Button
