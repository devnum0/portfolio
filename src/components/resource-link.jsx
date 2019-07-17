import React from 'react'
import LINK_DATA from '../link-Data';

const ResourceLink = ({ type, h2 }) => {
    const data = LINK_DATA[type];
    const h1o = h2 ? h2 :  <h2><span style={{color:'white'}}>{data.title}</span></h2>

    return <div style={{display:`${h2 ? '': ''}`}}>
            {h1o}
        {  
            data.items.map(obj => {
                const { id, link, name } = obj;
                return (<p key={id}>
                    <a className="btn btn-primary"
                        href={link}
                        target="_blank" 
                        rel="noopener noreferrer">
                        {name}
                        <i className={data.icon} />
                    </a>
                </p>)
            })
        }
    </div>
}
export default ResourceLink;