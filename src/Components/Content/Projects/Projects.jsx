import React from 'react'
import classes from './Projects.module.css'
import Carousel from './Carousel/Carousel'

const Projects = () => {
    return(
        <div className= {classes.projects}>
            <Carousel/>
        </div>
    )
}

export default Projects