<template>
<div class="cartcontrol">
  <transition name="move">
    <div class="cart-decrease" v-show="food.count > 0" @click.stop.prevent="decreaseCart">
      <span class="inner icon-remove_circle_outline"></span>
    </div>
  </transition>
  <div class="cart-dcount" v-show="food.count > 0">{{food.count}}</div>
  <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
</div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
export default {
  props: {
    food: {
      type: Object
    }
  },
  created () {
    // console.log(this.food);
  },
  methods: {
    addCart () {
      // console.log('click');
      if (!this.food.count) {
        // this.food.count = 1;
        Vue.set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
      this.$emit('cart-add', event.target);
    },
    decreaseCart () {
      if (this.food.count) {
        // this.food.count = 1;
        this.food.count--;
      }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cartcontrol
  font-size 0
  .cart-decrease
    display inline-block
    padding 6px
    &.move-enter-active, &.move-leave-active
      transition all 0.4s linear
      transform translate3d(0,0,0)
      opacity 1
      .inner
        transition all 0.4s linear
        transform rotate(0)
    &.move-enter, &.move-leave-to
      transform translate3d(24px,0,0)
      opacity 0
      .inner
        transform rotate(180deg)
    .inner
      display inline-block
      font-size 24px
      line-height 24px
      color rgb(0,160,220)
  .cart-dcount
    display inline-block
    vertical-align top
    width 12px
    padding-top 6px
    line-height 24px
    text-align center
    font-size 10px
    color rgb(147,153,159)
  .cart-add
    display inline-block
    padding 6px
    font-size 24px
    line-height 24px
    color rgb(0,160,220)
</style>
