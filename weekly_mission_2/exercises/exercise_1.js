console.log('1. Github - Repository\n');

const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
}
   
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo(), '\n')

console.log('2. Github - Issue\n');

const issue = {
    title: 'Optimización de imagenes',
    repositoryNameAssociated: 'LaunchX',
    status: 'Open',
    numberOfComments: 10,
    labels: ['bug', 'recomendación'],
    author: 'micheldavrdz',
    dateCreated: '2022-03-28',
    lastUpdated: '2022-03-29',

    getTitleAndAuthor: function(){
      return `${this.title} - ${this.author}`
    },

    getGeneralInfo: function(){
        return `Issue: ${this.title}\nCreated by: ${this.author}\nStatus: ${this.status}\nNumber of comments: ${this.numberOfComments}\nLabels: ${this.labels}\nDate created: ${this.dateCreated}\nLast updated: ${this.lastUpdated}`
    }
}

console.log(issue.getTitleAndAuthor(), '\n')
console.log(issue.getGeneralInfo(), '\n')

console.log('3. Github - Pull Request\n');

const PullRequest = {
    title: 'Actualización en el algoritmo de optimización de imagenes',
    branchName: 'dev',
    dateCreated: '2022-04-18',
    status: 'Open',
    repositoryNameAssociated: 'LaunchX',

    getStatus: function(){
      return `${this.status}`
    },

    getGeneralInfo: function(){
        return `Pull request: ${this.title}\nRepository: ${this.repositoryNameAssociated}\nBranch name: ${this.branchName}\nDate created: ${this.dateCreated}\nStatus: ${this.status}`
    }
}

console.log(PullRequest.getStatus(), '\n')
console.log(PullRequest.getGeneralInfo(), '\n')

console.log('4. Twitter\n');

const twitter_user = {
    username: 'arandomuser',
    profileName: 'Something Something',
    bio: "I'm a random user",
    birthday: '1980-09-10',
    pronouns: 'He/Him',
    location: 'MX',
    website: 'https://github.com/something',
    joined: '2018-01-01',
    following: 373,
    followers: 10340,
    verified: true,

    getSimpleProfile: function(){
      return `Account: ${this.username}\nProfile name: ${this.profileName}\nBio: ${this.bio}\nBirthday: ${this.birthday}\nLocation: ${this.location}`
    },
}

const trending_topic = {
    name: 'ATrendingTopic',
    url: 'https://twitter.com/search?q=ATrendingTopic',
    query: 'ATrendingTopic',
    tweetCount: 10000,
    description: 'This is a description for the trending topic',

    getTrendingTopic: function(){
      return `name: ${this.name}\nurl: ${this.url}\nquery: ${this.query}\ntweetCount: ${this.tweetCount}\ndescription: ${this.description}`
    }
}

const hashtag = {
    name: '#hashtag',
    url: 'https://twitter.com/search?q=%23hashtag',
    query: '#hashtag',
    tweetCount: 12000,

    getHashtag: function(){
      return `name: ${this.name}\nurl: ${this.url}\nquery: ${this.query}\ntweetCount: ${this.tweetCount}`
    }
}

console.log(twitter_user.getSimpleProfile(), '\n')
console.log(trending_topic.getTrendingTopic(), '\n')
console.log(hashtag.getHashtag(), '\n')

console.log('7. Facebook\n');

const facebook_user = {
    username: 'arandomuser',
    profileName: 'Something Something',
    url: `https://facebook.com/arandomuser`,
    friends: 5,
    friendsList: [
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

    getSimpleProfile: function(){
      return `Account: ${this.username}\nProfile name: ${this.profileName}\nURL: ${this.url}\nFriends: ${this.friends}, friendsList: ${JSON.stringify(this.friendsList)}` //Stringify para que no se vea como un objeto en la consola
    }
}

const facebook_post = {
    username: 'arandomuser',
    profileName: 'Something Something',
    postId: '123456789',
    url: `https://www.facebook.com/arandomuser/posts/12334456789`,
    date: '2022-01-15',
    reactions: [
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

    getSimplePost: function(){
      return `User: ${this.username}\nProfile name: ${this.profileName}\nURL: ${this.url}\nDate: ${this.date}\nReactions: ${JSON.stringify(this.reactions)}` //Stringify para que no se vea como un objeto en la consola
    }
}

const facebook_bio = {
    username: 'arandomuser',
    profileName: 'Something Something',
    bioInfo: 'I am a random user',
    birthday: '1980-09-10',
    phone: '+52 01 2345 6789',
    email: 'arandomuser@email.com',
    livesIn: 'Mexico City',
    worksAt: 'LaunchX',
    education: 'A random university',
    relationshipStatus: 'Single',

    getSimpleBio: function(){
      return `User: ${this.username}\nProfile name: ${this.profileName}\nBio: ${this.bioInfo}\nBirthday: ${this.birthday}\nPhone: ${this.phone}\nEmail: ${this.email}\nLives in: ${this.livesIn}\nWorks at: ${this.worksAt}\nEducation: ${this.education}\nRelationship status: ${this.relationshipStatus}`
    }
}

console.log(facebook_user.getSimpleProfile(), '\n')
console.log(facebook_post.getSimplePost(), '\n')
console.log(facebook_bio.getSimpleBio(), '\n')

console.log('8. Uber\n');

const uber_user = {
    username: 'arandomuser',
    userId: '123456789',
    firstName: 'Something',
    lastName: 'Something',
    Phone: '+52 01 2345 6789',
    email: 'arandomuser@email.com',
    profilePicture: 'user_123456789.png',
    dateJoined: '2018-01-01',
    country: 'MX',

    getSimpleProfile: function(){
      return `User: ${this.username}\nUser ID: ${this.userId}\nFirst name: ${this.firstName}\nLast name: ${this.lastName}\nPhone: ${this.Phone}\nEmail: ${this.email}\nCountry: ${this.country}`
    },
}

const uber_travel = {
    username: 'arandomuser',
    firstName: 'Something',
    lastName: 'Something',
    userId: '123456789',
    date: '2022-03-10',
    from: 'Calle Emiliano Zapata 1111, Mexico City, Mexico',
    fromCoordinates: '19.4326, -99.1332',
    to: 'Calle Manuel Martinez 3456, Mexico City, Mexico',
    toCoordinates: '19.4326, -99.1332',
    distance: '8 km',
    estimatedTime: '20 min',
    price: '$130.00 MXN',
    driverUsername: 'driver_123456789',
    driverName: 'Driver Something Something',
    driverId: '123456789',
    driverPicture: 'driver_123456789.png',
    driverPhone: '+52 01 2345 6789',
    driverNumberPlate: 'ABC123',
    driverCarModel: 'Toyota Corolla',

    getUserTravel: function(){
      return `User: ${this.username}\nFirst name: ${this.firstName}\nLast name: ${this.lastName}\nTravel Date: ${this.date}\nFrom: ${this.from}\nTo: ${this.to}\nDistance: ${this.distance}\nEstimated time: ${this.estimatedTime}\nPrice: ${this.price}\nDriver name: ${this.driverName}\nDriver picture: ${this.driverPicture}\nDriver phone: ${this.driverPhone}\nDriver number plate: ${this.driverNumberPlate}\nDriver car model: ${this.driverCarModel}`
    }
}

console.log(uber_user.getSimpleProfile(), '\n')
console.log(uber_travel.getUserTravel(), '\n')