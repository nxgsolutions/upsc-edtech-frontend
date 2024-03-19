import React from 'react'
import styles from "@/app/styles/common.module.css"
import Image from 'next/image'

export default function ImageText({image_url,image_alt,html,imagePosition,theme,fullwidth}) {
  return (
    <div  className={!fullwidth && `${styles.container}`  } >
       <div className={`${styles.card_section}  ${theme=="dark" && styles.dark}`} 
        style={{flexDirection:imagePosition=="right"?"row-reverse":"row"}}>
      <div >
          <Image 
          src={image_url}
          height={500}
          width={500}
          alt={image_alt}
         
          />
          
          
        </div>
        <div >
          
       
            
            {html}
           
          </div>
      
      </div>
    </div>
  )
}
