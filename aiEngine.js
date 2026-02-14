function generateAIRecommendation(data) {
    const { gender, occasion, season, color } = data;

    let baseOutfit = "";
    let extraStyle = "";

    // Gender Logic
    if (gender === "Female") {
        baseOutfit = "Elegant dress";
    } else {
        baseOutfit = "Smart casual outfit";
    }

    // Occasion Logic
    if (occasion === "Party") {
        extraStyle = "with stylish accessories and bold design";
    } else if (occasion === "Formal") {
        extraStyle = "with minimal and classy styling";
    } else {
        extraStyle = "with relaxed and comfortable vibes";
    }

    // Season Logic
    if (season === "Winter") {
        extraStyle += ", layered with a warm jacket";
    } else {
        extraStyle += ", made with breathable fabric";
    }

    return `AI Recommendation: A ${color} ${baseOutfit} ${extraStyle}.`;
}

module.exports = generateAIRecommendation;
