import {
  home,
  blips,
  followers,
  library,
  history,
  liked,
  trending,
  music,
  gaming,
  news,
  setting,
  help,
  feedback,
  hamburger,
  homeDark,
  blipsDark,
  followersDark,
  libraryDark,
  historyDark,
  likedDark,
  trendingDark,
  musicDark,
  gamingDark,
  newsDark,
  settingDark,
  helpDark,
  feedbackDark,
} from './assets/images';

export const sideBarItems = [
  [
    {
      title: "home",
      iconLight: home,
      iconDark: homeDark,
      path: "/"
    }, {
      title: "blips",
      iconLight: blips,
      iconDark: blipsDark,
      path: '/blips'
    }, {
      title: "Subscriptions",
      iconLight: followers,
      iconDark: followersDark,
      path: "/subscriptions"
    },
    
     {
      title: "history",
      iconLight: history,
      iconDark: historyDark,
      path: "/history"
    }, {
      title: "liked",
      iconLight: liked,
      iconDark: likedDark,
      path: "/liked"
    }, {
      title: "trending",
      iconLight: trending,
      iconDark: trendingDark,
      path: "/trending"
    }, {
      title: "music",
      iconLight: music,
      iconDark: musicDark,
      path: "/music"
    }, {
      title: "gaming",
      iconLight: gaming,
      iconDark: gamingDark,
      path: "/gaming"
    }, {
      title: "news",
      iconLight: news,
      iconDark: newsDark,
      path: "/news"
    }
  ], [
    {
      title: "settings",
      iconLight: setting,
      iconDark: settingDark,
      path: "/settings/account"
    }, {
      title: "report history",
      iconLight: history,
      iconDark: historyDark,
      path: "/report-history"
    }, {
      title: "help",
      iconLight: help,
      iconDark: helpDark,
      path: "/help"
    }, {
      title: "send feedback",
      iconLight: feedback,
      iconDark: feedbackDark,
      path: "/feedback"
    }
  ]
]

export const settingItems = [
  {
    title: "Account",
    path: "/settings/account"
  },
  {
    title: "Notifications",
    path: "/settings/notifications"
  },
  {
    title: "Privacy",
    path: "/settings/privacy"
  },
  {
    title: "Playback and Performance",
    path: "/settings/performance&playback"
  },
  {
    title: "Downloads",
    path: "/settings/downloads"
  },
  {
    title: "Connected Apps",
    path: "/settings/connected-apps"
  },
  {
    title: "Billing and Payments",
    path: "/settings/billing&payment"
  },
  {
    title: "Advance settings",
    path: "/settings/advance"
  }
]



export const streamData = [
  {
    streamer: "Laser belch",
    category: "Neon White",
    viewers: 556,
    tags: ["English", "FirstPlayThrough"],
    description: "Check out this stream from Laser Belch"
  },
  {
    streamer: "Laser belch",
    category: "Neon White",
    viewers: 556,
    tags: ["English", "FirstPlayThrough", "SecondPlayThrough"],
    description: "Check out this stream from Laser Belch"
  },
  {
    streamer: "Laser belch",
    category: "Neon White",
    viewers: 556,
    tags: ["English", "FirstPlayThrough"],
    description: "Check out this stream from Laser Belch"
  },
  {
    streamer: "Laser belch",
    category: "Neon White",
    viewers: 556,
    tags: ["English", "FirstPlayThrough"],
    description: "Check out this stream from Laser Belch"
  },
  {
    streamer: "Laser belch",
    category: "Neon White",
    viewers: 556,
    tags: ["English", "FirstPlayThrough"],
    description: "Check out this stream from Laser Belch"
  },
];


export const initialHistoryData = [
  {
    id: "dQw4w9WgXcQ",
    title: "Building a Khrysalis Clone with React and Tailwind CSS - Full Tutorial",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    channel: "Web Dev Simplified",
    channelId: "UC-T8W79DN6PBnzomelvqJYw",
    views: "1.2M",
    uploadTime: "2 months ago",
    duration: "18:24",
    watchedAt: "2023-05-15T14:32:00",
  },
  {
    id: "FZ0cG47msEk",
    title: "React 18 New Features Explained - What You Need to Know About the Latest Update",
    thumbnail: "https://i.ytimg.com/vi/FZ0cG47msEk/mqdefault.jpg",
    channel: "Fireship",
    channelId: "UCsBjURrPoezykLs9EqgamOA",
    views: "856K",
    uploadTime: "3 weeks ago",
    duration: "10:12",
    watchedAt: "2023-05-15T10:15:00",
  },
  {
    id: "UBOj6rqRUME",
    title: "Tailwind CSS Crash Course - Build Modern Websites Without Writing CSS",
    thumbnail: "https://i.ytimg.com/vi/UBOj6rqRUME/mqdefault.jpg",
    channel: "Traversy Media",
    channelId: "UC29ju8bIPH5as8OGnQzwJyA",
    views: "2.3M",
    uploadTime: "1 year ago",
    duration: "24:56",
    watchedAt: "2023-05-15T08:45:00",
  },
  {
    id: "oxoFVqetl1E",
    title: "JavaScript Interview Questions Every Developer Should Know",
    thumbnail: "https://i.ytimg.com/vi/oxoFVqetl1E/mqdefault.jpg",
    channel: "Coding With Mosh",
    channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
    views: "1.5M",
    uploadTime: "5 months ago",
    duration: "32:18",
    watchedAt: "2023-05-14T19:20:00",
  },
  {
    id: "NO7_jgzVgbc",
    title: "How to Build a Portfolio Website That Gets You Hired",
    thumbnail: "https://i.ytimg.com/vi/NO7_jgzVgbc/mqdefault.jpg",
    channel: "Clever Programmer",
    channelId: "UCqrILQNl5Ed9Dz6CGMyvMTQ",
    views: "987K",
    uploadTime: "7 months ago",
    duration: "45:22",
    watchedAt: "2023-05-14T16:30:00",
  },
  {
    id: "9zBsdzdE4sM",
    title: "CSS Grid Tutorial - Complete Guide to Building Layouts with Grid",
    thumbnail: "https://i.ytimg.com/vi/9zBsdzdE4sM/mqdefault.jpg",
    channel: "Kevin Powell",
    channelId: "UCJZv4d5rbIKd4QHMPkcABCw",
    views: "1.1M",
    uploadTime: "8 months ago",
    duration: "28:34",
    watchedAt: "2023-05-14T14:15:00",
  },
  {
    id: "ydkQlJhodio",
    title: "TypeScript for React Developers - Why You Should Use It",
    thumbnail: "https://i.ytimg.com/vi/ydkQlJhodio/mqdefault.jpg",
    channel: "Ben Awad",
    channelId: "UC-8QAzbLcRglXeN_MY9blyw",
    views: "723K",
    uploadTime: "4 months ago",
    duration: "15:42",
    watchedAt: "2023-05-10T20:30:00",
  },
  {
    id: "__mSgDEOyv8",
    title: "Next.js vs React - Which One Should You Choose for Your Project?",
    thumbnail: "https://i.ytimg.com/vi/__mSgDEOyv8/mqdefault.jpg",
    channel: "Academind",
    channelId: "UCSJbGtTlrDami-tDGPUV9-w",
    views: "1.8M",
    uploadTime: "2 months ago",
    duration: "22:15",
    watchedAt: "2023-05-10T18:15:00",
  },
  {
    id: "bbkBuqC1rU4",
    title: "Redux Toolkit Tutorial - State Management in React Made Easy",
    thumbnail: "https://i.ytimg.com/vi/bbkBuqC1rU4/mqdefault.jpg",
    channel: "Programming with Mosh",
    channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
    views: "654K",
    uploadTime: "3 months ago",
    duration: "19:48",
    watchedAt: "2023-05-10T15:20:00",
  },
  {
    id: "l2v6RjDoB2U",
    title: "How to Deploy a React App to Vercel - Complete Deployment Guide",
    thumbnail: "https://i.ytimg.com/vi/l2v6RjDoB2U/mqdefault.jpg",
    channel: "Sonny Sangha",
    channelId: "UCqeTj_QAnNlmt7FwzNwHZnA",
    views: "432K",
    uploadTime: "1 month ago",
    duration: "12:36",
    watchedAt: "2023-05-10T13:10:00",
  },
  {
    id: "5fLW5Q5ODiE",
    title: "React Performance Optimization Techniques You Need to Know",
    thumbnail: "https://i.ytimg.com/vi/5fLW5Q5ODiE/mqdefault.jpg",
    channel: "Jack Herrington",
    channelId: "UC6vRUjYqDuoUsYsku86Lrsw",
    views: "876K",
    uploadTime: "6 months ago",
    duration: "27:14",
    watchedAt: "2023-05-08T11:45:00",
  },
  {
    id: "7CqJlxBYj-M",
    title: "Building a Full Stack App with React, Node.js, and MongoDB",
    thumbnail: "https://i.ytimg.com/vi/7CqJlxBYj-M/mqdefault.jpg",
    channel: "JavaScript Mastery",
    channelId: "UCmXmlB4-HJytD7wek0Uo97A",
    views: "1.3M",
    uploadTime: "9 months ago",
    duration: "1:02:45",
    watchedAt: "2023-05-08T09:30:00",
  },
  {
    id: "JJSoEo8JSnc",
    title: "CSS Flexbox Tutorial - How to Build Modern Layouts",
    thumbnail: "https://i.ytimg.com/vi/JJSoEo8JSnc/mqdefault.jpg",
    channel: "Traversy Media",
    channelId: "UC29ju8bIPH5as8OGnQzwJyA",
    views: "2.7M",
    uploadTime: "1 year ago",
    duration: "20:32",
    watchedAt: "2023-05-05T16:20:00",
  },
  {
    id: "Ul3y1LXxzdU",
    title: "React Router v6 Tutorial - Complete Guide to Routing in React",
    thumbnail: "https://i.ytimg.com/vi/Ul3y1LXxzdU/mqdefault.jpg",
    channel: "Net Ninja",
    channelId: "UCW5YeuERMmlnqo4oq8vwUpg",
    views: "945K",
    uploadTime: "5 months ago",
    duration: "16:28",
    watchedAt: "2023-05-05T14:15:00",
  },
  {
    id: "Uszj_k0DGsg",
    title: "How to Use GitHub Like a Pro - Advanced Git Techniques",
    thumbnail: "https://i.ytimg.com/vi/Uszj_k0DGsg/mqdefault.jpg",
    channel: "Fireship",
    channelId: "UCsBjURrPoezykLs9EqgamOA",
    views: "1.6M",
    uploadTime: "7 months ago",
    duration: "14:52",
    watchedAt: "2023-05-05T10:30:00",
  },
]

