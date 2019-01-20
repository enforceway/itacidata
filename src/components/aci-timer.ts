import Vue from "vue";

Vue.component("aci-timer", {
  template: `<div class="aci-video-head">
      <p>{{currentTimeStamp}}</p>
    </div>`,
  data() {
    return {
      currentTimeStamp: "",
    };
  },
  mounted() {
    this.currentTimeStamp = new Date().aciDateFormat("yyyy-MM-dd hh:mm:ss");
    console.log("aci-video-head");
    this.$nextTick(() => {
      setInterval(() => {
        this.currentTimeStamp = new Date().aciDateFormat("yyyy-MM-dd hh:mm:ss");
      }, 1000);
    });
  },
});
