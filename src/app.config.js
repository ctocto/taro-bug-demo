export default {
  pages: ["pages/index/index", "pages/user/user", "pages/detail/detail"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    backgroundColor: "#ffffff",
    color: "#B3B3B3",
    selectedColor: "#d81d1d",
    list: [
      {
        pagePath: "pages/index/index",
        text: "Home",
        iconPath: "./static/images/tabbar-quan.png",
        selectedIconPath: "./static/images/tabbar-quan-selected.png"
      },
      {
        pagePath: "pages/user/user",
        text: "User",
        iconPath: "./static/images/tabbar-user.png",
        selectedIconPath: "./static/images/tabbar-user-selected.png"
      }
    ]
  }
};
