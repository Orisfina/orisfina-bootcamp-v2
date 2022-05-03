
type slideshowProps = {
    title: string, 
    color1?:string,
    color2?: string,
    text1?: string, 
    text2?: string
}

function SlideshowShort(props: slideshowProps) {
    const {title, color1, color2, text1, text2} = props;
    return (
        <>
            <div className='container slideshow-short'>
                <div className='text-content'>
                    <h1 className='slideshow-short__title'>
                        {title}
                    </h1>
                    <h3 className='slideshow-short__subTitle'>
                        <span className='yellow'>{color1} </span> {text1} 
                        <span className='yellow'> {color2} </span>{text2}
                    </h3>
                </div>
                {/* <div className='bg-overlay__mini'></div> */}
            </div>
        </>
    )
}

export default SlideshowShort
