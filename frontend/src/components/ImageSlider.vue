<template>
    <div class="wrapper">
      <i @click="prevCard" class="fa-solid fa-angle-left"></i>
      <div class="carousel" ref="carousel" @scroll="showHideIcons">
        <div
          class="card"
          v-for="(card, index) in cards"
          :key="index"
          @click="toggleZoom(index)"
          :class="{ zoomed: isZoomedIn && index === middleCardIndex }"
        >
          <img :src="card.image" :alt="card.title">
          <div class="card-content">
            <h2 class="card-title">{{ card.title }}</h2>
            <p class="card-description">{{ card.description }}</p>
          </div>
        </div>
      </div>
      <i @click="nextCard" class="fa-solid fa-angle-right"></i>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        cards: [
          {
            title: 'Card 1',
            description: 'ggggggggggggg',
            image: 'https://i.postimg.cc/m2yC5cXK/C12_C1_Inam_Nkabi_(3).jpg',
          },
          {
            title: 'Card 2',
            description: 'ggggggggg',
            image: 'https://i.postimg.cc/x1VpKbk7/Ethan_(1).jpg',
          },
          {
            title: 'Card 3',
            description: 'ggggg',
            image: 'https://i.postimg.cc/wMJZp5yX/image.png',
          },
          {
            title: 'Card 3',
            description: 'This is the third card',
            image: 'https://i.postimg.cc/52977W3q/Lisa.jpg',
          },
          {
            title: 'Card 3',
            description: 'This is the third card',
            image: 'https://i.postimg.cc/JhkbKp95/Sakhe.jpg',
          },
          {
            title: 'Card 3',
            description: 'This is the third card',
            image: 'https://i.postimg.cc/WzkJmVx0/C12_Okuhle_Gwotiwe_(1).jpg',
          },
         
        ],
        cardWidth: 0,
        middleCardIndex: 0,
        isZoomedIn: false,
      };
    },
    mounted() {
      this.calculateMiddleCardIndex(); 
      this.calculateCardWidth();
    },
    methods: {
      calculateCardWidth() {
        const cardWidth = this.$refs.carousel.querySelector(".card").clientWidth + 14;
        this.cardWidth = cardWidth;
      },
      prevCard() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.calculateMiddleCardIndex(); 
          this.scrollToCard(this.currentIndex);
        }
      },
      nextCard() {
        if (this.currentIndex < this.cards.length - 1) {
          this.currentIndex++;
          this.calculateMiddleCardIndex(); 
          this.scrollToCard(this.currentIndex);
        }
      },
      scrollToCard(index) {
        this.$refs.carousel.scrollLeft = index * this.cardWidth;
      },
      showHideIcons() {
        const carousel = this.$refs.carousel;
        const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
        this.$refs.left = carousel.scrollLeft === 0 ? 'none' : 'block';
        this.$refs.right = carousel.scrollLeft === scrollWidth ? 'none' : 'block';
      },
      calculateMiddleCardIndex() {
        const middleIndex = Math.floor(this.cards.length / 2);
        this.middleCardIndex = middleIndex;
      },
      toggleZoom(index) {
        if (this.isZoomedIn) {
          this.isZoomedIn = false;
        } else {
          this.isZoomedIn = true;
          this.middleCardIndex = index; 
        }
      },
    },
  };
  </script>
  
  <style scoped>
 
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  .card.zoomed {
    transform: scale(0.9);
    transition: transform 0.3s ease; 
  }

  body {
    display: flex;
    padding: 0 35px;
    min-height: 100vh;
    align-items: center;
    justify-content: right;
    background: #343F4F;
  }
  .wrapper {
    display: flex;
    max-width: 1000px;
    position: relative;
    margin: auto;
  }
  .wrapper i {
    top: 50%;
    height: 44px;
    width: 44px;
    color: #343F4F;
    cursor: pointer;
    font-size: 1.15rem;
    position: absolute;
    text-align: center;
    line-height: 44px;
    background: #fff;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: transform 0.1s linear;
    margin: auto;
  }
  .wrapper i:active {
    transform: translateY(-50%) scale(0.9);
  }
  .wrapper i:hover {
    background: #f2f2f2;
  }
  .wrapper i:first-child {
    left: -100px;
    display: visible;
  }
  .wrapper i:last-child {
    right: -80px;
  }
  .wrapper .carousel {
    font-size: 0px;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    scroll-behavior: smooth;
  }
  .carousel.dragging {
    cursor: grab;
    scroll-behavior: auto;
  }
  .carousel.dragging .card {
    pointer-events: none;
  }
  .card {
    width: 300px;
    height: 200px; 
    margin-right: 14px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: inline-block;
  }
  .card img {
    width: 300px;
    height: 300px;
    border-radius: 8px 8px 0 0;
  }
  .card .card-content {
    padding: 16px;
  }
  .card .card-title {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 8px;
  }
  .card .card-description {
    font-size: 1rem;
  }
  /* media querries */
    /* Media query for screens between 900px and 600px */
    @media screen and (max-width: 900px) {
    .card .card-title {
      font-size: 1rem;
      margin-bottom: 4px;
    }

    .card .card-description {
      font-size: 0.8rem;
    }
    

    /* Adjust other styles as needed */
  }

  /* Media query for screens between 599px and 300px */
  @media screen and (max-width: 599px) {
    .card .card-title {
      font-size: 0.8rem;
      margin-bottom: 2px;
    }

    .card .card-description {
      font-size: 0.6rem;
    }

    /* Adjust other styles as needed */
  }
  @media screen and (max-width: 1200px) {
.wrapper{
    max-width: 80%;
} 
}
  @media screen and (max-width: 994px) {
.wrapper{
    max-width: 70%;
} 
}

  @media screen and (max-width: 681px) {
.wrapper{
    max-width: 65%;
} 
.card img {
    width: 250px;
}
.card{
    width: 250px;
}
}
  /* Media query for smaller screens */
@media screen and (max-width: 600px) {
  .wrapper {
    /* Adjust the size of the wrapper or carousel as needed */
    max-width: 50%;
  }
  .card img {
    width: 200px;
}
.card{
    width: 200px;
}

}
@media screen and (max-width: 380px) {
  .wrapper {
    /* Adjust the size of the wrapper or carousel as needed */
    max-width: 40%;
  }
  .card img {
    width: 170px;
}
.card{
    width: 170px;
}

}
  </style>
  