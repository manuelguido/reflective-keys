const deviceDetectorMixin = {
  methods: {
    $_isTablet(ua) {
      return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)
    },

    $_isMobile(ua) {
      return /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
    },

    detectDevice() {
      const ua = navigator.userAgent;
      // const isTablet = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)
      // const isMobile = /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)

      if (this.$_isTablet(ua)) {
        return "tablet";
      }
      else if (this.$_isMobile(ua)) {
        return "mobile";
      }
      else {
        return "desktop";
      }
    },

    isMobile() {
      return this.detectDevice() === 'mobile'
    },

    isTablet() {
      return this.detectDevice() === 'tablet'
    },

    isDesktop() {
      return this.detectDevice() === 'desktop'
    },
  }
}

export default deviceDetectorMixin
