/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  
  // USE_PASSAGE: 'wechat-test',
  USE_PASSAGE: 'push-deer',

  // 使用微信测试号：公众号APP_ID
  // APP_ID: 'wxa44f11b96c480350',

  // 使用微信测试号：公众号APP_SECRET
  // APP_SECRET: 'c745d289f1b2d1f6018c17bcbe876506',

  PROVINCE: '浙江',
  CITY: '杭州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU22773Tafxr8SViNO6RYdPUEmPalOQWfoFFR6BX',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // useTemplateId: '-NMbLKbvmigXhBkxdOmiDcL8KUNA3CpoR8ROpHzsEy4',
      // push-deer id
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-07',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // {
        //   type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        // },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '李四', year: '1996', date: '09-31',
        // },
        {
          type: '节日', name: '在一起纪念日', year: '2021', date: '11-23',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-11-23' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '娜娜',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU22788TdamYnLiilBFkKYVjzbO23yZkLG8L5yUm',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-07',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          // type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          // type: '生日', name: '李四', year: '1999', date: '03-07',
        },
        {
          type: '节日', name: '在一起纪念日', year: '2021', date: '11-23',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-11-23' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU22773Tafxr8SViNO6RYdPUEmPalOQWfoFFR6BX',
    }
  ],

}

module.exports = USER_CONFIG