export const initialSubscriptionsData = [
  {
    id: "UCsBjURrPoezykLs9EqgamOA",
    name: "Fireship",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/h5Jml_Ckp1D8LqzEUlUaLRiKPbmHJ4Vt4JGhTzpxD9LVgg8M-Mf5K8ORNfVTLKGxH0H_2gQYOg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "2.4M",
    description:
      "High-intensity ⚡ code tutorials and tech news to help you ship your app faster. New videos every week covering the topics that real developers need to know about.",
    notificationSetting: "all",
    lastUpload: {
      videoId: "dQw4w9WgXcQ",
      title: "10 React Antipatterns to Avoid - Code This, Not That!",
      timeAgo: "2 days ago",
      date: "2023-05-13T14:00:00",
    },
  },
  {
    id: "UC8butISFwT-Wl7EV0hUK0BQ",
    name: "freeCodeCamp.org",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQcJtp9XfTdQx5-TeoFpCOeXGGQQC8GIQSg=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-bpfJE=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "8.2M",
    description:
      "Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers.",
    notificationSetting: "personalized",
    lastUpload: {
      videoId: "FZ0cG47msEk",
      title: "Learn Python Full Course for Beginners",
      timeAgo: "1 week ago",
      date: "2023-05-08T10:00:00",
    },
  },
  {
    id: "UCW5YeuERMmlnqo4oq8vwUpg",
    name: "Net Ninja",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKbpSojje_-tkBQecNtFuPdSCrg3ZT0FhaYjln9k0g=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/L8Jb0vEKKJU7-P9N_LRjQSwUhK1IY_FZwbKI03gu0_MXAcU8UhYJBUKWWH0W7jYvBN2qWJOS=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "1.2M",
    description:
      "Black-belt your web development skills. Over 1000 free programming tutorials about modern JavaScript, Node.js, React, Vue.js, Firebase, MongoDB and much more.",
    notificationSetting: "none",
    lastUpload: {
      videoId: "UBOj6rqRUME",
      title: "React Native Crash Course",
      timeAgo: "3 days ago",
      date: "2023-05-12T16:30:00",
    },
  },
  {
    id: "UC29ju8bIPH5as8OGnQzwJyA",
    name: "Traversy Media",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/I6_E2PxV5vNQVKWR3NsSsXb5h7ZnFtoZGFXookgFjGI4_iZ3O0-jybuilders-Wy9Dl0jUQaXYnGTY=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "2.1M",
    description:
      "Traversy Media features the best online web development and programming tutorials for all of the latest web technologies including Node.js, Angular, React, Vue.js, PHP, Rails, HTML, CSS and much more.",
    notificationSetting: "personalized",
    lastUpload: {
      videoId: "oxoFVqetl1E",
      title: "Full Stack MERN Application Tutorial",
      timeAgo: "5 days ago",
      date: "2023-05-10T12:00:00",
    },
  },
  {
    id: "UCvuY904el7JvBlPbdqbfguw",
    name: "Maximilian Schwarzmüller",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/ytc/APkrFKZJ-JGzAiMb1Vb6lYfCFESZIYQ9QF6DhTLvl_BqUQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "780K",
    description:
      "I'm Manuel Lorenz, a passionate web developer and instructor focused on Angular, React, Vue and other frontend technologies.",
    notificationSetting: "all",
    lastUpload: {
      videoId: "NO7_jgzVgbc",
      title: "Angular vs React - Which Framework to Learn in 2023",
      timeAgo: "2 weeks ago",
      date: "2023-05-01T09:15:00",
    },
  },
  {
    id: "UCJZv4d5rbIKd4QHMPkcABCw",
    name: "Kevin Powell",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY8J5-d_A=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/ytc/APkrFKYmhu0i_-VSU4v6X4HHgfZIHzqwTvMJGkrN2bxJ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "950K",
    description:
      "Helping you become a better frontend developer, mostly focusing on HTML and CSS, with some JavaScript thrown in for good measure.",
    notificationSetting: "none",
    lastUpload: {
      videoId: "9zBsdzdE4sM",
      title: "CSS Grid Made Simple",
      timeAgo: "1 day ago",
      date: "2023-05-14T18:30:00",
    },
  },
  {
    id: "UC-8QAzbLcRglXeN_MY9blyw",
    name: "Ben Awad",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKYRGnQADYYGUANq_sBUMyjL1fZQR3I3-nt1JTtB=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/ytc/APkrFKYRGnQADYYGUANq_sBUMyjL1fZQR3I3-nt1JTtB=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "340K",
    description:
      "I make videos about programming, mostly focusing on web development with React, TypeScript, GraphQL, and more.",
    notificationSetting: "personalized",
    lastUpload: {
      videoId: "ydkQlJhodio",
      title: "Building a Full Stack App with Next.js, Prisma, and PostgreSQL",
      timeAgo: "3 weeks ago",
      date: "2023-04-25T14:45:00",
    },
  },
  {
    id: "UCSJbGtTlrDami-tDGPUV9-w",
    name: "Academind",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKaqQkSJAqVbmMj0z0eAGM8IeVLUPZvXrbjHE4Nt=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/ytc/APkrFKaqQkSJAqVbmMj0z0eAGM8IeVLUPZvXrbjHE4Nt=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "1.9M",
    description:
      "Online education that actually works! Master the most recent technologies through project-based learning.",
    notificationSetting: "all",
    lastUpload: {
      videoId: "__mSgDEOyv8",
      title: "React 18 - Complete Guide",
      timeAgo: "4 days ago",
      date: "2023-05-11T11:20:00",
    },
  },
  {
    id: "UCWv7vMbMWH4-V0ZXdmDpPBA",
    name: "Programming with Mosh",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKaQMVMjk5Gl5EHURhR3-XKnEICkESG-JbrY4YEPbA=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/ytc/APkrFKaQMVMjk5Gl5EHURhR3-XKnEICkESG-JbrY4YEPbA=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "3.8M",
    description:
      "I train professional software engineers that companies love to hire. My courses are practical, concise and engaging.",
    notificationSetting: "personalized",
    lastUpload: {
      videoId: "bbkBuqC1rU4",
      title: "JavaScript Algorithms and Data Structures",
      timeAgo: "1 week ago",
      date: "2023-05-08T08:00:00",
    },
  },
  {
    id: "UCqeTj_QAnNlmt7FwzNwHZnA",
    name: "Sonny Sangha",
    avatar:
      "https://yt3.googleusercontent.com/FjeN785fVWx0Hd-1MZHI3g3HImv6_xT6YYPvS_d_9FhNNQq-EFPFMdaHIaAJHfUW7Z1vtkzvhw=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/FjeN785fVWx0Hd-1MZHI3g3HImv6_xT6YYPvS_d_9FhNNQq-EFPFMdaHIaAJHfUW7Z1vtkzvhw=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "420K",
    description:
      "I'm a software developer who makes videos about modern web development with a focus on React, Next.js, and full-stack applications.",
    notificationSetting: "none",
    lastUpload: {
      videoId: "l2v6RjDoB2U",
      title: "Build a Twitter Clone with Next.js 13",
      timeAgo: "6 days ago",
      date: "2023-05-09T15:30:00",
    },
  },
  {
    id: "UC6vRUjYqDuoUsYsku86Lrsw",
    name: "Jack Herrington",
    avatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZ_CKzGy9XFbHZmPqQWYMY9vVCYxhNNxUmIAFSLuA=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/ytc/APkrFKZ_CKzGy9XFbHZmPqQWYMY9vVCYxhNNxUmIAFSLuA=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "210K",
    description: "Frontend videos from basic to very advanced; tutorials, technology deep-dives and more!",
    notificationSetting: "all",
    lastUpload: {
      videoId: "5fLW5Q5ODiE",
      title: "React Server Components Explained",
      timeAgo: "2 days ago",
      date: "2023-05-13T10:15:00",
    },
  },
  {
    id: "UCmXmlB4-HJytD7wek0Uo97A",
    name: "JavaScript Mastery",
    avatar:
      "https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "980K",
    description:
      "Master modern web development with a project-based approach. JavaScript, React.js, Next.js, and more.",
    notificationSetting: "personalized",
    lastUpload: {
      videoId: "7CqJlxBYj-M",
      title: "Build and Deploy a Modern Web 3.0 Blockchain App",
      timeAgo: "3 days ago",
      date: "2023-05-12T09:30:00",
    },
  },
]

