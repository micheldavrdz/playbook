class PullRequest {
    constructor(repo, title, lines_changed) {
        this.repo = repo;
        this.title = title;
        this.lines_changed = lines_changed;
        this.status = 'open';
        this.dateCreated = new Date(); // This date object will record the date when the object was instantiated
    }

    getInfo() {
        return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`;
    }
}

console.log('Example 5: Attributes with default values');

// You can instantiate any number of objects from the same class
const myPR = new PullRequest('LaunchX', 'My second PR', 99);

console.log(myPR.getInfo());