const tf = require('@tensorflow/tfjs-node')
const tox = require('@tensorflow-models/toxicity')

const threshold = 0.9;

async function getPrediction(sentence, res) {

    try {
        const model = await tox.load(threshold);
        return await model.classify(sentence);

        // model.classify(sentence)
        //     .then((predictions) => {
        //         res.json({
        //             predictions,
        //         });
        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })
    } catch (err) {
        console.error('error initializing model')
        console.error(err)
    }
}

module.exports = getPrediction
