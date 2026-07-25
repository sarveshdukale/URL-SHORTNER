const shortid = require("shortid");

const URL = require("../models/url.model");

async function handleShowAllURL(req, res) {
  const allUrls = await URL.find({});
  res.render("index", { urls: allUrls });
}

async function handleGetNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({
      message: "URL not found.",
    });
  }

  const ShortID = shortid(8);

  await URL.create({
    shortId: ShortID,
    redirectUrl: body.url,
    visitHistory: [],
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
