import React, { useEffect, useState } from 'react'

function Fetch(props){
    const {url,children} = props
    const [data,setData] = useState(null)

   async function handler(url){
        const res = await fetch(url);
        const data = await res.json();
        setData(data)
    }

    useEffect(() => {
        // console.log(url)
        handler(url)
    }, [url])
    
    return children(data)
}

const Api = () => {

    let url = 'https://api.github.com/repos/pandas-dev/pandas/issues';

    

  return (
    <>
    <Fetch url={url}>
        {
            (data)=>{
                if(data){
                    return data.map((e)=>{
                        return e.url
                    })
                }
                return <h1>No data</h1>
            }
        }
    </Fetch>
    </>
  )
}

export default Api;