export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/mine/mine",
    "pages/todo/todo",
    "pages/chat/chat",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "",
        iconPath: "assets/icons/hourglass-inactive.png",
        selectedIconPath: "assets/icons/hourglass-active.png",
      },

      {
        pagePath: "pages/todo/todo",
        text: "",
        iconPath: "assets/icons/todo-inactive.png",
        selectedIconPath: "assets/icons/todo-active.png",
      },
      {
        pagePath: "pages/chat/chat",
        text: "",
        iconPath: "assets/icons/chat-inactive.png",
        selectedIconPath: "assets/icons/chat-active.png",
      },
      {
        pagePath: "pages/mine/mine",
        text: "",
        iconPath: "assets/icons/mine-inactive.png",
        selectedIconPath: "assets/icons/mine-active.png",
      },
    ],
  },
});
