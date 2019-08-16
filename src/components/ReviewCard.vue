<template>
  <div class="review__body-item">
    <div class="review__item-header">
      <h4>{{author}}</h4>
      <p>{{date | moment("DD MMM YYYY")}}</p>
    </div>

    <div class="review__item-body">
      <p>
        {{review}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    review: String,
    date: Date
  }
}
</script>

<style lang="scss">
  .review__body-item {
    width: 100%;
    margin: 10px 0px;
    box-sizing: border-box;

    & > .review__item-header {
      display: flex;

      & h4 {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
      }

      & p {
        margin: 0;
        font-weight: 500;
        font-size: 11px;
        color: #808080;
        line-height: 19px;
        margin-left: 10px;
      }
    }

    & > .review__item-body {
      position: relative;
      width: 100%;
      padding: 5px 20px;
      background: #f2fbff;
      border: 1px solid #cfcfcf;
      margin-top: 15px;
      box-sizing: border-box;

      &:before {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 5px solid #cfcfcf;
        border-right: 5px solid transparent;
        border-top: 5px solid transparent;
        border-bottom: 5px solid #cfcfcf;
        left: 20px;
        top: -10px;
      }

      &:after {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 4px solid #f2fbff;
        border-right: 4px solid transparent;
        border-top: 4px solid transparent;
        border-bottom: 5px solid #f2fbff;
        left: 21px;
        top: -8px;
      }

    }
  }

  
</style>