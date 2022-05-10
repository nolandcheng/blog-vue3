/*
 * @Descripttion: stylelint.config.js
 * @Author: Cheng
 * @Date: 2022-05-10 23:35:32
 * @LastEditors: Cheng
 * @LastEditTime: 2022-05-10 23:35:56
 */
module.exports = {
  extends: ["stylelint-config-recommended"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  },
}
