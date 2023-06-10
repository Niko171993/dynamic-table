const stars = () => {
    const tempStars = Array.from({length:5}, (_,index) => {
        return (
            <span key={index}>
                {stars >= index + 1 ? 'full': stars >= index + 0.5 ? 'half-star': 'empty-star'}
            </span>
        )
    })
}

//stars is done 

//colors 
const colors = () => {
    const [mainColor, setMainColor] = useState(colors[0])
    
    {
        colors.map((color,index) => {
            return <button key={index}
                className={`color-btn ${color === mainColor ? 'active':null}`}
                onClick={() => setMainColor(colors[index])}
                style={{background:color}}
            >{color === mainColor ? 'check':null}</button>
        })
    }
}

//product images 
const images = (images = [{url:''}]) => {
    const [mainImage, setMainImage] = useState(images[0])
    <img src={mainImage.url} />
    {
        images.map((item,index) => {
            return <img className={item.url === mainImage.url ? 'active':null}src={item.url} key={index} 
                onClick={() => setMainImage(images[index])}
            />
        })
    }
}

useEffect(() => {
    if(error) {
        setTimeout(() => {
            history.push('/')
        }, 3000)

    }
}, [])

// error -> loading false, error true
// loading -> error false, loading true 

//handleCurrency 
const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number / 100)
    return newNumber 
}



//TODOS -> stars,colors,buttons,pictures,numberformat, push

const stars = Array.from({length:5}, (_,index) => {
    return `<span>${stars > index + 1 ? 'full': stars > index + 0.5 ? 'half':'empty'}</span>`
})

const colors = 

{
    colors.map(color,index => {
        return <button
        className={`${mainColor === color ? 'active':null}`}
        style={{backround:color}}
        onClick={() => setMainColor(color || colors[index])}
        >{mainColor === color ? 'check':'no-check'}</button>
    })
}

setNumber((currentNumber) => {
    let nextNumber = currentNumber + 1 
    if(nextNumber > stock) nextNumber = stock 
    return nextNumber 
})

setNumber(currentNumber => {
    let prevNumber = currentNumber - 1
    if(prevNumber < 1) {
        prevNumber = 1
    }
    return prevNumber 

})

{
    images.map(image,index => {
        return <img src={image.url} className={mainImage.url === image.url ? 'active': null}onClick={() => setMain(images[index])}/>

    })
}

const numberFormat = () => {
    const newNumber = Intl.NumberFormat('en-US', {
        style:'currency',
        currency:'USD'
    }).format(number / 100)
    return newNumber 
}

useEffect(() => {
    setTimeout(() => {
        history.push('/')
    }, 3000)
}, [])

