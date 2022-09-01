export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxfa1cce691e79316f",

    // 公众号APP_SECRET
    APP_SECRET: "3afbd4500ff477efb2edf8829ed2e1fc",

    // 模板消息id
    TEMPLATE_ID: "2qFl-_YoxYcTh4afZwoSfivnoFbSm8bFey8E9QLsHKc",

    // 回调消息模板id, 用来看自己有没有发送成功的那个模板
    CALLBACK_TEMPLATE_ID: "_0mhWdTGnp8aeo1Jo7HEBLTbbSdqrQ6lolrmXE3n0rI",

    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
    // [{
    //   name: "张三",
    //   id: "wxafasdasdd-zxfvsdfd"
    // },
    // {
    //   name: "李四",
    //   id: "wxafasdasdd-zxfvsdfd"
    // }]
    USERS: [
      {name: 'Exception', id: "o-WsX6A3_nBfUdV0Kh-AjVNOfJhI"}, 
      //{name: 'test1', id: "2hxOO6VskYv0Kuf-y你懂的,填错狗头打烂RMpuXhk"}, 
      //{name: 'test2', id: "3hxOO6VskYv0Kuf-yw你懂的,填错狗头打烂2RMpuXhk"}, 
      //{name: 'test3', id: "4hxOO6VskYv0Kuf-ywI你懂的,填错狗头打烂MpuXhk"}, 
    ],
    // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
    CALLBACK_USERS: [
      {name: 'Exception',id: "o-WsX6A3_nBfUdV0Kh-AjVNOfJhI"}, 
    ],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "湖南",
    // 所在城市
    CITY: "株洲",

    /** 重要节日相关 */

    // 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    // tpye必须填！ 只能 “生日” 和 “节日” 二选一!
    // 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
    // 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
    FESTIVALS: [
      {"type": "生日", "name": "全世界最可爱的羊", "year": "1997", "date": "02-24"},
      {"type": "节日", "name": "我们的恋爱纪念日", "year": "2020", "date": "08-08"},
      //{"type": "生日", "name": "李四", "year": "1996", "date": "08-29"},
      //{"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "08-29"},
    ],
    // 限制重要节日的展示条目, 需要填写数字; 
    // 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
    // 如果为0, 则默认展示全部
    FESTIVALS_LIMIT: 3,

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2020-08-08",
    // 结婚纪念日
    //MARRY_DATE: "2020-01-04",


    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

// 共推送 {{need_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
