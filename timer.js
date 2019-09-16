const templateRoot = document.createElement("div");
templateRoot.setAttribute("id", "ujh-timer");
document.body.appendChild(templateRoot);

const leftPad = num => {
  if (num < 10) {
    return "0" + num;
  }
  return num;
};

new Vue({
  el: "#ujh-timer",
  template: `<div id="ujh-timer">
    <span>{{timer}}</span>
  </div>`,
  data: function() {
    return {
      seconds: 0
    };
  },
  computed: {
    timer() {
      const hrs = Math.floor(this.seconds / (60 * 60));
      const hrsRemainder = this.seconds % (60 * 60);
      const mins = Math.floor(hrsRemainder / 60);
      const secs = hrsRemainder % 60;
      return `${leftPad(hrs)}:${leftPad(mins)}:${leftPad(secs)}`;
    }
  },
  created: function() {
    const vi = this;
    // this is not accurate as chrome limits execution when tab in background
    // however this uses less resources that creating new Date every second.
    // Also not a critical feature.
    setInterval(() => {
      vi.seconds += 1;
    }, 1000);
  }
});
