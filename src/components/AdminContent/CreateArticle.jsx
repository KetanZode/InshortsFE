import React, { useState } from 'react'
import ArticleModal from './ArticleModal'
import { AGGridComp } from './AGGridComp'

function CreateArticle() {
    const [frmopen, setFrmOpen] = useState(false)
    const handlopenfrm = ()=>{
        setFrmOpen(!frmopen)
    }
    return (
        <div className='p-14'>
            <button className='bg-blue-500 text-white rounded px-3 p-1 m-2' onClick={handlopenfrm}>Create Article</button>
            <ArticleModal frmopen={frmopen} setFrmOpen={setFrmOpen}/>
           <div className='-z-10'><AGGridComp/></div>
            
        </div>
    )
}

export default CreateArticle
