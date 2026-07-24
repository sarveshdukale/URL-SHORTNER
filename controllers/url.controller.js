const shortid = require("shortid");

const URL = require("../models/url.model");

async function handleGetNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({
            message : "URL not found."
        })
    }

    const ShortID = shortid.generate(8)
    
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


async function redirectToShortId(req,res) {
    const shortId = req.params.shortId;

    if (!shortId) {
        return res.status(401).json({
            message:"Enter shortId in parametr"
        })
    }

    const entry = await URL.findOneAndUpdate({
        shortId,
    }, {
        $push: {
            visitHistory: Date.now()
        }
    })
    res.redirect(entry.redirectUrl).status(200).json({
        message:"Redirect Succesfully..."
    })


}

module.exports = {
    handleGetNewShortURL,
    redirectToShortId
}