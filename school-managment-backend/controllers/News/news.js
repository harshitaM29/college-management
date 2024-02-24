const News = require("../../models/News/news");

//controller to get news of this week
exports.getAllNews = async (req, res) => {
  try {
    // Get start and end of the current week
    const startOfWeek = new Date();
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 7);

    const news = await News.findAll({
      where: {
        publish_date: {
          [Op.between]: [startOfWeek, endOfWeek],
        },
      },
    });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to add news
exports.addNewNews = async (req, res) => {
  try {
    const { title, content, publish_date } = req.body;
    const news = News.create({
      title,
      content,
      publish_date,
    });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
