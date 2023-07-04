import React,{useEffect} from 'react'
import './main.scss'
import borabora from "../../Assets/borabora.jpg";
import machupicchu from "../../Assets/Machu Picchu.jpg"
import gbr from "../../Assets/Great Barrier Reef.jpg";
import cappadocia from "../../Assets/Cappadocia.jpg";
import guanajuato from "../../Assets/Guanajuato.jpg";
import ct from "../../Assets/Cinque Terre.jpg";
import aw from "../../Assets/Angkor Wat.jpg";
import bi from "../../Assets/Bali Island.jpg"
import tm from "../../Assets/Taj Mahal.jpg";
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi';
import Aos from "aos";
import 'aos/dist/aos.css'

const Data=[
  {
    id:1,
    imgSrc:borabora,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id:2,
    imgSrc:machupicchu,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
  },
  
 { id:3,
  imgSrc:gbr,
  destTitle:'Great Barrier Reef',
  location:'Australia',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:"One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'.Always interesting to be in this place."
},
{ id:4,
  imgSrc:cappadocia,
  destTitle:'Cappadocia',
  location:'Turkey',
  grade:'CULTURAL RELAX',
  fees:'$800',
  description:"According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities."
},
{ id:5,
  imgSrc:guanajuato,
  destTitle:'Guanajuato',
  location:'Mexico',
  grade:'CULTURAL RELAX',
  fees:'$1100',
  description:"A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome. "
},
{ id:6,
  imgSrc:ct,
  destTitle:'Cinque Terre',
  location:'Italy',
  grade:'CULTURAL RELAX',
  fees:'$840',
  description:"The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!"
},
{ id:7,
  imgSrc:aw,
  destTitle:'Angkor Wat',
  location:'Cambodia',
  grade:'CULTURAL RELAX',
  fees:'$790',
  description:"Angkot wat represents the entire range of Khmer art from the 9th to the 15th century.This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities. "
},
{ id:8,
  imgSrc:tm,
  destTitle:'Taj Mahal',
  location:'India',
  grade:'CULTURAL RELAX',
  fees:'$900',
  description:"An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities. "
},
{ id:9,
  imgSrc:bi,
  destTitle:'Bali Island',
  location:'Indonesia',
  grade:'CULTURAL RELAX',
  fees:'$500',
  description:"Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains,history, art & culture, food, temples and beautiful sandy beaches."
},

]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-up" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
    {
      Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
        return(
          <div className="singleDestination" data-aos="fade-up" key={id}>
            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
            </div>
            <div className="cardInfo">
              <h4 className="destTitle">{destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className='icon'/>
                <span className="name">{location}</span>
              </span>
              <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small>+1</small></span>
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>
              <div className="desc">
                <p>{description}</p>
              </div>
              <button className="btn flex">
                DETAILS <HiOutlineClipboardCheck className='icon'/>
              </button>
            </div>
          </div>
        )
      })
    }
      </div>
    </section>
  )
}

export default Main