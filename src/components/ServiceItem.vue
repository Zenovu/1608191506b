<template>
  <div class="service__body-item">
    <div class="service__progress">
      <div class="service__progress-fill" :class="{'green': mark > 9 , 'blue': mark < 9}" :style="{ 'width' : 8.33 * mark + '%' }" />
      {{title}}
    </div>
    <div class="service__mark">
      {{mark}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    mark: Number
  }
}
</script>

<style lang="scss">
  .service__body-item{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin: 8px 0px;
    line-height: 24px;

    & > .service__progress{
      position: relative;
      width: calc(100% - 90px);
      min-height: 24px;
      border-radius: 0px 4px 4px 0px;
      overflow: hidden;
      color:#000;

      & > .service__progress-fill{
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        box-sizing: border-box;

        &.green{
          background-color:#b1e19b;
          border-left: 1px solid #83b26d;
        }

        &.blue{
          background-color:#ace2f8;
          border-left: 1px solid #7eb4ca;
        }
      }
    }

    & > .service__mark{
      text-align: center;
      width: 100%;
      max-width: 90px;
      font-weight: 600;
    }
  }
</style>