function Employee() {
    var name;
    this.getName = function() {
        return this.name
    }
    this.setName = function(name) {
        this.name = name;
    }

}

worker = new Employee;

worker.setName('jiten');

document.getElementById('firstDiv').innerHTML = worker.getName();


worker2 = new Employee;

worker2.setName('sunny')
document.getElementById("firstDiv").innerHTML = worker2.getName();

worker3 = new Employee;

worker3.setName('Mangal Pandey')
document.getElementById('firstDiv').innerHTML = worker3.getName();