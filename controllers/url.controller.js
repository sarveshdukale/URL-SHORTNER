const shortid = require("shortid");

const URL = require("../models/url.model");
const User = require("../models/user.model");

async function handleShowAllURL(req, res) {
  const allUrls = await URL.find({});
  return res.status(200).json({
    urls: allUrls,
  });
  // res.render("index", { urls: allUrls });
}

async function handleGetNewShortURL(req, res) {
  const body = req.body;
  console.log(req.User);

  if (!body.url) {
    return res.status(400).json({
      message: "URL not found.",
    });
  }

  const ShortID = shortid.generate();

  await URL.create({
    shortId: ShortID,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy: req.User._id,
  });

  return res.status(201).json({
    message: "created",
    shortid: ShortID,
  });
}

async function redirectToShortId(req, res) {
  const shortId = req.params.shortId;

  if (!shortId) {
    return res.status(401).json({
      message: "Enter shortId in parametr",
    });
  }
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamps: Date.now() },
      },
    },
  );

  if (!entry) {
    return res.status(401).json({
      message: "URL not found",
    });
  }

  return res.redirect(entry.redirectUrl);
}

async function handleUrlAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });

  return res.status(200).json({
    visitCount: result.visitHistory.length,
    visitHistory: result.visitHistory,
  });
}

module.exports = {
  handleGetNewShortURL,
  redirectToShortId,
  handleUrlAnalytics,
  handleShowAllURL,
};
