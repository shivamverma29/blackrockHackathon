const criteria = {
    age: { weight: 1, range: [25, 60] },
    incomeLevel: { weight: 2, min: 100000 },
    educationLevel: { weight: 1.5, field: ['Finance', 'Business'] },
    occupation: { weight: 1.5, field: ['Finance', 'Business', 'HighIncome'] },
    digitalEngagement: { weight: 1, minVisits: 10, minTime: 30 },
    purchaseHistory: { weight: 1.5, minOrderValue: 500 }
};

const user = {
    age: 35,
    incomeLevel: 120000,
    educationLevel: 'Finance',
    occupation: 'Business',
    digitalEngagement: { visits: 15, avgTime: 45 },
    purchaseHistory: { avgOrderValue: 600 }
};

const isPersonOfInterest = (user, criteria) => {
    let score = 0;
    let totalWeight = 0;

    if (user.age >= criteria.age.range[0] && user.age <= criteria.age.range[1]) {
        score += criteria.age.weight;
    }
    totalWeight += criteria.age.weight;

    if (user.incomeLevel >= criteria.incomeLevel.min) {
        score += criteria.incomeLevel.weight;
    }
    totalWeight += criteria.incomeLevel.weight;

    if (criteria.educationLevel.field.includes(user.educationLevel)) {
        score += criteria.educationLevel.weight;
    }
    totalWeight += criteria.educationLevel.weight;

    if (criteria.occupation.field.includes(user.occupation)) {
        score += criteria.occupation.weight;
    }
    totalWeight += criteria.occupation.weight;

    if (user.digitalEngagement.visits >= criteria.digitalEngagement.minVisits &&
        user.digitalEngagement.avgTime >= criteria.digitalEngagement.minTime) {
        score += criteria.digitalEngagement.weight;
    }
    totalWeight += criteria.digitalEngagement.weight;

    if (user.purchaseHistory.avgOrderValue >= criteria.purchaseHistory.minOrderValue) {
        score += criteria.purchaseHistory.weight;
    }
    totalWeight += criteria.purchaseHistory.weight;

    const threshold = totalWeight * 0.7; // For example, 70% of the total possible score
    return score >= threshold;
};

console.log(isPersonOfInterest(user, criteria)); // Output: true or false
