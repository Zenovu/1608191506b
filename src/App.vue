<template>
  <div id="app">
    <section>
      <!-- Header START-->
      <header>
        
        <div class="header__img">
          <img src="./assets/photo.png" alt="Veronika Rostova">
        </div>

        <main>

          <h4>
            Вероника Ростова
          </h4>

          <p class="subheading">
            Менеджер по продажам
          </p>

          <div class="container__appeal">
            <p class="appeal">
            Подберу для вас самые лучшие предложения.
            Мои услуги абсолютно бесплатны
            </p>
          </div>

          <div class="services">
            <div class="services__header">
              <p>Услуги</p>
            </div>
            <div class="services__body">
              <service-item v-for="item in services" :key="item.title" :title="item.title" :mark="item.mark" ></service-item>
            </div>
            <div class="services__footer">
              <p>Всего</p>
              <p>{{serviceResultMark}}</p>
            </div>
          </div>

        </main>
      </header>
      <!-- Header END-->

      <div class="reviews">

        <div class="reviews__heading">
          <h4>Последние отзывы</h4>
          <div class="reviews__link">
            <a href="#">Все отзывы</a>
          </div>
          <div class="reviews__stats">
            <div class="reviews__stats-item">
              <div class="review__img">
                <img src="./assets/like-icon.png">
              </div>
              <p>131</p>
            </div>
            <div class="reviews__stats-item">
              <div class="review__img">
                <img src="./assets/comments-icon.png">
              </div>
              <p>14</p>
            </div>
          </div>
        </div>

        <div class="review__body">

          <review-card
            v-for="item in $store.getters.getReviews"
            :key="item.id"
            :author="item.author"
            :review="item.review"
            :date="item.date"
            />

        </div>
      </div>

      <div class="add__form">
        <textarea @keyup.ctrl.13 = "addReview()" v-model="model.review" rows="5" />

        <button @click="addReview()" >
          Написать консультанту
        </button>
      </div>
    </section>

  </div>
</template>

<script>
import ServiceItem from '@/components/ServiceItem.vue'
import ReviewCard from '@/components/ReviewCard.vue'

export default {
  name: 'app',
  data (){
    return {
      services: [
        {
          title: 'Ручное бронирование',
          mark: 11
        },
        {
          title: 'Пакетные туры',
          mark: 3
        },
        {
          title: 'Отели',
          mark: 1
        }
      ],
      model:{
        review:''
      }
    }
  },
  components: {
    ServiceItem,
    ReviewCard
  },
  computed: {
    serviceResultMark () {
      let sum = 0
      for ( let i = 0; i < this.services.length; i++ ){
        sum += this.services[i].mark
      }

      return sum
    }
  },
  methods:{
     addReview(){
       if(this.model.review != ''){
        this.$store.dispatch('addReview', {
          author: 'Сумаил',
          review: this.model.review,
          date: toString(new Date())
        })
        this.model.review = ''
       } else {
         alert('Write something first')
       }
     }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap');

body{
  margin: 0;
}

h4{
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  font-weight: 600;
  text-align: left;
  margin: 0;
  line-height: 24px;
}

p{
  font-family: 'Arial', sans-serif;
  text-align: left;
  font-size: 16px;
  line-height: 20px;
}

p.subheading{
  line-height: 20px;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  color:#808080;
  margin-bottom: 7px;
}

p.appeal{
  line-height: 20px;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

  section {
    width: 100%;
    position: relative;
    max-width: 720px;
    min-width: 360px;
    margin: 0 auto;

    box-sizing: border-box;

    & > header {
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      padding: 20px 20px 0px 20px;

      & > .header__img > img {
        position: relative;
        width: 120px;
        z-index: 2;
      }

      & > main {
        padding-left: 9px;

        & > .container__appeal{
          background-color: #fffbc8;
          border: 1px solid rgba(60, 44, 0 ,0.25);
          padding: 12px 14px 12px 46px;
          margin-left: -46px;
          border-radius: 4px;
        }

        & > .services{
          margin-top: 7px;

          & > .services__header{
          display: flex;
          justify-content: flex-end;
          border-bottom: 1px solid #ccc;
          padding: 9px 0px;

            & p{
              text-align: center;
              width: 100%;
              max-width: 90px;
              margin: 0;
            }
          }

          & > .services__footer{
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid #ccc;
          padding: 9px 0px;

            & p {
              text-align: left;
              width: calc(100% - 90px);
              margin: 0;
              font-weight: 600;
            }

            & p:last-child {
              text-align: center;
              width: 100%;
              max-width: 90px;
              margin: 0;
            }
          }

        }
      } 
    }

    & > .reviews {
      width: 100%;
      padding: 0px 20px;
      box-sizing: border-box;

      & > .reviews__heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        line-height: 24px;

        & > .reviews__link{
          width: calc( 100% - 270px);
          text-align: left;
        }

        & > .reviews__stats{
          display: flex;

          & > .reviews__stats-item{
            display: flex;
            padding: 0px 0px 0px 5px;
            
            & > .review__img {
              margin-right: 6px;
              position: relative;
            }

            & > .review__img {
              margin-right: 6px;
              padding-left: 10px;

              & > img {
                margin-top: 3px;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-60%);
              }
            }

            & p{
              margin: 0;
              line-height: 24px;
            }
          }
        }
      }

      & > .review__body{
        display: flex;
        flex-direction: column;
      }
    }
  }


.add__form{
  width: 100%;
  padding: 20px;
  background: #f2f2f2;
  box-sizing: border-box;

  & > textarea {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #a9a9a9;
    border-radius: 4px;
    resize: none;
    padding: 10px;
  }

  & > button{
    width: 100%;
    max-width: 280px;
    font-size: 16px;
    font-family: 'PTSans', sans-serif;
    font-weight: bold;
    padding: 15px 0px;
    border-radius: 40px;
    border: none;
    background: #fdd639;
    margin-top: 23px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
