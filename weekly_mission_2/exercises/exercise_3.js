console.log('1. Github - Repository\n');

class Repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close) {
        this.name = name;
        this.author = author;
        this.language = language;
        this.numberOfCommits = numberOfCommits;
        this.stars = stars;
        this.forks = forks;
        this.issues_open = issues_open;
        this.issues_close = issues_close;
    }

    getTotalIssues() {
        return this.issues_open + this.issues_close;
    }

    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`;
    }
};

const myRepo = new Repo('LaunchX', 'micheldavrdz', 'JavaScript', 100, 200, 450, 10, 10);

console.log(myRepo.getTotalIssues(), '\n');
console.log(myRepo.getGeneralInfo(), '\n');

console.log('2. Github - Issue\n');

class Issue {
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated) {
        this.title = title;
        this.repositoryNameAssociated = repositoryNameAssociated;
        this.status = status;
        this.numberOfComments = numberOfComments;
        this.labels = labels;
        this.author = author;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;
    }

    getTitleAndAuthor() {
        return `${this.title} - ${this.author}`;
    }

    getGeneralInfo() {
        return `Issue: ${this.title}\nCreated by: ${this.author}\nStatus: ${this.status}\nNumber of comments: ${this.numberOfComments}\nLabels: ${this.labels}\nDate created: ${this.dateCreated}\nLast updated: ${this.lastUpdated}`;
    }
};

const anIssue = new Issue('Button not working', 'LaunchX', 'Open', 15, 'bug', 'micheldavrdz', '2020-02-01', '2020-02-02');

console.log(anIssue.getTitleAndAuthor(), '\n');
console.log(anIssue.getGeneralInfo(), '\n');

console.log('3. Github - Pull Request\n');

class PullRequest {
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated) {
        this.title = title;
        this.branchName = branchName;
        this.dateCreated = dateCreated;
        this.status = status;
        this.repositoryNameAssociated = repositoryNameAssociated;
    }

    getStatus() {
        return `${this.status}`;
    }

    getGeneralInfo() {
        return `Pull request: ${this.title}\nRepository: ${this.repositoryNameAssociated}\nBranch name: ${this.branchName}\nDate created: ${this.dateCreated}\nStatus: ${this.status}`;
    }
};

const aPullRequest = new PullRequest('Fixing login button', 'main', '2020-02-04', 'Open', 'LaunchX');

console.log(aPullRequest.getStatus(), '\n');
console.log(aPullRequest.getGeneralInfo(), '\n');

console.log('4. Twitter\n');

class TwitterUser {
    constructor(username, profileName, bio, birthday, pronouns, location, website, joined, following, followers, verified) {
        this.username = username;
        this.profileName = profileName;
        this.bio = bio;
        this.birthday = birthday;
        this.pronouns = pronouns;
        this.location = location;
        this.website = website;
        this.joined = joined;
        this.following = following;
        this.followers = followers;
        this.verified = verified;
    }

    getSimpleProfile() {
        return `Account: ${this.username}\nProfile name: ${this.profileName}\nBio: ${this.bio}\nBirthday: ${this.birthday}\nLocation: ${this.location}`
    }
};

const aTwitterUser = new TwitterUser('MichelRdz', 'Michel Dav', 'I am a frontend developer', '2018-01-01', 'He/Him', 'México', 'https://github.com/micheldavrdz.com', '2020-02-01', 100, 100, false);

console.log(aTwitterUser.getSimpleProfile(), '\n');

class TrendingTopic {
    constructor(name, url, query, tweetCount, description) {
        this.name = name;
        this.url = url;
        this.query = query;
        this.tweetCount = tweetCount;
        this.description = description;
    }

    getTrendingTopic() {
        return `name: ${this.name}\nurl: ${this.url}\nquery: ${this.query}\ntweetCount: ${this.tweetCount}\ndescription: ${this.description}`
    }
};

const aTrendingTopic = new TrendingTopic('ATrendingTopic', 'https://twitter.com/search?q=ATrendingTopic', 'ATrendingTopic', 1000, 'This is a description for the trending topic');

console.log(aTrendingTopic.getTrendingTopic(), '\n');

class Hashtag {
    constructor(name, url, query, tweetCount) {
        this.name = name;
        this.url = url;
        this.query = query;
        this.tweetCount = tweetCount;
    }

    getHashtag() {
        return `name: ${this.name}\nurl: ${this.url}\nquery: ${this.query}\ntweetCount: ${this.tweetCount}\n`
    }
}

const aHashtag = new Hashtag('#hashtag', 'https://twitter.com/search?q=%23hashtag', '#hashtag', 12000);

console.log(aHashtag.getHashtag(), '\n');

console.log('7. Facebook\n');

class FacebookUser {
    constructor(username, profileName, url, friends, friendsList) {
        this.username = username;
        this.profileName = profileName;
        this.url = url;
        this.friends = friends;
        this.friendsList = friendsList;
    }

    getSimpleProfile() {
        return `Account: ${this.username}\nProfile name: ${this.profileName}\nURL: ${this.url}\nFriends: ${this.friends}, friendsList: ${JSON.stringify(this.friendsList)}` //Stringify para que no se vea como un objeto en la consola
    }
};

const aFacebookUser = new FacebookUser(
    'arandomuser', 
    'Something Something', 
    'https://facebook.com/arandomuser', 
    5, 
    [
        {
          name: 'Friend1',
          username: 'friend1',
          url: `https://facebook.com/friend1`,
        },
        {
          name: 'Friend2',
          username: 'friend2',
          url: `https://facebook.com/friend2`,
        },
        {
          name: 'Friend3',
          username: 'friend3',
          url: `https://facebook.com/friend3`,
        },
        {
          name: 'Friend4',
          username: 'friend4',
          url: `https://facebook.com/friend4`,
        },
        {
          name: 'Friend5',
          username: 'friend5',
          url: `https://facebook.com/friend5`,
        },
    ],
);

