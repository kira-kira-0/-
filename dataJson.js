//轮播图数据
var bannerPic = [{
    id: 1,
    url: 'http://p1.music.126.net/jdx3RNbljbP_R4VRMLuRBg==/109951164900957905.jpg?imageView&quality=89',
    dis: false
  },
  {
    id: 2,
    url: 'http://p1.music.126.net/2xfwYJFN8Ot9Sb_vLHsd3Q==/109951164901094816.jpg?imageView&quality=89',
  },
  {
    id: 3,
    url: 'http://p1.music.126.net/2hhQnG9YIIr6bIhuLJSg6Q==/109951164902040499.jpg?imageView&quality=89',
    dis: false
  },
  {
    id: 4,
    url: 'http://p1.music.126.net/EzsawqAXJ92C7NjCf0niyg==/109951164901110604.jpg?imageView&quality=89',
    dis: false
  },
  {
    id: 5,
    url: 'http://p1.music.126.net/aWo-6kEnUr0uak--8k63_Q==/109951164901113225.jpg?imageView&quality=89',
    dis: false
  },
  {
    id: 6,
    url: 'http://p1.music.126.net/y9YMR49Ul134F5vyJbErtQ==/109951164901122514.jpg?imageView&quality=89',
    dis: false
  },
  {
    id: 7,
    url: 'http://p1.music.126.net/yOPTqPQZl2RUwngXWGLlNA==/109951164902972303.jpg?imageView&quality=89',
    dis: false
  },
  {
    id: 8,
    url: 'http://p1.music.126.net/NZ9jiG2_b5xbDFmZQVUd1Q==/109951164901132280.jpg?imageView&quality=89',
    dis: false
  },
  {
    id: 9,
    url: 'http://p1.music.126.net/DH-Ohm7V0eljz5LFlq_43Q==/109951164901979254.jpg?imageView&quality=89',
    dis: false
  },
]

//热门推荐数据
var hot = [{
    id: 1,
    url: 'http://p1.music.126.net/kiTC5P1IzfcPD7GuZCb0eA==/109951164740790543.jpg?param=140y140',
    name: '淘气如你，闯入我的心房',
    num: '26万'
  },
  {
    id: 2,
    url: 'http://p1.music.126.net/SejIfHDvaV8M6pdBFBT4mg==/109951162836307866.jpg?param=140y140',
    name: '国产后摇 | 人群中丛莽面容在湿漉黑枝闪现',
    num: '22万'
  },
  {
    id: 3,
    url: 'http://p1.music.126.net/PtvUT0hWoYDhbbco_cy4sg==/109951164861836159.jpg?param=140y140',
    name: '『硬曲 硬不硬听了再说（蹦迪专用❗）』',
    num: '231万'
  },
  {
    id: 4,
    url: 'http://p2.music.126.net/dYYAfNf2r6FxJZcD9IbbyA==/109951164902216989.jpg?param=140y140',
    name: '第一卷 第01集 穿越',
    num: '3589'
  },
  {
    id: 5,
    url: 'http://p1.music.126.net/qnLwtGqBLGXw9ArI1P8TVQ==/109951164721601587.jpg?param=140y140',
    name: '一秒沦陷 | 超好听的Remix',
    num: '196万'
  },
  {
    id: 6,
    url: 'http://p2.music.126.net/iejJ-cH__Pl_E0Cm3A84MA==/109951164862510572.jpg?param=140y140',
    name: '我不后悔相遇，却仍遗憾结局',
    num: '5261'
  },
  {
    id: 7,
    url: 'http://p1.music.126.net/LXlSzohbXV40kh2H1MrrXQ==/109951164841074706.jpg?param=140y140',
    name: '【cover】超好听的男生翻唱',
    num: '59万'
  },
  {
    id: 8,
    url: 'http://p2.music.126.net/ogdUNnHo9SbGZ1tV4pZT8g==/109951164841255012.jpg?param=140y140',
    name: '原版《Beautiful》',
    num: '333万'
  }
]

//榜单
var topJson = [
  {
    name: '云音乐飙升榜',
    img: 'http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100',
    list:[
      {id:1,songName:'夏天的风'},
      {id:2,songName:'Oaths'},
      {id:3,songName:'你我不一 (Live)'},
      {id:4,songName:'下世纪初雪'},
      {id:5,songName:'MOM'},
      {id:6,songName:'I Hope'},
      {id:7,songName:'达拉崩吧'},
      {id:8,songName:'深夜一角 (Live)'},
      {id:9,songName:'花期 (Live)'},
      {id:10,songName:'小雏菊'},
    ]
  },
  {
    name: '云音乐新歌榜',
    img: 'http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100',
    list:[
      {id:1,songName:'夏天的风'},
      {id:2,songName:'微微'},
      {id:3,songName:'好想爱这个世界啊'},
      {id:4,songName:'天下'},
      {id:5,songName:'红梅赞'},
      {id:6,songName:'强迫症 (《疯人院》) '},
      {id:7,songName:'达拉崩吧 (Live)'},
      {id:8,songName:'过活'},
      {id:9,songName:'疯人院'},
      {id:10,songName:'你最近还好吗'},
    ]
  },
  {
    name: '网易原创歌曲榜',
    img: 'http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100    ',
    list:[
      {id:1,songName:'喉咙唱的沙哑'},
      {id:2,songName:'手心'},
      {id:3,songName:'众心相'},
      {id:4,songName:'今夜的江滩公园没有烟花跨年'},
      {id:5,songName:'因为他'},
      {id:6,songName:'Luv Song'},
      {id:7,songName:'人海十万里'},
      {id:8,songName:'你一不小心碰上了渣男'},
      {id:9,songName:'给命（Acoustic Version）'},
      {id:10,songName:'黑日梦'},
    ]
  }
]