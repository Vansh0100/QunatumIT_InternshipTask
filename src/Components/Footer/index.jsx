import React from 'react'

import Button from "react-bootstrap/Button";
function SmallScreen(){
    return (
        <>
<div className='p-2 text-center w-full justify-center mt-3 mb-3 md:hidden' id='footer'>
                <div className='w-full flex flex-col justify-center'>
                    <div className='w-full p-2'>
                        <h2>Suscribe to our newsletter for more updates</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus dolore odio nulla officiis alias cum ex dolorem id cumque consequuntur.
                        </p>
                    </div>
                    <div className='w-full p-4'>
                        <div className='flex flex-col gap-3'>
                            <div className='w-full'>
                                <form action="">
                                    <input type="email" name="email" id="email" placeholder='Enter your email' className='p-2 w-full'/>
                                </form>
                            </div>
                            <div className='w-full'>
                            <Button variant="info" className="p-2">
                  Suscribe Now
                </Button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
function LargeScreen(){
    return (
        <>
            <div className='hidden md:flex w-full justify-center mt-5 mb-3 p-5' id='footer'>
                <div className='w-3/5 flex justify-center'>
                    <div className='w-1/2'>
                        <h2>Suscribe to our newsletter for more updates</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus dolore odio nulla officiis alias cum ex dolorem id cumque consequuntur.
                        </p>
                    </div>
                    <div className='w-1/2 p-4'>
                        <div className='flex flex-col gap-3'>
                            <div className='w-full '>
                                <form action="">
                                    <input type="email" name="email" id="email" placeholder='Enter your email' className='p-2 w-full'/>
                                </form>
                            </div>
                            <div className='w-full'>
                            <Button variant="info" className="p-2">
                  Suscribe Now
                </Button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}


function FooterSec() {
  return (
    <>
        <SmallScreen/>
        <LargeScreen/>
    </>
  )
}

export default FooterSec