import React from 'react'
import classes from './Carousel.module.css'

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [{id: 1, img: 'dj.webp'},
                    {id: 2, img: 'fog.webp'},
                    {id: 3, img: 'gear.webp'},
                    {id: 4, img: 'pexels.jpeg'}],
            translateX: 0
        }
    }
    render(){

        const clickHendler = itemId => {
            const translateX = `translateX(${(itemId -1) * -55}vw)`
            this.setState({translateX})
        } 

        return( 
        <div className={classes.carousel}>
           <ul style={{transform: this.state.translateX}} className={classes.cardList}>
                {this.state.cards.map((item) => 
                    <li key= {item.id} className={classes.card}>
                        <div className={classes.info}>
                            <p>visit</p>
                            <p>more</p>
                        </div>
                        <div style={{backgroundImage: `url(img/${item.img})`}}
                             className={classes.cardContent}>
                        </div>
                    </li>
                )}
            </ul>
            <div className={classes.buttonPanel}>
                {this.state.cards.map((item) => 
                    <button onClick= {clickHendler.bind(null, item.id)}
                            className= {classes.navButtons}
                            key= {item.id}
                            style={{background: `hsl(${item.id * 105}, 17%, 51%)`}}/>
                )}
            </div>
        </div>
    )}
}

export default Carousel