import React, { useState } from 'react'
import SideBarStyled from '../styled/Sidebar'
// import smallIcon from '../assets/Small_logo-removebg-preview.png'
import smallIcon from '../assets/CT_-_Copy-removebg-preview.png'
// import Icon from '../assets/logo_-_white-removebg-preview.png'
import Icon from '../assets/logo.png'
import HCM from '../assets/HCM.png'
import ERP from '../assets/ERP.png'
import EPM from '../assets/EPM.png'
import SCm from '../assets/SCm.png'
import {BsArrowRightCircle,BsArrowLeftCircle} from 'react-icons/bs'
// import {FaGridP} from 'react-icons/fa'

const SideBar = () => {

    const [isCollapse, setIsCollapse] = useState(false)

  return (
    <SideBarStyled className='d-flex flex-column ' style={{width:`${isCollapse ? '100px':'max-content'}`}}>
        <div className='logo d-flex justify-content-between align-items-center py-3'>
           {isCollapse ? <img className='small'  src={smallIcon} alt=""  /> : <img className='large mx-2' src={Icon} alt=""  />}
           {isCollapse ?<div className='right-arrow position-absolute '><BsArrowRightCircle  size={20} role='button' color='#000' className='mx-2 rounded-pill bg-light' onClick={()=>setIsCollapse(false)}/> </div >:<div className='left-arrow position-absolute '><BsArrowLeftCircle   size={20} role='button'  color='#000' className='mx-2 rounded-pill bg-light' onClick={()=>setIsCollapse(true)}/></div>}
        </div>
        <hr className='text-light p-0 m-0'/>
        <div className="options px-2 py-4">
            <div className="d-flex flex-column">
                {!isCollapse  && <div className="mx-3 my-2">
                    <span className='fs-6 text-secondary fw-bold my-4 ' role='button'>DASHBOARD</span>
                </div>}
                <div className="category mx-2">
                    <div  className={`d-flex  p-1 rounded ${isCollapse && 'justify-content-center'}`}>
                        <div onClick={()=>setIsCollapse(false)}>
                            <img className='icon' src={HCM} alt="" />
                        </div>
                       {!isCollapse  && <div>
                            <span className='mx-2 text-secondary'>Application Management</span>
                        </div>}
                    </div>
                </div>
                <div className="category mx-2  my-2">
                    <div className={`d-flex  p-1 rounded  ${isCollapse && 'justify-content-center'}`}>
                        <div onClick={()=>setIsCollapse(false)} >
                            <img className='icon' src={ERP} alt="" />
                        </div>
                       {!isCollapse  && <div>
                            <span className='mx-2 text-secondary'>Tenant Management</span>
                        </div>}
                    </div>
                </div>
                <div className="category mx-2 ">
                    <div className={`d-flex  p-1 rounded  ${isCollapse && 'justify-content-center'}`}>
                        <div onClick={()=>setIsCollapse(false)}>
                            <img className='icon' src={EPM} alt="" />
                        </div>
                       { !isCollapse  && <div>
                            <span className='mx-2 text-secondary'>Camptra Admin Management</span>
                        </div>}
                    </div>
                </div>
                <div className="category mx-2  my-2">
                    <div className={`d-flex  p-1 rounded  ${isCollapse && 'justify-content-center'}`}>
                        <div onClick={()=>setIsCollapse(false)}>
                            <img className='icon' src={SCm} alt="" />
                        </div>
                       { !isCollapse  && <div>
                            <span className='mx-2 text-secondary'>My Profile</span>
                        </div>}
                    </div>
                </div>
                {/* <div className="category mx-2  my-2">
                    <div className={`d-flex  p-1 rounded  ${isCollapse && 'justify-content-center'}`}>
                        <div onClick={()=>setIsCollapse(false)}>
                            <img className='icon' src={HCM} alt="" />
                        </div>
                       { !isCollapse  && <div>
                            <span className='mx-2 text-secondary'>Settings</span>
                        </div>}
                    </div>
                </div> */}
                
            </div>
        </div>
    </SideBarStyled>
  )
}

export default SideBar