export const initialLikedVideos = [
  {
    id: "dQw4w9WgXcQ",
    title: "React 18 New Features Explained - What You Need to Know About the Latest Update",
    thumbnail: "https://i.ytimg.com/vi/FZ0cG47msEk/maxresdefault.jpg",
    channelName: "Fireship",
    channelId: "UCsBjURrPoezykLs9EqgamOA",
    channelAvatar: "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    views: 856000,
    publishedAt: "2023-03-15T10:15:00",
    duration: 612, // 10:12
  },
  {
    id: "UBOj6rqRUME",
    title: "Tailwind CSS Crash Course - Build Modern Websites Without Writing CSS",
    thumbnail: "https://i.ytimg.com/vi/UBOj6rqRUME/maxresdefault.jpg",
    channelName: "Traversy Media",
    channelId: "UC29ju8bIPH5as8OGnQzwJyA",
    channelAvatar: "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
    views: 2300000,
    publishedAt: "2022-05-15T08:45:00",
    duration: 1496, // 24:56
  },
  {
    id: "oxoFVqetl1E",
    title: "JavaScript Interview Questions Every Developer Should Know",
    thumbnail: "https://i.ytimg.com/vi/oxoFVqetl1E/maxresdefault.jpg",
    channelName: "Coding With Mosh",
    channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
    channelAvatar: "https://yt3.googleusercontent.com/ytc/APkrFKaQMVMjk5Gl5EHURhR3-XKnEICkESG-JbrY4YEPbA=s176-c-k-c0x00ffffff-no-rj",
    views: 1500000,
    publishedAt: "2022-12-14T19:20:00",
    duration: 1938, // 32:18
  },
  {
    id: "NO7_jgzVgbc",
    title: "How to Build a Portfolio Website That Gets You Hired",
    thumbnail: "https://i.ytimg.com/vi/NO7_jgzVgbc/maxresdefault.jpg",
    channelName: "Clever Programmer",
    channelId: "UCqrILQNl5Ed9Dz6CGMyvMTQ",
    channelAvatar: "https://yt3.googleusercontent.com/ytc/APkrFKY9U5DGVRHMd8MvY9-vYGZQpVEZEhy-TaVJsgZn=s176-c-k-c0x00ffffff-no-rj",
    views: 987000,
    publishedAt: "2022-10-14T16:30:00",
    duration: 2722, // 45:22
  },
  {
    id: "9zBsdzdE4sM",
    title: "CSS Grid Tutorial - Complete Guide to Building Layouts with Grid",
    thumbnail: "https://i.ytimg.com/vi/9zBsdzdE4sM/maxresdefault.jpg",
    channelName: "Kevin Powell",
    channelId: "UCJZv4d5rbIKd4QHMPkcABCw",
    channelAvatar: "https://yt3.googleusercontent.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY8J5-d_A=s176-c-k-c0x00ffffff-no-rj",
    views: 1100000,
    publishedAt: "2022-09-14T14:15:00",
    duration: 1714, // 28:34
  },
  {
    id: "ydkQlJhodio",
    title: "TypeScript for React Developers - Why You Should Use It",
    thumbnail: "https://i.ytimg.com/vi/ydkQlJhodio/maxresdefault.jpg",
    channelName: "Ben Awad",
    channelId: "UC-8QAzbLcRglXeN_MY9blyw",
    channelAvatar: "https://yt3.googleusercontent.com/ytc/APkrFKYRGnQADYYGUANq_sBUMyjL1fZQR3I3-nt1JTtB=s176-c-k-c0x00ffffff-no-rj",
    views: 723000,
    publishedAt: "2023-01-10T20:30:00",
    duration: 942, // 15:42
  },
  {
    id: "__mSgDEOyv8",
    title: "Next.js vs React - Which One Should You Choose for Your Project?",
    thumbnail: "https://i.ytimg.com/vi/__mSgDEOyv8/maxresdefault.jpg",
    channelName: "Academind",
    channelId: "UCSJbGtTlrDami-tDGPUV9-w",
    channelAvatar: "https://yt3.googleusercontent.com/ytc/APkrFKaqQkSJAqVbmMj0z0eAGM8IeVLUPZvXrbjHE4Nt=s176-c-k-c0x00ffffff-no-rj",
    views: 1800000,
    publishedAt: "2023-03-10T18:15:00",
    duration: 1335, // 22:15
  },
  {
    id: "bbkBuqC1rU4",
    title: "Redux Toolkit Tutorial - State Management in React Made Easy",
    thumbnail: "https://i.ytimg.com/vi/bbkBuqC1rU4/maxresdefault.jpg",
    channelName: "Programming with Mosh",
    channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
    channelAvatar: "https://yt3.googleusercontent.com/ytc/APkrFKaQMVMjk5Gl5EHURhR3-XKnEICkESG-JbrY4YEPbA=s176-c-k-c0x00ffffff-no-rj",
    views: 654000,
    publishedAt: "2023-02-10T15:20:00",
    duration: 1188, // 19:48
  },
]

