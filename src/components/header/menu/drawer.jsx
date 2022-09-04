import { useState } from 'react'
import hamburger from '../../../assets/shared/icon-hamburger.svg'
import close from '../../../assets/shared/icon-close.svg'

const Drawer = ()=>{

    const [toggle, setToggle] = useState(false)

    console.log(toggle)

    return <>
        <div className='mt-1' onClick={()=>setToggle(!toggle)}>
    <img src={hamburger}/>
</div>
<div className="absolute top-0 right-0 h-screen bg-white/5 backdrop-blur-3xl z-10" >
    <div className={toggle ? 'w-[254px]' : 'w-[0px]'}>
    <div className='flex flex-row-reverse mt-4 p-4 ' onClick={()=>setToggle(!toggle)}>
            <img src={close}/>
        </div>
        <div className="flex flex-col">
            <div>01</div>
            <div>02</div>
            <div>03</div>
        </div>
    </div>
</div>
    </>
}

export default Drawer