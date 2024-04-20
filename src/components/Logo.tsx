import { useNavigate } from "react-router-dom"

function Logo() {
    const navigate = useNavigate()
    return (
        <div className="flex items-center" onClick={() => navigate('/')}>
            <div className='text-colLight text-[50px] relative z-10'>A</div><div className="-ml-[10px] text-black">mir</div><div className='text-colLight font-[800]'>Shop</div>
        </div>
    )
}

export default Logo
