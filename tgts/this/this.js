const students1 = {
    name : 'Pritiranjan',
    lastName : 'behera',
    age : 30,
    greet : function(){
        console.log(`Hi ${this.name} Good morning`)
        },
    greetAfternoon : function(){
        console.log(`Hi ${this.name}, ,${this.lastName} good Afternoon Are you ${this.age} years old ??`)
    }
    }

    const students2 = {
    name : 'Ratiranjan',
    lastName : 'behera',
    age : 24,
    greet : function(){
        console.log(`Hi ${this.name} Good morning`)
        },
    greetAfternoon : function(){
        console.log(`Hi ${this.name}, ,${this.lastName} good Afternoon Are you ${this.age} years old ??`)
    }


    }
        const students3 = {
    name : 'Shradha',
    lastName : 'behera',
    age : 24,
    greet : ()=>{
        console.log(`Hi ${this.name} Good morning`)
        },
    greetAfternoon : ()=>{
        console.log(`Hi ${this.name}, ,${this.lastName} good Afternoon Are you ${this.age} years old ??`)
        console.log(this)
    }
    }

    students1.greet()
    students1.greetAfternoon()
    students2.greetAfternoon()
    students3.greetAfternoon()