console.log(aFacebookUser.getSimpleProfile(), '\n');

class FacebookPost {
    constructor(username, profileName, postId, url, date, reactions) {
        this.username = username;
        this.profileName = profileName;
        this.postId = postId;
        this.url = url;
        this.date = date;
        this.reactions = reactions;
    }

    getSimplePost() {
        return `User: ${this.username}\nProfile name: ${this.profileName}\nURL: ${this.url}\nDate: ${this.date}\nReactions: ${JSON.stringify(this.reactions)}` //Stringify para que no se vea como un objeto en la consola
    }
};

const aFacebookPost = new FacebookPost(
    'arandomuser',
    'Something Something',
    '123456789',
    'https://www.facebook.com/arandomuser/posts/12334456789',
    '2022-01-15',
    [
        {
            type: 'Like',
            count: 10,
        },
        {
            type: 'Love',
            count: 0,
        },
        {
            type: 'Care',
            count: 0,
        },
        {
            type: 'Wow',
            count: 0,
        },
        {
            type: 'Haha',
            count: 20,
        },
        {
            type: 'Sad',
            count: 0,
        },
        {
            type: 'Angry',
            count: 0,
        }
    ],
);

console.log(aFacebookPost.getSimplePost(), '\n');

class FacebookBio {
    constructor(username, profileName, bioInfo, birthday, phone, email, livesIn, worksAt, education, relationshipStatus) {
        this.username = username;
        this.profileName = profileName;
        this.bioInfo = bioInfo;
        this.birthday = birthday;
        this.phone = phone;
        this.email = email;
        this.livesIn = livesIn;
        this.worksAt = worksAt;
        this.education = education;
        this.relationshipStatus = relationshipStatus;
    }

    getSimpleBio() {
        return `User: ${this.username}\nProfile name: ${this.profileName}\nBio: ${this.bioInfo}\nBirthday: ${this.birthday}\nPhone: ${this.phone}\nEmail: ${this.email}\nLives in: ${this.livesIn}\nWorks at: ${this.worksAt}\nEducation: ${this.education}\nRelationship status: ${this.relationshipStatus}`
    }
};

const aFacebookBio = new FacebookBio(
    'arandomuser',
    'Something Something',
    'I am a random user',
    '1980-09-10',
    '+52 01 2345 6789',
    'arandomuser@email.com',
    'Mexico City',
    'LaunchX',
    'A random university',
    'Single',
);

console.log(aFacebookBio.getSimpleBio(), '\n');

console.log('8. Uber\n');

class UberUser {
    constructor(username, userId, firstName, lastName, Phone, email, profilePicture, dateJoined, country) {
        this.username = username;
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.Phone = Phone;
        this.email = email;
        this.profilePicture = profilePicture;
        this.dateJoined = dateJoined;
        this.country = country;
    }

    getSimpleProfile() {
        return `User: ${this.username}\nUser ID: ${this.userId}\nFirst name: ${this.firstName}\nLast name: ${this.lastName}\nPhone: ${this.Phone}\nEmail: ${this.email}\nCountry: ${this.country}`
    }
};

const anUberUser = new UberUser(
    'arandomuser',
    '123456789',
    'Something',
    'Something',
    '+52 01 2345 6789',
    'arandomuser@email.com',
    'user_123456789.png',
    '2018-01-01',
    'MX',
);

console.log(anUberUser.getSimpleProfile(), '\n');

class UberTravel {
    constructor(username, firstName, lastName, userId, date, from, fromCoordinates, to, toCoordinates, distance, estimatedTime, price, driverUsername, driverName, driverId, driverPicture, driverPhone, driverNumberPlate, driverCarModel) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userId = userId;
        this.date = date;
        this.from = from;
        this.fromCoordinates = fromCoordinates;
        this.to = to;
        this.toCoordinates = toCoordinates;
        this.distance = distance;
        this.estimatedTime = estimatedTime;
        this.price = price;
        this.driverUsername = driverUsername;
        this.driverName = driverName;
        this.driverId = driverId;
        this.driverPicture = driverPicture;
        this.driverPhone = driverPhone;
        this.driverNumberPlate = driverNumberPlate;
        this.driverCarModel = driverCarModel;
    }

    getUserTravel() {
        return `User: ${this.username}\nFirst name: ${this.firstName}\nLast name: ${this.lastName}\nTravel Date: ${this.date}\nFrom: ${this.from}\nTo: ${this.to}\nDistance: ${this.distance}\nEstimated time: ${this.estimatedTime}\nPrice: ${this.price}\nDriver name: ${this.driverName}\nDriver picture: ${this.driverPicture}\nDriver phone: ${this.driverPhone}\nDriver number plate: ${this.driverNumberPlate}\nDriver car model: ${this.driverCarModel}`
    }
}

const anUberTravel = new UberTravel(
    'arandomuser',
    'Something',
    'Something',
    '123456789',
    '2022-03-10',
    'Calle Emiliano Zapata 1111, Mexico City, Mexico',
    '19.4326, -99.1332',
    'Calle Manuel Martinez 3456, Mexico City, Mexico',
    '19.4326, -99.1332',
    '8 km',
    '20 min',
    '$130.00 MXN',
    'driver_123456789',
    'Driver Something Something',
    '123456789',
    'driver_123456789.png',
    '+52 01 2345 6789',
    'ABC123',
    'Toyota Corolla',
);



console.log(anUberTravel.getUserTravel(), '\n');