export const initialTrendingVideos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Never Gonna Give You Up - Rick Astley (Official Music Video)",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    channelName: "Rick Astley",
    channelId: "UCuAXFkgsw1L7xaCfnd5JJOw",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZ3MkQXGz5NUttNUMXgCDvnwvwXRJfGUUUYNcDr=s176-c-k-c0x00ffffff-no-rj",
    views: 1256000000,
    publishedAt: "2009-10-25T06:57:33",
    duration: 213, // 3:33
    category: "Music",
    trending: 1,
  },
  {
    id: "jNQXAC9IVRw",
    title: "Me at the zoo",
    thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
    channelName: "jawed",
    channelId: "UC4QobU6STFB0P71PMvOGN5A",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQcJtp9XfTdQx5-TeoFpCOeXGGQQC8GIQSg=s176-c-k-c0x00ffffff-no-rj",
    views: 258000000,
    publishedAt: "2005-04-23T14:31:52",
    duration: 19, // 0:19
    category: "Entertainment",
    trending: 2,
  },
  {
    id: "9bZkp7q19f0",
    title: "PSY - GANGNAM STYLE(강남스타일) M/V",
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    channelName: "officialpsy",
    channelId: "UCrDkAvwZum-UTjHmzDI2iIw",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
    views: 4700000000,
    publishedAt: "2012-07-15T07:46:32",
    duration: 253, // 4:13
    category: "Music",
    trending: 3,
  },
  {
    id: "FZ0cG47msEk",
    title: "React 18 New Features Explained - What You Need to Know About the Latest Update",
    thumbnail: "https://i.ytimg.com/vi/FZ0cG47msEk/maxresdefault.jpg",
    channelName: "Fireship",
    channelId: "UCsBjURrPoezykLs9EqgamOA",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    views: 856000,
    publishedAt: "2023-03-15T10:15:00",
    duration: 612, // 10:12
    category: "Technology",
    trending: 4,
  },
  {
    id: "UBOj6rqRUME",
    title: "Tailwind CSS Crash Course - Build Modern Websites Without Writing CSS",
    thumbnail: "https://i.ytimg.com/vi/UBOj6rqRUME/maxresdefault.jpg",
    channelName: "Traversy Media",
    channelId: "UC29ju8bIPH5as8OGnQzwJyA",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
    views: 2300000,
    publishedAt: "2022-05-15T08:45:00",
    duration: 1496, // 24:56
    category: "Technology",
    trending: 5,
  },
  {
    id: "oxoFVqetl1E",
    title: "JavaScript Interview Questions Every Developer Should Know",
    thumbnail: "https://i.ytimg.com/vi/oxoFVqetl1E/maxresdefault.jpg",
    channelName: "Coding With Mosh",
    channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKaQMVMjk5Gl5EHURhR3-XKnEICkESG-JbrY4YEPbA=s176-c-k-c0x00ffffff-no-rj",
    views: 1500000,
    publishedAt: "2022-12-14T19:20:00",
    duration: 1938, // 32:18
    category: "Technology",
    trending: 6,
  },
  {
    id: "NO7_jgzVgbc",
    title: "How to Build a Portfolio Website That Gets You Hired",
    thumbnail: "https://i.ytimg.com/vi/NO7_jgzVgbc/maxresdefault.jpg",
    channelName: "Clever Programmer",
    channelId: "UCqrILQNl5Ed9Dz6CGMyvMTQ",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKY9U5DGVRHMd8MvY9-vYGZQpVEZEhy-TaVJsgZn=s176-c-k-c0x00ffffff-no-rj",
    views: 987000,
    publishedAt: "2022-10-14T16:30:00",
    duration: 2722, // 45:22
    category: "Technology",
    trending: 7,
  },
  {
    id: "9zBsdzdE4sM",
    title: "CSS Grid Tutorial - Complete Guide to Building Layouts with Grid",
    thumbnail: "https://i.ytimg.com/vi/9zBsdzdE4sM/maxresdefault.jpg",
    channelName: "Kevin Powell",
    channelId: "UCJZv4d5rbIKd4QHMPkcABCw",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY8J5-d_A=s176-c-k-c0x00ffffff-no-rj",
    views: 1100000,
    publishedAt: "2022-09-14T14:15:00",
    duration: 1714, // 28:34
    category: "Technology",
    trending: 8,
  },
  {
    id: "l2v6RjDoB2U",
    title: "How to Deploy a React App to Vercel - Complete Deployment Guide",
    thumbnail: "https://i.ytimg.com/vi/l2v6RjDoB2U/maxresdefault.jpg",
    channelName: "Sonny Sangha",
    channelId: "UCqeTj_QAnNlmt7FwzNwHZnA",
    channelAvatar:
      "https://yt3.googleusercontent.com/FjeN785fVWx0Hd-1MZHI3g3HImv6_xT6YYPvS_d_9FhNNQq-EFPFMdaHIaAJHfUW7Z1vtkzvhw=s176-c-k-c0x00ffffff-no-rj",
    views: 432000,
    publishedAt: "2023-04-10T13:10:00",
    duration: 756, // 12:36
    category: "Technology",
    trending: 9,
  },
  {
    id: "5fLW5Q5ODiE",
    title: "React Performance Optimization Techniques You Need to Know",
    thumbnail: "https://i.ytimg.com/vi/5fLW5Q5ODiE/maxresdefault.jpg",
    channelName: "Jack Herrington",
    channelId: "UC6vRUjYqDuoUsYsku86Lrsw",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZ_CKzGy9XFbHZmPqQWYMY9vVCYxhNNxUmIAFSLuA=s176-c-k-c0x00ffffff-no-rj",
    views: 876000,
    publishedAt: "2022-11-08T11:45:00",
    duration: 1634, // 27:14
    category: "Technology",
    trending: 10,
  },
  {
    id: "7CqJlxBYj-M",
    title: "Building a Full Stack App with React, Node.js, and MongoDB",
    thumbnail: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
    channelName: "JavaScript Mastery",
    channelId: "UCmXmlB4-HJytD7wek0Uo97A",
    channelAvatar:
      "https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj",
    views: 1300000,
    publishedAt: "2022-08-08T09:30:00",
    duration: 3765, // 1:02:45
    category: "Technology",
    trending: 11,
  },
  {
    id: "JJSoEo8JSnc",
    title: "CSS Flexbox Tutorial - How to Build Modern Layouts",
    thumbnail: "https://i.ytimg.com/vi/JJSoEo8JSnc/maxresdefault.jpg",
    channelName: "Traversy Media",
    channelId: "UC29ju8bIPH5as8OGnQzwJyA",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
    views: 2700000,
    publishedAt: "2022-05-05T16:20:00",
    duration: 1232, // 20:32
    category: "Technology",
    trending: 12,
  },
  {
    id: "Ul3y1LXxzdU",
    title: "React Router v6 Tutorial - Complete Guide to Routing in React",
    thumbnail: "https://i.ytimg.com/vi/Ul3y1LXxzdU/maxresdefault.jpg",
    channelName: "Net Ninja",
    channelId: "UCW5YeuERMmlnqo4oq8vwUpg",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKbpSojje_-tkBQecNtFuPdSCrg3ZT0FhaYjln9k0g=s176-c-k-c0x00ffffff-no-rj",
    views: 945000,
    publishedAt: "2022-12-05T14:15:00",
    duration: 988, // 16:28
    category: "Technology",
    trending: 13,
  },
  {
    id: "Uszj_k0DGsg",
    title: "How to Use GitHub Like a Pro - Advanced Git Techniques",
    thumbnail: "https://i.ytimg.com/vi/Uszj_k0DGsg/maxresdefault.jpg",
    channelName: "Fireship",
    channelId: "UCsBjURrPoezykLs9EqgamOA",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    views: 1600000,
    publishedAt: "2022-10-05T10:30:00",
    duration: 892, // 14:52
    category: "Technology",
    trending: 14,
  },
  {
    id: "XqZsoesa55w",
    title: "Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children",
    thumbnail: "https://i.ytimg.com/vi/XqZsoesa55w/maxresdefault.jpg",
    channelName: "Pinkfong Baby Shark - Kids' Songs & Stories",
    channelId: "UCcdwLMPsaU2ezNSJU1nFoBQ",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
    views: 13000000000,
    publishedAt: "2016-06-17T02:17:31",
    duration: 140, // 2:20
    category: "Music",
    trending: 15,
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Luis Fonsi - Despacito ft. Daddy Yankee",
    thumbnail: "https://i.ytimg.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
    channelName: "Luis Fonsi",
    channelId: "UCxoq-PAQeAdk_zyg8YS0JqA",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
    views: 8100000000,
    publishedAt: "2017-01-12T15:01:17",
    duration: 282, // 4:42
    category: "Music",
    trending: 16,
  },
  {
    id: "RgKAFK5djSk",
    title: "Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack",
    thumbnail: "https://i.ytimg.com/vi/RgKAFK5djSk/maxresdefault.jpg",
    channelName: "Wiz Khalifa",
    channelId: "UChEfLCaRbcqClfOoNT0aDJg",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
    views: 5800000000,
    publishedAt: "2015-04-06T14:00:11",
    duration: 237, // 3:57
    category: "Music",
    trending: 17,
  },
  {
    id: "pRpeEdMmmQ0",
    title: "Minecraft, But It Gets More Realistic Every Minute",
    thumbnail: "https://i.ytimg.com/vi/pRpeEdMmmQ0/maxresdefault.jpg",
    channelName: "Fundy",
    channelId: "UCqVEHtQoXHmUCfJ-9smpTSg",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
    views: 24000000,
    publishedAt: "2021-02-26T18:00:11",
    duration: 1021, // 17:01
    category: "Gaming",
    trending: 18,
  },
  {
    id: "n8X9_MgEdCg",
    title: "I Survived 100 Days in Ancient Greece on Minecraft...",
    thumbnail: "https://i.ytimg.com/vi/n8X9_MgEdCg/maxresdefault.jpg",
    channelName: "Forge Labs",
    channelId: "UCElYTbuQdTaPni39c92c6yw",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
    views: 12000000,
    publishedAt: "2022-01-15T16:00:00",
    duration: 3602, // 1:00:02
    category: "Gaming",
    trending: 19,
  },
  {
    id: "0iOSVD1fitI",
    title: "I Built the FASTEST Car in Forza Horizon 5",
    thumbnail: "https://i.ytimg.com/vi/0iOSVD1fitI/maxresdefault.jpg",
    channelName: "DanTDM",
    channelId: "UCS5Oz6CHmeoF7vSad0qqXfw",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
    views: 8500000,
    publishedAt: "2022-03-10T14:00:00",
    duration: 1256, // 20:56
    category: "Gaming",
    trending: 20,
  },
  {
    id: "dNL6RwymoNg",
    title: "We Made the World's Largest Jello Pool",
    thumbnail: "https://i.ytimg.com/vi/dNL6RwymoNg/maxresdefault.jpg",
    channelName: "MrBeast",
    channelId: "UCX6OQ3DkcsbYNE6H8uQQuVA",
    channelAvatar:
      "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
    views: 112000000,
    publishedAt: "2022-04-28T20:00:00",
    duration: 608, // 10:08
    category: "Entertainment",
    trending: 21,
  },
]

