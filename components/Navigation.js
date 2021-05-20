const Navigation = () => {
    return (
        <div className="w-full pb-20 pt-10 grid place-items-center banner">
            
                <span className="bg-gray-900 bg-opacity-70 flex items-center justify-center w-max pt-2">
                <img className="h-20 w-auto object-contain" src="/logo.png" alt="Logo-Defendamos-Las-Granjas"/>
                </span>
            <style jsx>
                {`
                .banner {
                    background-image: url("/banner.jpg");
                    background-size: cover;
                    background-position: 0 80%;
                    background-repeat: no-repeat;
                }
                `}
            </style>
        </div>
    )
}

export default Navigation
