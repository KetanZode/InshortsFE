import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { apicall } from '../../api/AxiosServicesSlice'

function ArticleModal(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
        } = useForm()

function onsubmit (e){
        const data = apicall("createarticle", e)
    }

const handlopenfrm = (e)=>{
    if (e.target.id === 'closer'){props.setFrmOpen(!props.frmopen)}}


    return (
        <>
        <div className={`${props.frmopen?'':'hidden'} absolute z-50`}>
           <p>{props.frmopen}</p> 
            <div className={`fixed inset-0 bg-black bg-opacity-35 backdrop-blur flex justify-center items-center`} id="closer" onClick={handlopenfrm}>
                <div className='w-3/5 h-1/2'>
                    <p className='text-gray-200 flex place-content-end cursor-default hover:text-white' id='closer' onClick={handlopenfrm}>X</p>
                    <form action="" onSubmit={handleSubmit(onsubmit)}>
                    <div className='bg-white grid grid-cols-3 p-2 text-gray-600 rounded '>
                    <p className='grid col-span-3 place-self-center font-semibold shadow-sm '>Create Article</p> 
                        <div className='grid col-span-3 p-2'>
                            <input {...register("title")} type='textarea' placeholder='Title' className='border-2 p-2 shadow'/>
                        </div>
                        <div className='grid col-span-3 p-2'>
                            <textarea {...register("content")} placeholder='Content of the article' className='border-2 p-2 shadow'></textarea>
                        </div>
                        <div className='grid col-span-1 p-3 place-self-start'>
                            <input {...register("active")} type="checkbox" defaultChecked={true} />
                        </div>
                        <div className='grid col-span-1 p-2 place-self-start'>
                            <input type="file" name="" id="" true />
                        </div>
                        {/* <div>
                            <input type="Submit" className='mx-[30%] pb-1 px-5 text-white font-bold rounded-lg bg-blue-600 hover:scale-x-105 hover:bg-blue-500' value id="" />
                        </div> */}
                        <div>
                            <button type='submit' className='mx-[30%] pb-1 px-5 text-white font-bold rounded-lg shadow-xl bg-blue-600 hover:scale-x-105 hover:bg-blue-500' disabled={isSubmitting}> Create </button>
                        </div>
                    </div>                   
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default ArticleModal