export const initialMusicData = [
  // Recommended Section
  {
    id: "rec1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a",
    duration: 202, // 3:22
    type: "track",
    section: "Recommended for you",
  },
  {
    id: "rec2",
    title: "As It Was",
    artist: "Harry Styles",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0",
    duration: 167, // 2:47
    type: "track",
    section: "Recommended for you",
  },
  {
    id: "rec3",
    title: "Bad Habits",
    artist: "Ed Sheeran",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b273ef24c3fdbf856340d55cfeb2",
    duration: 231, // 3:51
    type: "track",
    section: "Recommended for you",
  },
  {
    id: "rec4",
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b273be865dfb3433af1a022dd2d1",
    duration: 141, // 2:21
    type: "track",
    section: "Recommended for you",
  },
  {
    id: "rec5",
    title: "Heat Waves",
    artist: "Glass Animals",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b2739e495fb707973f3390850eea",
    duration: 238, // 3:58
    type: "track",
    section: "Recommended for you",
  },

  // New Releases Section
  {
    id: "new1",
    title: "Midnights",
    artist: "Taylor Swift",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5",
    type: "album",
    section: "New Releases",
  },
  {
    id: "new2",
    title: "Un Verano Sin Ti",
    artist: "Bad Bunny",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b273a0c71d8b62e53dad38acb8c7",
    type: "album",
    section: "New Releases",
  },
  {
    id: "new3",
    title: "Harry's House",
    artist: "Harry Styles",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0",
    type: "album",
    section: "New Releases",
  },
  {
    id: "new4",
    title: "Renaissance",
    artist: "Beyoncé",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b273a7ea08ab3914c5fb2084a8ac",
    type: "album",
    section: "New Releases",
  },
  {
    id: "new5",
    title: "Honestly, Nevermind",
    artist: "Drake",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b273f12686baf7156d27bbe67281",
    type: "album",
    section: "New Releases",
  },

  // Top Charts Section
  {
    id: "top1",
    title: "Unholy",
    artist: "Sam Smith, Kim Petras",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b273a935e4689f15953311772cc4",
    duration: 156, // 2:36
    type: "track",
    section: "Top Charts",
  },
  {
    id: "top2",
    title: "Anti-Hero",
    artist: "Taylor Swift",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5",
    duration: 200, // 3:20
    type: "track",
    section: "Top Charts",
  },
  {
    id: "top3",
    title: "I'm Good (Blue)",
    artist: "David Guetta & Bebe Rexha",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b273933c036cd61cd40d3f17a9c4",
    duration: 175, // 2:55
    type: "track",
    section: "Top Charts",
  },
  {
    id: "top4",
    title: "Lift Me Up",
    artist: "Rihanna",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b273d0a2854b28ea37b7c2d0d541",
    duration: 196, // 3:16
    type: "track",
    section: "Top Charts",
  },
  {
    id: "top5",
    title: "Calm Down",
    artist: "Rema, Selena Gomez",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b273c5903000fe0c9d30fd8e9939",
    duration: 239, // 3:59
    type: "track",
    section: "Top Charts",
  },
]


