
import Anime, { anime } from 'react-anime';
import React from 'react';
import './b.css'
function getRandomNumberBetween(min: number,max: number){
  return Math.floor(Math.random()*(max-min+1)+min);
}
export default class StarrySky extends React.Component {
  
    state = {
      num: getRandomNumberBetween(500,1000),
      vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    };
    starryNight = () => {
      anime({
        targets: ["#sky .star"],
        opacity: [
          {
            duration: 250,
            value: "0"
          },
          {
            duration: 300,
            value: "1"
          }
        ],
        easing: "linear",
        loop: true,
        delay: (el: any, i: any) => 50 * i
      });
    };
    shootingStars = () => {
      anime({
        targets: ["#shootingstars .wish"],
        easing: "linear",
        loop: true,
        delay: (el: any, i: any) => 1000 * i,
        opacity: [
          {
            duration: 350,
            value: "1"
          }
        ],
        width: [
          {
            value: "150px"
          },
          {
            value: "0px"
          }
        ],
        translateX: 350
      });
    };
    randomRadius = () => {
      return Math.random() * 0.7 + 0.6;
    };
    getRandomX = () => {
      return Math.floor(Math.random() * Math.floor(this.state.vw)).toString();
    };
    getRandomY = () => {
      return Math.floor(Math.random() * Math.floor(this.state.vh)).toString();
    };
    componentDidMount() {
      this.starryNight();
      this.shootingStars()
      
    }
    render() {
      function randomColor() {
        if (getRandomNumberBetween(500, 1000) < 990) {
          return 'white';
        } 
        else {
          return 'red';
        }
      }
      const { num } = this.state;
      return (
        <div id="App">
          <svg id="sky">
            {[...Array(num)].map((x, y) => (
              <circle
                cx={this.getRandomX()}
                cy={this.getRandomY()}
                r={this.randomRadius()}
                stroke="none"
                strokeWidth="0"
                fill="white"
                key={y}
                className="star"
              />
            ))}
          </svg>
          <div id="shootingstars">
            {[...Array(60)].map((x, y) => (
              <div
                key={y}
                className="wish"
                style={{
                  left: `${this.getRandomY()}px`,
                  top: `${this.getRandomX()}px`
                }}
              />
            ))}
          </div>
        </div>
      );
    }
  }

