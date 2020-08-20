const $ = {
  // 获取参数
  getp: function (params) {
    console.log("我成功的获取了参数");
  },
  valid: function (reg, str) {
    console.log(reg.test(str));
  },
};