// Mock gaming videos data
export const getGamingVideos = () => {
  return [
    {
      id: "pRpeEdMmmQ0",
      title: "Minecraft, But It Gets More Realistic Every Minute",
      thumbnail: "https://i.ytimg.com/vi/pRpeEdMmmQ0/maxresdefault.jpg",
      channelName: "Fundy",
      channelId: "UCqVEHtQoXHmUCfJ-9smpTSg",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      views: 24000000,
      publishedAt: "2021-02-26T18:00:11Z",
      duration: 1021, // 17:01
      gameName: "Minecraft",
      categories: ["minecraft"],
      isLive: false,
    },
    {
      id: "n8X9_MgEdCg",
      title: "I Survived 100 Days in Ancient Greece on Minecraft...",
      thumbnail: "https://i.ytimg.com/vi/n8X9_MgEdCg/maxresdefault.jpg",
      channelName: "Forge Labs",
      channelId: "UCElYTbuQdTaPni39c92c6yw",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      views: 12000000,
      publishedAt: "2022-01-15T16:00:00Z",
      duration: 3602, // 1:00:02
      gameName: "Minecraft",
      categories: ["minecraft"],
      isLive: false,
    },
    {
      id: "0iOSVD1fitI",
      title: "I Built the FASTEST Car in Forza Horizon 5",
      thumbnail: "https://i.ytimg.com/vi/0iOSVD1fitI/maxresdefault.jpg",
      channelName: "DanTDM",
      channelId: "UCS5Oz6CHmeoF7vSad0qqXfw",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      views: 8500000,
      publishedAt: "2022-03-10T14:00:00Z",
      duration: 1256, // 20:56
      gameName: "Forza Horizon 5",
      categories: ["action"],
      isLive: false,
    },
    {
      id: "live1",
      title: "🔴 LIVE: Minecraft Hardcore Survival - Day 100!",
      thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      channelName: "PewDiePie",
      channelId: "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      liveViewers: 125000,
      publishedAt: new Date().toISOString(),
      gameName: "Minecraft",
      categories: ["minecraft", "live"],
      isLive: true,
    },
    {
      id: "live2",
      title: "🔴 Call of Duty: Modern Warfare III - Multiplayer Gameplay",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      channelName: "Dr Disrespect",
      channelId: "UC6Ocu9G2hxDUw3jSxn5AJiA",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      liveViewers: 87500,
      publishedAt: new Date().toISOString(),
      gameName: "Call of Duty: MW III",
      categories: ["fps", "live"],
      isLive: true,
    },
    {
      id: "Ul3y1LXxzdU",
      title: "The Elder Scrolls VI - Official Teaser Trailer",
      thumbnail: "https://i.ytimg.com/vi/OkFdqqyI8y4/maxresdefault.jpg",
      channelName: "Bethesda Softworks",
      channelId: "UCvZHe-SP3xC7DdOk4Ri8QBw",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      views: 18500000,
      publishedAt: "2023-01-05T14:15:00Z",
      duration: 88, // 1:28
      gameName: "The Elder Scrolls VI",
      categories: ["rpg", "recently-uploaded"],
      isLive: false,
    },
    {
      id: "Uszj_k0DGsg",
      title: "Elden Ring: Shadow of the Erdtree - Official Gameplay Reveal",
      thumbnail: "https://i.ytimg.com/vi/YQzPyf0hsBI/maxresdefault.jpg",
      channelName: "BANDAI NAMCO",
      channelId: "UC0ydVlWiJv0Np_2tQrXLqvA",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      views: 12600000,
      publishedAt: "2023-02-05T10:30:00Z",
      duration: 192, // 3:12
      gameName: "Elden Ring",
      categories: ["rpg", "action", "recently-uploaded"],
      isLive: false,
    },
    {
      id: "live3",
      title: "🔴 League of Legends - Ranked Gameplay",
      thumbnail: "https://i.ytimg.com/vi/mPL2OuoiT9s/maxresdefault.jpg",
      channelName: "Faker",
      channelId: "UC9TOpT3N5rJLGKPiJro_ctA",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      liveViewers: 65000,
      publishedAt: new Date().toISOString(),
      gameName: "League of Legends",
      categories: ["strategy", "live"],
      isLive: true,
    },
    {
      id: "dQw4w9WgXcQ1",
      title: "Starfield - 15 Tips & Tricks The Game Doesn't Tell You",
      thumbnail: "https://i.ytimg.com/vi/LKEJv7XGcDY/maxresdefault.jpg",
      channelName: "GameSpot",
      channelId: "UCbu2SsF-Or3Rsw3M5gCjCrQ",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      views: 2500000,
      publishedAt: "2023-03-15T06:57:33Z",
      duration: 853, // 14:13
      gameName: "Starfield",
      categories: ["rpg", "recently-uploaded"],
      isLive: false,
    },
    {
      id: "dQw4w9WgXcQ2",
      title: "Cyberpunk 2077: Phantom Liberty - Official Gameplay Trailer",
      thumbnail: "https://i.ytimg.com/vi/PbVKBoDuhZ0/maxresdefault.jpg",
      channelName: "CD PROJEKT RED",
      channelId: "UC4zyoIAzmdsgpDZQfO1-lSA",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      views: 8700000,
      publishedAt: "2023-03-20T12:34:56Z",
      duration: 210, // 3:30
      gameName: "Cyberpunk 2077",
      categories: ["rpg", "action", "recently-uploaded"],
      isLive: false,
    },
    {
      id: "dQw4w9WgXcQ3",
      title: "Valorant - How to Rank Up Fast in 2023",
      thumbnail: "https://i.ytimg.com/vi/ulOvv_yYLTc/maxresdefault.jpg",
      channelName: "Valorant Guides",
      channelId: "UC1Ue7TuX3iH4y8d9QAi8FHQ",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      views: 1400000,
      publishedAt: "2023-02-17T06:57:33Z",
      duration: 725, // 12:05
      gameName: "Valorant",
      categories: ["fps"],
      isLive: false,
    },
    {
      id: "dQw4w9WgXcQ4",
      title: "Civilization VI - New Frontier Pass Overview",
      thumbnail: "https://i.ytimg.com/vi/VW1m7sPJM4Y/maxresdefault.jpg",
      channelName: "Civilization",
      channelId: "UC5OrDvL9DscpcAstz7JnQGA",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      views: 950000,
      publishedAt: "2023-01-03T08:45:00Z",
      duration: 394, // 6:34
      gameName: "Civilization VI",
      categories: ["strategy"],
      isLive: false,
    },
    {
      id: "dQw4w9WgXcQ5",
      title: "Age of Empires IV - Gameplay Tips & Tricks",
      thumbnail: "https://i.ytimg.com/vi/TTgQnXhD4Q8/maxresdefault.jpg",
      channelName: "Age of Empires",
      channelId: "UCiMhD4jzUqG-IgPzUmmytRQ",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      views: 750000,
      publishedAt: "2023-01-01T14:30:00Z",
      duration: 855, // 14:15
      gameName: "Age of Empires IV",
      categories: ["strategy"],
      isLive: false,
    },
    {
      id: "dQw4w9WgXcQ6",
      title: "Apex Legends - Season 18 Gameplay Trailer",
      thumbnail: "https://i.ytimg.com/vi/innmNewjkuM/maxresdefault.jpg",
      channelName: "Apex Legends",
      channelId: "UCxYkZIJuDTVm_8zJrK7-FsQ",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      views: 3750000,
      publishedAt: "2023-04-25T18:20:00Z",
      duration: 174, // 2:54
      gameName: "Apex Legends",
      categories: ["fps", "recently-uploaded"],
      isLive: false,
    },
    {
      id: "dQw4w9WgXcQ7",
      title: "Hogwarts Legacy - Complete Walkthrough Part 1",
      thumbnail: "https://i.ytimg.com/vi/ecgL-JV_Yrs/maxresdefault.jpg",
      channelName: "IGN",
      channelId: "UCIak6JLVOjuZxxXcGd3cZsg",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj",
      views: 4200000,
      publishedAt: "2023-02-25T10:15:00Z",
      duration: 3655, // 1:00:55
      gameName: "Hogwarts Legacy",
      categories: ["rpg", "action"],
      isLive: false,
    },
    {
      id: "dQw4w9WgXcQ8",
      title: "Minecraft Dungeons - Full Game Walkthrough",
      thumbnail: "https://i.ytimg.com/vi/KCbE47v1qVk/maxresdefault.jpg",
      channelName: "TheRadBrad",
      channelId: "UCFMZHIQMgBXwqHOX8_MdZ_g",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQcJtp9XfTdQx5-TeoFpCOeXGGQQC8GIQSg=s176-c-k-c0x00ffffff-no-rj",
      views: 2800000,
      publishedAt: "2023-03-16T22:45:00Z",
      duration: 5401, // 1:30:01
      gameName: "Minecraft Dungeons",
      categories: ["minecraft", "action"],
      isLive: false,
    },
  ]
}

