class MissionCommander {
    constructor(name, mission) {
        this.name = name;
        this.mission = mission;
        this.students = 0;
        this.lives = 0;
    }

    get getStudents() {
        return this.students;
    }

    get getLives() {
        return this.lives;
    }

    set setStudents(students) {
        this.students = students;
    }

    set setLives(lives) {
        this.lives = lives;
    }
}

console.log("Example 7: Modifying an object's attributes using setters");

const missionCommanderNode = new MissionCommander('Carlo', 'NodeJS');

console.log(missionCommanderNode.getStudents); // 0 by default
console.log(missionCommanderNode.getLives); // 0 by default

// Updating the attributes using setters
missionCommanderNode.setStudents = 100;
missionCommanderNode.setLives = 3;

console.log(missionCommanderNode.getStudents); // 0 by default (100 now)
console.log(missionCommanderNode.getLives); // 0 by default (3 now)