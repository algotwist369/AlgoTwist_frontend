import React from 'react'

const BannerImage = () => {
    return (
        <div className="relative w-full min-h-[120px] h-48 sm:h-48 md:h-64 lg:h-80 xl:h-96 flex items-center justify-center">
            <img
                src="https://res.cloudinary.com/djdrpfhdz/image/upload/v1752322649/Shailesh_Cover_Page_hcrlr8.png"
                alt="Web Development Services Banner"
                className="w-full h-full object-cover object-center absolute inset-0 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
        </div>
    )
}

export default BannerImage