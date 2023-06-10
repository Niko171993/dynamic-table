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