// Mock channel data
const channelsData = {
  UCsBjURrPoezykLs9EqgamOA: {
    channelInfo: {
      id: "UCsBjURrPoezykLs9EqgamOA",
      name: "Fireship",
      avatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
      banner:
        "https://yt3.googleusercontent.com/h5Jml_Ckp1D8LqzEUlUaLRiKPbmHJ4Vt4JGhTzpxD9LVgg8M-Mf5K8ORNfVTLKGxH0H_2gQYOg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
      subscribers: 2400000,
      videoCount: 487,
      customUrl: "@fireship",
      description:
        "High-intensity ⚡ code tutorials and tech news to help you ship your app faster. New videos every week covering the topics that real developers need to know about.",
      joinedDate: "2017-04-05T15:26:48Z",
      location: "United States",
      totalViews: 178500000,
      links: [
        { title: "Website", url: "https://fireship.io", icon: "🌐" },
        { title: "Twitter", url: "https://twitter.com/fireship_dev", icon: "🐦" },
        { title: "GitHub", url: "https://github.com/fireship-io", icon: "💻" },
        { title: "Discord", url: "https://discord.gg/fireship", icon: "💬" },
      ],
      playlists: [
        {
          id: "PLl-K7zZEsYLmOF_07IayrTntevxtbUxDL",
          title: "100 Seconds of Code",
          thumbnail: "https://i.ytimg.com/vi/DC471a9qrU4/maxresdefault.jpg",
          videoCount: 48,
        },
        {
          id: "PLl-K7zZEsYLmnJ_FpMOZgyg6XcIGBu2OX",
          title: "Angular Essentials",
          thumbnail: "https://i.ytimg.com/vi/G0bBLvWXBvc/maxresdefault.jpg",
          videoCount: 12,
        },
        {
          id: "PLl-K7zZEsYLn_iBS6QS5fvUZUfzxcRR7R",
          title: "React Hooks",
          thumbnail: "https://i.ytimg.com/vi/TNhaISOUy6Q/maxresdefault.jpg",
          videoCount: 8,
        },
      ],
      communityPosts: [
        {
          id: "post1",
          channelName: "Fireship",
          channelAvatar:
            "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
          content: "Just launched a new course on Next.js 13! Check it out on fireship.io",
          publishedAt: "2023-04-15T14:30:00Z",
          likes: 12500,
          dislikes: 120,
          comments: 342,
          image: "https://fireship.io/courses/nextjs/img/featured.png",
        },
        {
          id: "post2",
          channelName: "Fireship",
          channelAvatar:
            "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
          content: "What programming language should I learn next? Drop your suggestions in the comments!",
          publishedAt: "2023-03-22T18:45:00Z",
          likes: 8700,
          dislikes: 85,
          comments: 1243,
        },
      ],
    },
    videos: [
      {
        id: "dQw4w9WgXcQ",
        title: "React 18 New Features Explained - What You Need to Know About the Latest Update",
        thumbnail: "https://i.ytimg.com/vi/FZ0cG47msEk/maxresdefault.jpg",
        channelName: "Fireship",
        channelId: "UCsBjURrPoezykLs9EqgamOA",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
        views: 856000,
        publishedAt: "2023-03-15T10:15:00",
        duration: 612, // 10:12
        category: "Technology",
      },
      {
        id: "Tn6-PIqc4UM",
        title: "React in 100 Seconds",
        thumbnail: "https://i.ytimg.com/vi/Tn6-PIqc4UM/maxresdefault.jpg",
        channelName: "Fireship",
        channelId: "UCsBjURrPoezykLs9EqgamOA",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
        views: 1200000,
        publishedAt: "2021-01-10T14:00:00",
        duration: 100, // 1:40
        category: "Technology",
      },
      {
        id: "DHjZnJRK_S8",
        title: "7 React Projects for Beginners in 2023",
        thumbnail: "https://i.ytimg.com/vi/DHjZnJRK_S8/maxresdefault.jpg",
        channelName: "Fireship",
        channelId: "UCsBjURrPoezykLs9EqgamOA",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
        views: 450000,
        publishedAt: "2023-01-05T16:30:00",
        duration: 720, // 12:00
        category: "Technology",
      },
      {
        id: "TNhaISOUy6Q",
        title: "React Hooks Explained",
        thumbnail: "https://i.ytimg.com/vi/TNhaISOUy6Q/maxresdefault.jpg",
        channelName: "Fireship",
        channelId: "UCsBjURrPoezykLs9EqgamOA",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
        views: 980000,
        publishedAt: "2022-06-20T11:15:00",
        duration: 840, // 14:00
        category: "Technology",
      },
      {
        id: "Fy9SdZLBZOo",
        title: "Next.js 13 - The Basics",
        thumbnail: "https://i.ytimg.com/vi/Fy9SdZLBZOo/maxresdefault.jpg",
        channelName: "Fireship",
        channelId: "UCsBjURrPoezykLs9EqgamOA",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
        views: 750000,
        publishedAt: "2022-11-10T09:45:00",
        duration: 780, // 13:00
        category: "Technology",
      },
      {
        id: "qm0IfG1GyZU",
        title: "7 TypeScript Tricks You Should Know",
        thumbnail: "https://i.ytimg.com/vi/qm0IfG1GyZU/maxresdefault.jpg",
        channelName: "Fireship",
        channelId: "UCsBjURrPoezykLs9EqgamOA",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
        views: 620000,
        publishedAt: "2022-08-15T13:20:00",
        duration: 540, // 9:00
        category: "Technology",
      },
      {
        id: "jS4aFq5-91M",
        title: "JavaScript Interview Questions",
        thumbnail: "https://i.ytimg.com/vi/jS4aFq5-91M/maxresdefault.jpg",
        channelName: "Fireship",
        channelId: "UCsBjURrPoezykLs9EqgamOA",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
        views: 890000,
        publishedAt: "2022-05-05T10:30:00",
        duration: 660, // 11:00
        category: "Technology",
      },
      {
        id: "cuHDQwQvXW4",
        title: "Tailwind CSS in 100 Seconds",
        thumbnail: "https://i.ytimg.com/vi/cuHDQwQvXW4/maxresdefault.jpg",
        channelName: "Fireship",
        channelId: "UCsBjURrPoezykLs9EqgamOA",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
        views: 1100000,
        publishedAt: "2021-03-25T14:10:00",
        duration: 100, // 1:40
        category: "Technology",
      },
    ],
  },
  UC29ju8bIPH5as8OGnQzwJyA: {
    channelInfo: {
      id: "UC29ju8bIPH5as8OGnQzwJyA",
      name: "Traversy Media",
      avatar:
        "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
      banner:
        "https://yt3.googleusercontent.com/I6_E2PxV5vNQVKWR3NsSsXb5h7ZnFtoZGFXookgFjGI4_iZ3O0-jybuilders-Wy9Dl0jUQaXYnGTY=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
      subscribers: 2100000,
      videoCount: 892,
      customUrl: "@traversymedia",
      description:
        "Traversy Media features the best online web development and programming tutorials for all of the latest web technologies including Node.js, Angular, React, Vue.js, PHP, Rails, HTML, CSS and much more.",
      joinedDate: "2009-10-30T21:33:14Z",
      location: "United States",
      totalViews: 156000000,
      links: [
        { title: "Website", url: "https://traversymedia.com", icon: "🌐" },
        { title: "Twitter", url: "https://twitter.com/traversymedia", icon: "🐦" },
        { title: "GitHub", url: "https://github.com/bradtraversy", icon: "💻" },
        { title: "Discord", url: "https://discord.gg/traversymedia", icon: "💬" },
      ],
      playlists: [
        {
          id: "PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX",
          title: "MERN Stack Front To Back",
          thumbnail: "https://i.ytimg.com/vi/PBTYxXADG_k/maxresdefault.jpg",
          videoCount: 12,
        },
        {
          id: "PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb",
          title: "React Front To Back",
          thumbnail: "https://i.ytimg.com/vi/w7ejDZ8SWv8/maxresdefault.jpg",
          videoCount: 15,
        },
        {
          id: "PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv",
          title: "Modern JavaScript From The Beginning",
          thumbnail: "https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg",
          videoCount: 14,
        },
      ],
      communityPosts: [
        {
          id: "post1",
          channelName: "Traversy Media",
          channelAvatar:
            "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
          content:
            "Just released a new course on the MERN stack! Check it out on Udemy with a special discount for my subscribers.",
          publishedAt: "2023-03-10T12:30:00Z",
          likes: 8200,
          dislikes: 45,
          comments: 267,
          image: "https://i.ytimg.com/vi/PBTYxXADG_k/maxresdefault.jpg",
        },
        {
          id: "post2",
          channelName: "Traversy Media",
          channelAvatar:
            "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
          content: "What tech stack should I cover next? Let me know in the comments!",
          publishedAt: "2023-02-15T16:20:00Z",
          likes: 5400,
          dislikes: 32,
          comments: 876,
        },
      ],
    },
    videos: [
      {
        id: "UBOj6rqRUME",
        title: "Tailwind CSS Crash Course - Build Modern Websites Without Writing CSS",
        thumbnail: "https://i.ytimg.com/vi/UBOj6rqRUME/maxresdefault.jpg",
        channelName: "Traversy Media",
        channelId: "UC29ju8bIPH5as8OGnQzwJyA",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
        views: 2300000,
        publishedAt: "2022-05-15T08:45:00",
        duration: 1496, // 24:56
        category: "Technology",
      },
      {
        id: "w7ejDZ8SWv8",
        title: "React JS Crash Course 2021",
        thumbnail: "https://i.ytimg.com/vi/w7ejDZ8SWv8/maxresdefault.jpg",
        channelName: "Traversy Media",
        channelId: "UC29ju8bIPH5as8OGnQzwJyA",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
        views: 3100000,
        publishedAt: "2021-01-18T15:30:00",
        duration: 5400, // 1:30:00
        category: "Technology",
      },
      {
        id: "hdI2bqOjy3c",
        title: "JavaScript Crash Course For Beginners",
        thumbnail: "https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg",
        channelName: "Traversy Media",
        channelId: "UC29ju8bIPH5as8OGnQzwJyA",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
        views: 5800000,
        publishedAt: "2019-03-13T14:00:00",
        duration: 6000, // 1:40:00
        category: "Technology",
      },
      {
        id: "PBTYxXADG_k",
        title: "MERN Stack Course - Full Stack React, Node.js, Express & MongoDB",
        thumbnail: "https://i.ytimg.com/vi/PBTYxXADG_k/maxresdefault.jpg",
        channelName: "Traversy Media",
        channelId: "UC29ju8bIPH5as8OGnQzwJyA",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
        views: 1200000,
        publishedAt: "2022-08-10T12:45:00",
        duration: 10800, // 3:00:00
        category: "Technology",
      },
      {
        id: "JJSoEo8JSnc",
        title: "CSS Flexbox Tutorial - How to Build Modern Layouts",
        thumbnail: "https://i.ytimg.com/vi/JJSoEo8JSnc/maxresdefault.jpg",
        channelName: "Traversy Media",
        channelId: "UC29ju8bIPH5as8OGnQzwJyA",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
        views: 2700000,
        publishedAt: "2022-05-05T16:20:00",
        duration: 1232, // 20:32
        category: "Technology",
      },
      {
        id: "SLfhMPSQ9U0",
        title: "Next.js Crash Course 2023",
        thumbnail: "https://i.ytimg.com/vi/SLfhMPSQ9U0/maxresdefault.jpg",
        channelName: "Traversy Media",
        channelId: "UC29ju8bIPH5as8OGnQzwJyA",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj",
        views: 980000,
        publishedAt: "2023-02-22T14:15:00",
        duration: 7200, // 2:00:00
        category: "Technology",
      },
    ],
  },
}

// Function to get channel data by ID
export const getChannelData = (channelId) => {
  // Default to Fireship if no channel ID is provided or if the channel doesn't exist
  const defaultChannelId = "UCsBjURrPoezykLs9EqgamOA"
  const id = channelId || defaultChannelId

  return channelsData[id] || channelsData[defaultChannelId]
}



